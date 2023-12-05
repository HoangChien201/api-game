const userController=require('../controller/userController')
const router=require('express').Router();

router.get('/',userController.getUser)
router.post('/change-password',userController.changePassword);
router.post('/login',userController.login);
router.post('/register',userController.register);
router.put('/save-scenes',userController.saveScenes);
router.put('/save-score',userController.saveScore);
router.put('/save-position',userController.savePosition);


module.exports=router