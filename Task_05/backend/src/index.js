const app = require('./app/app')
require('./data/MongoConn')

app.listen(3333, () => console.log('Running on port 3333'))