var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
    let folder = req.query.folder;
    let page = req.query.page;

    let imageList = [];
    let folderPath = `media/img/${folder}/${page}`;
    
    fs.readdirSync(path.join(folderPath)).forEach(file => {
        const path = `media/img/${folder}/${page}/${file}`
        imageList.push(path);
    })
    res.send(imageList)
});


module.exports = router;