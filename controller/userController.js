const { User } = require('../model/user')

const userController = {
    getUser: async (req, res) => {
        try {
            const users = await User.find()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }


    },
    getUsers: async (req, res) => {
        try {
            const user = await User.find({}, 'email score');
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if(!email || ! password) return res.status(500).json({message:"Cần tài khoản"})
            const user = await User.findOne({ email: email });
            if (!user) throw new Error("Khong tim thaay tai khoang");
            if (user.password != password) throw new Error("mat khau khong dung")
            return res.status(200).json(user)
        } catch (error) {
            console.log("Lỗi", error);
            throw new Error("lỗi rồi", error)
        }

    },
    changePassword: async (req, res) => {
        try {
            const { email, newPassword, oldPassword } = req.body;
            const user = await User.findOne({ email: email });
            if (!user) return res.status(500).json({ message: "not find account" });
            if (user.password != oldPassword) {
                return res.status(500).json({ message: "password not trung" })

            } else {
                await user.updateOne({password:newPassword})
            }
            // await user.updateOne({password:newPassword});
            return res.status(200).json("change-password success");
        } catch (error) {
            console.log("Loi", error);
            return res.status(400).json({ message: error.message });
        }
    },
    register: async (req, res) => {
        try {
            const { email, password } = req.body;
            const register = User.create({
                email: email,
                password: password
            })
            await register;
            console.log(register);

            return res.status(200).json({ message: "Sucessfully", register })
        } catch (error) {
            console.log("loi", error);
            return res.status(500).json({ message: error.message });
        }
    },
    saveScore: async (req, res) => {
        console.log(req.body);
        try {
            const { email, score } = req.body;
            const saveScore = await User.findOne({ email: email }).updateOne({ score: score });
            return res.status(200).json({ message: "thành công" })
        } catch (error) {
            console.log("Loi", error);
            throw new Error("Loi", error);
        }
    },
    savePosition: async (req, res) => {
        try {
            const { email} = req.body;

            await User.findOne({ email: email }).updateOne(req.body);
            return res.status(200).json({ message: "Thành công" })
        } catch (error) {
            console.log("loi", error);
            return res.status.json({ message: "Lỗi" })
        }
    },
    saveScenes:async(req,res)=>{
        try {   
            const {email,scenes} = req.body;
            const user = await User.findOne({email});
            if(!user) throw new Error("Email not find");
            await User.updateOne({email:email},{scenes:scenes});
            return res.status(200).json({message:"Sucessful"})
            
        } catch (error) {
            console.log("loi", error);
            return res.status.json({ message: "Lỗi" })
        }
    },
    


}

module.exports = userController;