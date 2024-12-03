//Inizializzazione express
const express = require("express");
const app = express(); 
const port = 3000;

//Import rotte
const postsRouter = require("./routers/posts")

//Includo tutte le rotte dei posts con prefisso ppost nelle url di ogni rotta
app.use("/posts", postsRouter)

app.get("/", (req, res) =>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log("il server e'partito")
})