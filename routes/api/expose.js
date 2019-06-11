const express = require('express');
const router = express.Router();
const Expose = require('../../models/Expose');

router.post('/',(req,res)=>{

    expose = new Expose({
        sender_name: req.body.sender_name,
        city:req.body.city,
        message:req.body.message
    });

    expose.save().then(exp=>{
        res.json(exp);
    }).catch(err=>console.log(err));

});

//List of messages per city
router.get('/:city',(req,res,next)=>{
    Expose.find({
        "city":req.params.city
    }).then((data)=>{
        res.json(data);

    }).catch(err=>console.log(err));
});

module.exports =router;