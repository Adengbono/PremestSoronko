const {Router} = require('express')
const router = Router()

const {
    createUser,
    getUserDetails,
    updateUserDetails,
    deleteUser
         } = require('../controllers/usercontroller')


         //route for creating an account details
         router.post('/api/user/new', createUser)

         //route for getting an account 
         router.get('/api/user/username', getUserDetails)

         //route for updating an account details
         router.put('/api/user/update', updateUserDetails)

         //route for deleting an account 
         router.delete('/api/user/delete', deleteUser)



       module.exports = router