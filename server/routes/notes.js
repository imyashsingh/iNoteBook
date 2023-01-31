const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obj = {
        name : "xyz",
        age : "200",
    }
    res.json(obj);
})


module.exports = router;