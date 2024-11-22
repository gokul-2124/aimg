import express from 'express'
import { registerUser, loginUser, userCredit } from '../controllers/userController.js'


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credit', userCredit)

export default userRouter;

