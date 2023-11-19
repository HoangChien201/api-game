const userController=require('../controller/userController')
const router=require('express').Router();

router.get('/',userController.getUser)

module.exports=router