const userController=require('../controller/userController')
const router=require('express').Router();

router.get('/',userController.getUser)
router.post('/change-password',userController.changePassword);

module.exports=router