var router = require('express').Router()
var bodyParser = require('body-parser')
var cors = require('cors')

router.use(bodyParser.json())
router.use(cors())

router.post("/file", function(req,res){
    if(req.files){
        console.log(req.files)
        var file = req.files.filename;
        var filename = file.name;
        file.mv("./file-upload/"+filename, function(err){
            if(err){
                console.log(err);
                res.send('<h1>Upload gagal!</h1>');
            }
            else{
                res.send('<h1>Upload sukses!</h1>');
            }
        })
    }
})

module.exports = router