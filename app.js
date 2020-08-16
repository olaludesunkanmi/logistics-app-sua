const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/routes')


const app = express()
const PORT = process.env.PORT || 3000

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json())
app.use(userRouter)



app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

// Handle non existing route with proper message
app.all('*', (req, res) => res.status(404).json({
    status: 404,
    error: 'Route does not exist',
  }));


app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
})
