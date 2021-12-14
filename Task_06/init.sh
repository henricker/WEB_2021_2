#Running docker mongo
echo "up mongo container"
cd backend && docker-compose up -d

# Running backend
echo "install dependencies to backend"
npm install

# Running frontend
echo "install depencies to frontend"
cd ../frontend && npm install