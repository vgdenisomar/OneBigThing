const express=require('express');
const router=express.Router();

const securityApi=require('./security');
const thingsApi=require('./things');

router.use('/security', securityApi);

router.use('/things', thingsApi);

router.get('/', (req,res,next)=>{
    res.status(200).json({"ok":"El app funciona adecuadamente"});
});

router.get('/hello', (req,res,next)=>{
    res.status(200).json({"ok":"Hola Mundo"});
});


module.exports=router;