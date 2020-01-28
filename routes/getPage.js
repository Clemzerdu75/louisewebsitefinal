var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
    console.log("****GET PAGE****")
    let folder = req.query.folder;
    let page = req.query.page;

    let imageList = [];
    let folderPath = `public/img/${folder}/${page}`;
    console.log("****Coucou****")
    console.log(folderPath)

    
    fs.readdirSync(path.join(folderPath)).forEach(file => {
        const path = `media/img/${folder}/${page}/${file}`
        imageList.push(path);
    })
    console.log("*****WORKING 1****")

    res.send(imageList)
});


module.exports = router;