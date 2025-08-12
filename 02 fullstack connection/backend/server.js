import express from 'express'
import cors from 'cors'
// const cors = require('cors');


const app = express() ;
const port = process.env.PORT || 3000 ;

// Enable CORS for all requests
app.use(cors());

// OR: Restrict CORS to a specific origin (more secure)
app.use(cors({
  origin: 'http://localhost:5173', // React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req , res) => {
    res.send("server ready ") ;
}) ;

app.get('/api/users' , (req , res) => {
    // Simulated API response
const users = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali.khan@example.com",
    age: 25,
    city: "Lahore"
  },
  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    age: 28,
    city: "Karachi"
  },
  {
    id: 3,
    name: "Bilal Hussain",
    email: "bilal.hussain@example.com",
    age: 22,
    city: "Islamabad"
  }
];

res.send(users) ;

})

app.listen(port , () =>{
    console.log(`server at http://localhost:${port}`)
}) ;



