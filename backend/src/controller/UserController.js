const mongoose = require('mongoose')

const Users = mongoose.model('User')

module.exports = {
    async index(req,res){
        const {page = 1 } = req.query
        const user = await Users.paginate({},{page, limit : 10})

        return res.json(user)
    },

    async show(req,res){
        const user = await Users.findById(req.params.id)
        return res.json(user)
    },

    async store(req,res){
        const user = await Users.create(req.body)

        return res.json(user)
    },

    async update(req,res){
        const user = await Users.findOneAndUpdate(req.params.id, req.body, {new : true})

        return res.json(user)
    },

    async destroy(req,res){
        const user = await Users.findOneAndRemove(req.params.id, req.body)

        return res.send()
    }

}