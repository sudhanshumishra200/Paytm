import express,  {json} from 'express'
import cors from 'cors';


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(json());

//import the routes

import userRouter from './routes/user.routes.js'
import accountRouter from './routes/accout.routes.js'
import success from './routes/success.routes.js'
import error from './routes/error.routes.js'
//routes declarations

app.use('/api/v1/users', userRouter )
app.use('/api/v1/account', accountRouter )

app.use('/api/v1/success', success )
app.use('/api/v1/error', error )


export {app}

