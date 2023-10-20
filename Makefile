up:
	docker compose up --force-recreate --build --remove-orphans #--detach
generate-readme:
	./generate-readme.sh
node:
	docker compose run node bash

	npm run dev -- --host