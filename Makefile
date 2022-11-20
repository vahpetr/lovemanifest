release:
  # собрать, --no-cache указать в случае если нужна чистая сборка (дольше)
	@docker build -t vahpetr/lovemanifest . --progress=plain
  # тегируем новую версию
	@docker tag vahpetr/lovemanifest vahpetr/lovemanifest:$(version)
  # публикуем новую версию
	@docker push vahpetr/lovemanifest:$(version)

run:
  # собрать, --no-cache указать в случае если нужна чистая сборка (дольше)
	@docker compose build --progress=plain
  # запуск локального сервера (сама не обновляется)
	@docker compose up

entry:
	@docker build -t vahpetr/lovemanifest . --progress=plain
  # зайти в контейнер и посмотреть что получилось (заходит в последний слой)
	@docker run -it --rm --name lovemanifest --entrypoint sh vahpetr/lovemanifest

stop:
	@docker container stop lovemanifest
	@docker container rm lovemanifest
