import {Router} from 'express'
import { Account } from '../model/user.model.js'
import authMiddleware from './middleware/auth.middleware.js'


const router = Router()

router.get('/balance', authMiddleware, async(req, res) =>{
    const userId = req.userId

    const account = await Account.findById(userId)

    if(!account){
        return res.status(404).json({message: 'Account not found'})
    }

    return res.status(200).json({
        balance: account.balance,
        message: "Balance Successfully fetched"
    })


})

export default router;