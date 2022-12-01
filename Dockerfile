ARG S3_URL
ARG IMGPROXY_KEY
ARG IMGPROXY_SALT
ARG YM_TRACKING_ID
FROM node:19.0.0-alpine3.16 as builder
ARG S3_URL
ARG IMGPROXY_KEY
ARG IMGPROXY_SALT
ARG YM_TRACKING_ID
ENV NEXT_TELEMETRY_DISABLED=1 \
    S3_URL=${S3_URL} \
    IMGPROXY_KEY=${IMGPROXY_KEY} \
    IMGPROXY_SALT=${IMGPROXY_SALT} \
    YM_TRACKING_ID=${YM_TRACKING_ID}
WORKDIR /usr/app
COPY package*.json /usr/app
RUN npm ci

ADD .eslintrc.json /usr/app
ADD next-env.d.ts /usr/app
ADD next.config.mjs /usr/app
ADD tsconfig.json /usr/app

COPY public /usr/app/public
COPY src /usr/app/src
COPY scripts /usr/app/scripts
COPY plugins /usr/app/plugins

RUN npm run build
RUN npm run export
RUN for f in `find out -type f \
      -not -name "*.jpg" \
      -not -name "*.webp" \
      -not -name "*.png" \
      -not -name "*.svg" \
      -not -name "*.eot" \
      -not -name "*.ttf" \
      -not -name "*.woff" \
      -not -name "*.woff2"`; \
      do gzip -9c "$f">"$f.gz"; \
    done

FROM nginx:1.23.2-alpine

RUN apk --update --no-cache upgrade
RUN apk add --no-cache openssl

COPY nginx/site.template /etc/nginx/conf.d/site.template
COPY --from=builder /usr/app/out /usr/share/nginx/html
CMD /bin/sh -c "envsubst < /etc/nginx/conf.d/site.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"
