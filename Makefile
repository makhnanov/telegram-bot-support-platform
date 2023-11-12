up:
	docker compose up --force-recreate --build --remove-orphans #--detach
nginx:
	docker compose exec nginx bash
#shell:
	#docker compose exec
php:
	docker compose exec php bash
generate-readme:
	./generate-readme.sh
node:
	docker compose run node bash

	npm run dev -- --host