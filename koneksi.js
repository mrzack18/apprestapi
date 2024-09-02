var mysql = require('mysql')

const cons = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbrestapi'
})

cons.connect((err)=>{
    if(err) throw err;
    console.log('mysql Terkoneksi')
})

module.exports = cons;