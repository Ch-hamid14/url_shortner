const express = require('express');
const cors=require('cors')
const urlRoute = require('./routes/urlRoute')
const { connectToMongoDb } = require('./connect')
const app = express();
app.use(cors());

const PORT = 8001;
connectToMongoDb('mongodb+srv://urlShortner:paTV4nvZXf7wnf8W@cluster1.o8kff71.mongodb.net/').then(() =>
    console.log("MongoDb connected Successfully")
)

app.use(express.json());
app.use('/url', urlRoute)
app.use('/:id', urlRoute)



app.listen(PORT, () => console.log(`Server running at port : ${PORT}`))
