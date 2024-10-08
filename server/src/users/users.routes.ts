import express from 'express'
import { usersController } from './users.controllers'

const usersRouter = express.Router()

usersRouter.get('/', usersController.get)
usersRouter.post('/', usersController.post)

export default usersRouter