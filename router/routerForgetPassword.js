const forgetPasswordController=require('../controller/forgetPasswordController');
const router=require('express').Router();

router.post('/',forgetPasswordController.sendEmail)

module.exports=router