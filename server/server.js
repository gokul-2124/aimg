import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 4000
const app = express()


app.use(express.json())
app.use(cors({
  origin: ["https://aimg-pi.vercel.app","http://localhost:5173"]  ,
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"]
}));


app.options('*', cors());

await connectDB()

app.use('/api/user', userRouter)
app.use('/api/image',imageRouter)
app.get('/', (req, res) => res.send("API WORKING"))

app.listen(PORT, () => console.log('server is running on ' + PORT));
