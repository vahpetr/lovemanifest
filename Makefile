
release:
  # собрать, --no-cache указать в случае если нужна чистая сборка (дольше)
	@docker build -t vahpetr/lovemanifest . --progress=plain
  # тегируем новую версию
	@docker tag vahpetr/lovemanifest vahpetr/lovemanifest:$(version)
  # публикуем новую версию
	@docker push vahpetr/lovemanifest:$(version)

run:
  # собрать, --no-cache указать в случае если нужна чистая сборка (дольше)
	@docker build -t vahpetr/lovemanifest . --progress=plain
  # запуск локального сервера (сама не обновляется)
	@docker run -it --rm --name lovemanifest -p 5000:5000 -e NGINX_PORT=5000 vahpetr/lovemanifest

entry:
	@docker build -t vahpetr/lovemanifest . --progress=plain
  # зайти в контейнер и посмотреть что получилось (заходит в последний слой)
	@docker run -it --rm --name lovemanifest --entrypoint sh vahpetr/lovemanifest
