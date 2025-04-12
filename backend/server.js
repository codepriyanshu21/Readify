import express from 'express'
import 'dotenv/config'
import connectDB from './config/db.js'
import cors from 'cors'
import userRoutes from './routes/userRoute.js'
import bookRoutes from './routes/bookRoute.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors({
    origin: 'https://readify-two.vercel.app', // ✅ removed trailing slash
    credentials: true,
}))

app.use(express.json())

// Database connection
await connectDB()

app.get('/', (req, res) => {
    res.send('Hello ')
})

// Routes
app.use('/books', bookRoutes)
app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
