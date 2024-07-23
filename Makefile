docker-build:
	docker compose build --pull --no-cache

docker-up:
	docker compose up -d

docker-down:
	docker compose down --remove-orphans

docker-down-all:
	docker compose down -v --remove-orphans

npm-install-library:
	docker compose run --rm microcart-app npm install $(library)

show-logs:
	docker compose logs --tail=0 --follow