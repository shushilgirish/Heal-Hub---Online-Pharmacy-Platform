const express = require('express');
const dbConnect = require('./Config/dbConnect');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRouter = require('./Routes/authRoute'); 
const cors = require('cors');

 
const app = express();
app.use(cors(
 {
 origin: ["https://deploy-mern-1whq.vercel.app"],
 methods:["POST","GET"],
 credentials:true
 }
));
const{notFound, errorHandler} = require('./Middlewares/errorHandler');
app.use(express.static('public'));
  // Initialize express app here

// Load environment variables from .env file
dotenv.config({ path: './Routes/.env' });  

// Connect to the database
dbConnect();

mongoose.connect('mongodb+srv://gokulravi221600:Healhub2024@cluster0.r20ki9s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));   
const Port = process.env.PORT || 3000; 
app.use('/api/user', authRouter); 

app.use(notFound);
app.use(errorHandler);
app.listen(Port, () => { 
    console.log(`Server is running on port ${Port}`);   
});  

   
