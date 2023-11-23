const userController=require('../controller/userController')
const router=require('express').Router();

router.get('/',userController.getUser)
router.post('/change-password',userController.changePassword);
router.post('/login',userController.login);
router.post('/register',userController.register);
router.post('/save-score',userController.saveScore);
router.post('/save-position',userController.savePosition);
router.get('/users',userController.getUsers)


module.exports=router