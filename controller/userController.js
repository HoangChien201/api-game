const {User} = require('../model/user')

const userController={
    getUser:async (req,res)=>{
        try {
            const users= await User.find()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }
       

    }
}

module.exports=userController;