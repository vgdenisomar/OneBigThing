const express=require('express');
var router = express.Router();

var thingsCollection=[];

var thingsStruct={
    "id":0,
    "descripcion":'',
    "fecha":0,
    "by":''

};

thingsCollection.push(
    Object.assign(
        thingsStruct,
        {
            "id":"1",
            "descripcion":"Mi primer thing",
            "fecha":'12',
            "by":'Denis'

        }
    )
    
);

router.get('/',(req,res,next)=>{
    res.status(200).json(thingsCollection)
});

router.post('/',(req,res,next)=>{
    var newElement=Object.assign({},thingsStruct, req.body);
    thingsCollection.push(newElement);
    res.status(200).json(newElement)
});


router.put('/:id',(req,res,next)=>{
    const requestId=req.params.id;
    
    let thingsStruct=thingsCollection.filter(thingsStruct=>{
        return thingsStruct.id==requestId;
    })[0];

    const index=thingsCollection.indexOf(thingsStruct);
    const keys=Object.keys(req.body);
    keys.forEach(key=>{
        thingsStruct[key]=req.body[key];
    })
    thingsCollection[index]=thingsStruct;
    res.json(thingsCollection[index]);
});


router.delete('/:id',(req,res,next)=>{
    const requestId=req.params.id;
    
    let thingsStruct=thingsCollection.filter(thingsStruct=>{
        return thingsStruct.id==requestId;
    })[0];

    const index=thingsCollection.indexOf(thingsStruct);

    thingsCollection.splice(index,1);
    res.json({message:'El bigthing eliminado'});
});


module.exports=router;