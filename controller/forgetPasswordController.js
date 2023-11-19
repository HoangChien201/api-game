const { User } = require('../model/user')
const nodemailer = require("nodemailer");

const forgetPasswordController = {
    sendEmail: async (req, res, next) => {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: 'hoangchien220401@gmail.com',
                pass: 'cikayheijkfhuhtv'
            }
        });
        try {
            const { to } = req.body;
            const user = await User.findOne({ email: to })

            if (user) {
                const passwordNew=Math.floor(Math.random()*(600000-100000)+100000)

                const mailOptions = {
                    from: "Mystic Woods <admin@game-mystics-woods.com>",
                    to: to,
                    subject: "Tạo mật khẩu mới",
                    html: `Mật khẩu mới của bạn là : ${passwordNew}`
                };
                
                await transporter.sendMail(mailOptions);
                await User.updateOne({email:user.email},{$set:{password:passwordNew}})
                res.status(200).json({ status: 1, message: "Gửi mail thành công" });
            }
            else {
                res.status(500).json({ status: 0, message: "Gửi mail thất bại, không tìm thấy email" });
            }

        } catch (err) {
            res.status(500).json({ status: 0, message: "Gửi mail thất bại, vui lòng xem lại email" });
        }

    }
}

module.exports = forgetPasswordController