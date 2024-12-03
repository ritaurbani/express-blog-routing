//Inizializzazione
const express = require("express");
const router = express.Router();

//Export router
module.exports = router;

//Index-get - Leggiamo tutti i dati - API per prelevare tutti i dati
router.get("/", (req, res)=>{
    res.send("Server del mio blog")
})

//Show - get
router.get("/:id", (req, res)=>{
    const postId = req.params.id;
    res.json("Prelevo dettagli di un singolo post" + postId);
})

//Create - post
router.post("/", (req, res)=>{
    res.json("qui aggiungo un nuovo post")
})
//Update - put
router.put("/:id", (req, res)=>{
    const postId = req.params.id;
    res.json("qui aggiorno tutti i dati del post id" + postId)
})
//Modify - patch
router.patch("/:id", (req, res)=>{
    const postId = req.params.id;
    res.json("qui aggiorno solo alcuni dati del post id" + postId)
})
//Destroy - delete
router.delete("/:id", (req, res)=>{
    const postId = req.params.id;
    res.json("qui elimino il post id" + postId) 
})