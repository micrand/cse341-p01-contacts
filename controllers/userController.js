const mongodb = require('../data/database')
const ObjectId = require('mongodb').ObjectId


const getAll = async (req, res) => {
    //#swagger.tags = ['Users']
    const result = await mongodb.getDatabase().db().collection('users').find()

    result.toArray().then((users)=>{
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(users)
    })
}

const getUser = async (req, res) => {
    //#swagger.tags = ['Users']
    const userId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db().collection('users').find({_id: userId})

    result.toArray().then((users)=>{
        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(users[0])
    })
}

const createUser = async (req, res) => {    
    //#swagger.tags = ['Users']
    const user = {     
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        ipaddress: req.body.ipaddress
    }

    const response = await mongodb.getDatabase().db().collection('users').insertOne(user)    
    if(response.aknowledged) {
        res.status(204).send()
    }else{
        res.status(500).json(response.error || 'Some error occurred while creating new user' )
    }

}

const updateUser = async (req, res) => {
    //#swagger.tags = ['Users']
    const userID = new ObjectId(req.params.id)

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
        username: req.body.username,        
        email: req.body.email,
        name: req.body.name,
        ipAddress: req.body.ipaddress
    }

    const response = await mongodb.getDatabase().db().collection('users').replaceOne({_id: userID}, user)
    if(response.modifiedCount > 0)
    {
        res.status(204).send()
    }else{
        res.status(500).json(response.error || 'Error occured on update')
    }


}

const deleteUser = async (req, res) => {
    //#swagger.tags = ['Users']
    const userID = new ObjectId(req.params.id)
    const response = await mongodb.getDatabase().db().collection('users').remove({_id: userID}, true)

    if(response.deletedCount > 0) {
        res.status(200).send()
    }else{
        res.status(500).json(response.error || 'Some error occurred on deletion user')
    }
    
}

module.exports = {
    getAll,
    getUser,
    createUser,
    updateUser,
    deleteUser
}