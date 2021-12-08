 #Running docker mongo
 docker run -d --name web_2021_mongodb \      
    -e MONGO_INITDB_ROOT_USERNAME=web_2021_mongodb \
    -e MONGO_INITDB_ROOT_PASSWORD=web_2021_mongodb \
    -p 27017:27017 mongo

# Running backend
cd backend && npm run start

# Running frontend
cd ../frontend && npm run start