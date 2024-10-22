import express from 'express'
import { userRegister, userLogin } from '../controller/UserController.js'

const userRouter = express.Router()

userRouter.post('/login',userLogin)
userRouter.post('/register',userRegister)

export default userRouter