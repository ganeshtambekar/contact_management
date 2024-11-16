const express= require('express');
const mongoose=require('mongoose');
const bodyparser= require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');

dotenv.config();
const app=express();

app.use(bodyparser.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URL).then(()=>console.log('MongoDb Connected')).catch(err=>console.log(err))

// routes 


//app.use('/contacts',require('./routes/contactroutes'));



const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server running on the port ${PORT}`))