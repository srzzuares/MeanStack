require('./db')
const Server = require('./app')
Server.listen(Server.get('PORT'),Server.get('runServer'))