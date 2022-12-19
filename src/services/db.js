const mysql = require('mysql2/promise')
const config = require('../config/config')

async function query(sql,params){
    const conexion=await mysql.createConnection(config.db)
    const [results,] =await conexion.execute(sql,params)
    return results
}

module.exports = {
    query
}