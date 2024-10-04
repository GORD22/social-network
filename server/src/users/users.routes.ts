import express from 'express'
import { usersController } from './users.controllers'

const usersRouter = express.Router()

usersRouter.get('/', usersController.get)

export default usersRouter