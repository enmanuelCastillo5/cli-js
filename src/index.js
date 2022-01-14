#!/usr/bin/env node
const {connectDB} = require('./db')
require('./commands')

const main = async () => {
    await connectDB()
}

main()