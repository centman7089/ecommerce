// @ts-nocheck
import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()
cartRouter.post("/add",authUser,addToCart)
cartRouter.put("/update",authUser,updateCart)
cartRouter.post("/get",authUser,getUserCart)
c

export default cartRouter


        