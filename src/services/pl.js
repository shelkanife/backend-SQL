const db = require('./db')
const helper = require('../helpers/helper')
const config = require('../config/config')


async function getMultiple(page=1){
    const offSet = helper.getOffSet(page,config.listPerPage)
    const rows = await db.query(`SELECT * FROM Pls LIMIT ${offSet}, ${config.listPerPage}`)

    const data = helper.emptyRows(rows)
    const metaData = {page}

    return {
        data,metaData
    }
}
async function getById(id){
    const rows = await db.query(`SELECT * FROM Pls WHERE id = ${id}`)
    return helper.emptyRows(rows)
}

async function deleteById(id){
    const rows = await db.query(`DELETE FROM Pls WHERE id = ${id}`)
    return helper.emptyRows(rows)
}
async function create(data){
    const rows = await db.query(`INSERT INTO pls(name,release_year,github_rank) 
    VALUES ('${data.name}',${data.release_year},${data.github_rank})`)
    return helper.emptyRows(rows)
}
async function update(id,data){
    const columns = Object.keys(data)
    let query = "UPDATE Pls SET "
    for(const col of columns)
        query+=`${col}=${data[col]},`
    query=query.slice(0,query.length-1)
    query+=` WHERE id=${id}`
    
    return helper.emptyRows(db.query(query))
}
module.exports = {
    getMultiple,getById,deleteById,update,create
}
