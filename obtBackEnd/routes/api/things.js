const express=require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({"moudule":"Things"})
});


module.exports=router;