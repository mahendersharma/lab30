
const express = require('express');
const Subscribe = require('../models/subscribe');
const SubscribeSchema = require('../models/subscribe')
const router = express();

router.post('/subscribe',async(req,res)=>{
    await Subscribe.create(req.body.subscribe)
    res.redirect(`/blog/${req.params.id}`)
 })

module.exports = router;