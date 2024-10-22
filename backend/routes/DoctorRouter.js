import express from 'express'
import { userRegister, userLogin } from '../controller/UserController.js'

const userRouter = express.Router()

userRouter.post('/login',doctorLogin)
userRouter.post('/register',doctorRegister)

export default doctorRouter