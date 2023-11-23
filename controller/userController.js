const {User} = require('../model/user')

const userController={
    getUser:async (req,res)=>{
        try {
            const users= await User.find()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }
       

    },
     login: async(  req , res) =>{
        try {
            const {email,password} = req.body;
            const user = await User.findOne({email:email});
            if(!user) throw new Error("Khong tim thaay tai khoang");
            if(user.password != password) throw new Error("mat khau khong dung")
            return res.status(200).json(user)
        } catch (error) {
            console.log("Lỗi",error);
            throw new Error("lỗi rồi",error)
        }
    
    },
     changePassword :async (req,res)=>{
        try {
            const {email,newPassword,oldPassword} = req.body;
            const user = await User.findOne({email:email});
            if(!user) return res.status(500).json({message:"not find account"});
            if(user.password != oldPassword){
                return res.status(500).json({message:"password not trung"})
    
            }else{
                user.password = newPassword;
            }
            // await user.updateOne({password:newPassword});
            return res.status(200).json("change-password success");
        } catch (error) {
            console.log("Loi",error);
            return res.status(400).json({message:error.message});
        }
    },
    register : async (req,res) => {
        try {
            const {email,password} = req.body;
            const register = await User.create({
                email:email,
                password:password
            })
            return res.status(200).json({message:"Sucessfully",register})
        } catch (error) {
            console.log("loi",error);
            return res.status(500).json({message:error.message});
        }
    },

}

module.exports=userController;