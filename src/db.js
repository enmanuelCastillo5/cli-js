const { connect, connection } = require('mongoose')
require('./config')
const connectDB = async () => {
    await connect(process.env.StringDB)
}

connection.on('error', err => console.log(err))
module.exports = {
    connectDB,
    connection
}