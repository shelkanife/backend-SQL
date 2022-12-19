const router = require('express').Router()
const plService = require('../services/pl')

router.get('/',async function(req,res){
    try{
        res.json(await plService.getMultiple(req.query.page))
    }catch(err){
        console.error(err)
    }
})
router.get('/:id',async function(req,res){
    try{
        res.json(await plService.getById(req.params.id))
    }catch(err){
        console.error(err)
    }
})
router.post('/',async function(req,res){
    try{
        res.json(await plService.create(req.body))
    }catch(err){
        console.error(err)
    }
})
router.delete('/:id',async function(req,res){
    try{
        res.json(await plService.deleteById(req.params.id))
    }catch(err){
        console.error(err)
    }
})
router.put('/:id',async function(req,res){
    try{
        res.json(await plService.update(req.params.id,req.body))
    }catch(err){
        console.error(err)
    }
})

module.exports = router