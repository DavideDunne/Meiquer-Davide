import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()
app.use(cors())

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"BibliotecaMeiquer"
})

app.get("/", (req,res)=>{
  res.json("hello from backend");
})

app.get("/estudiante", (req,res)=>{
  const q = "SELECT * FROM Contenido WHERE Tipo=1"
  db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.listen(8800, ()=>{
  console.log("connected")
})
