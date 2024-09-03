docker-build: # 1. build the app 
	docker compose build --pull --no-cache

docker-up: # 2. start the app
	docker compose up -d

docker-down: # 3. stop the app
	docker compose down

docker-logs: # 4. show the logs
	docker compose logs -f

# npm-install-library:
# 	docker compose run --rm microcart-app npm install $(library)