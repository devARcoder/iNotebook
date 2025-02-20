const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        a: 'khan',
        number: 48
    }
    res.json(obj)
})

module.exports = router