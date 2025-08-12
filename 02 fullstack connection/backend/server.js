import express from 'express'

const app = express() ;
const port = process.env.PORT || 3000

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



