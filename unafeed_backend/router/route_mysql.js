var router = require('express').Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
var cors = require('cors')

router.use(bodyParser.json())
router.use(cors())

var db = mysql.createConnection({
    host: 'localhost',
    user: 'lintang',
    password: '12345',
    database: 'unafeed'
})

db.connect(()=>{
    console.log('Database terhubung!')
})

// GET all user
router.get('/user', (req, res) => {
    var dbStat = 'select * from unafeed_users'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET user by id
router.get('/user/:uid', (req, res) => {
    var dbStat = 'select * from unafeed_users where uid = ?'
    db.query(dbStat, req.params.uid, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// signup
router.post('/signup', (req, res)=>{
    var dbStat = 'insert into unafeed_users set ?'
    var data = {
        unama: req.body.unama,
        uemail: req.body.uemail,
        upassword: req.body.upassword,
    }
    db.query(dbStat, data, (error, output) => {
        if(error){
            console.log(error)
            res.send({
                status: 'no'
            })
        } else {
            console.log(output)
            res.send({
                unama: req.body.unama,
                uemail: req.body.uemail,
                upassword: req.body.upassword,
                status: 'ok' 
            })
        }
    })
})

// login
router.post('/login', (req, res)=>{
    var dbStat = 'select * from unafeed_users where uemail = ? and upassword = ?'
    var uemail = req.body.uemail
    var upassword = req.body.upassword
    db.query(dbStat, [uemail, upassword], (error, output) => {
        if(error){
            console.log(error)
            res.send({
                statusLogin: 'no'
            })
        } else {
            console.log(output)
            if (output.length <= 0 || output.length > 1){
                res.send({
                    statusLogin: 'no' 
                })
            } else {
                res.send({
                    user: output[0],
                    statusLogin: 'ok' 
                })
            }
        }
    })
})

// // GET all data
// router.get('/data', (req, res) => {
//     var dbStat = 'select * from products'
//     db.query(dbStat, (error, output) => {
//         if(error){
//             console.log(error)
//         } else {
//             console.log(output)
//             res.send(output)
//         }
//     })
// })

// // GET data by id
// router.get('/data/:id', (req, res) => {
//     var dbStat = 'select * from products where id = ?'
//     db.query(dbStat, req.params.id, (error, output) => {
//         if(error){
//             console.log(error)
//         } else {
//             console.log(output)
//             res.send(output)
//         }
//     })
// })

// // POST data
// router.post('/data', (req, res)=>{
//     var dbStat = 'insert into products set ?'
//     var data = {
//         product_name: req.body.nama,
//         price: req.body.harga,
//         info: req.body.info,
//         quantity: req.body.jumlah
//     }
//     db.query(dbStat, data, (error, output) => {
//         if(error){
//             console.log(error)
//             res.send(error)
//         } else {
//             console.log(output)
//             res.send({
//                 product_name: req.body.nama,
//                 price: req.body.harga,
//                 info: req.body.info,
//                 quantity: req.body.jumlah,
//                 status: 'Data terkirim' 
//             })
//         }
//     })
// })

// // PUT edit data by id
// router.put('/data/:id', (req, res)=>{
//     var dbStat = 'update products set ? where id = ?'
//     var data = {
//         product_name: req.body.nama,
//         price: req.body.harga,
//         info: req.body.info,
//         quantity: req.body.jumlah
//     }
//     db.query(dbStat, [data, req.params.id], (error, output) => {
//         if(error){
//             console.log(error)
//             res.send(error)
//         } else {
//             console.log(output)
//             res.send({
//                 product_name: req.body.nama,
//                 price: req.body.harga,
//                 info: req.body.info,
//                 quantity: req.body.jumlah,
//                 status: 'Data terupdate' 
//             })
//         }
//     })
// })

// // DELETE data by id
// router.delete('/data/:id', (req, res)=>{
//     var dbStat = 'delete from products where id = ?'
//     db.query(dbStat, req.params.id, (error, output) => {
//         if(error){
//             console.log(error)
//         } else {
//             console.log(output)
//             res.send(output)
//         }
//     })
// })

module.exports = router