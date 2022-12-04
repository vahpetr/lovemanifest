# lovemanifest

## Build

```sh
# запусить
make run

# зайти в контейнер
make entry

# пример сборки и публикации (сборка происходит под локальной платформой)
make release version=1.0.2212042330

# пример staging публикации под произвольную платформу (linux/amd64)
PLATFORM=linux/amd64 VERSION=1.0.2212042330-staging && \
docker build -f Dockerfile -t vahpetr/lovemanifest $(for i in `cat .env`; do out+="--build-arg $i " ; done; echo $out;out="") . --progress=plain --platform ${PLATFORM} && \
docker tag vahpetr/lovemanifest vahpetr/lovemanifest:${VERSION} && \
docker push vahpetr/lovemanifest:${VERSION}

# пример production публикации под произвольную платформу (linux/amd64)
PLATFORM=linux/amd64 VERSION=1.0.2212042330 && \
docker build -f Dockerfile -t vahpetr/lovemanifest $(for i in `cat .env.production.local`; do out+="--build-arg $i " ; done; echo $out;out="") . --progress=plain --platform ${PLATFORM} && \
docker tag vahpetr/lovemanifest vahpetr/lovemanifest:${VERSION} && \
docker push vahpetr/lovemanifest:${VERSION}

# пример создания подписанной ссылки
node scripts/sign-cli.js '/lovemanifest/media/galleries/faces/faces2_desk.jpg@avif' '/wm:0.3:soea:16:16:0.15'
```

## Links

1. [code splitting](https://nextjs.org/docs/migrating/from-react-router#code-splitting)
2. [unifiedjs](https://unifiedjs.com/learn/)
3. [dynamic-import](https://nextjs.org/docs/advanced-features/dynamic-import)
4. [cdn](https://imgix.com/)
5. [responsive-accessible-typography](https://blog.eleven-labs.com/en/responsive-accessible-typography/)
6. [responsive-font-size](https://matthewjamestaylor.com/responsive-font-size)
7. [typography](https://web.dev/learn/design/typography/)
