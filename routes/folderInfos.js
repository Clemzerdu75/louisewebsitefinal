var express = require('express');
var router = express.Router();
const fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
    let mainFolders = [];
    let response = {};

    //Gets the main category
    fs.readdirSync(path.join('media/img')).forEach(file => {
        mainFolders.push(file);
    })

    if(mainFolders[0] === ".DS_Store") mainFolders.shift()

    // Gets the sub file 
    for(i of mainFolders) {
        let array = []
        let dirpath = path.join(`media/img/${i}`)
        fs.readdirSync(dirpath).forEach(file => {
            array.push(file)
        })
        response[i] = array
    }
    res.send(response);
});

module.exports = router;