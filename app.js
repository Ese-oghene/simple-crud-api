require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./Middlewares/errorMiddleware')
const cors = require('cors')

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL, { 
useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Connected to db')).catch((err) => console.log(err))


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extend: false}))

// routes 
app.use('/api/products', productRoute)
app.use(errorMiddleware)


app.get('/', (req, res) =>{
   // throw new Error('fake Error')
})

app.listen(PORT, () =>{
    console.log(`Node Api App is running on port ${PORT}`)
})
