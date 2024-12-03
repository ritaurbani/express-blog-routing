//Inizializzazione
const express = require("express");
const router = express.Router();

//Export router
module.exports = router;

//import list di dati 
const postsList = require("../data/posts")

//////ROTTE////////

//Index-get - Leggiamo tutti i dati - API per prelevare tutti i dati - Restituisci la lista di dati
router.get("/", (req, res) => {
    const result = {
        data: postsList,
        count: postsList.length
    }
    res.json(result)
})

//Show - get
router.get("/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const singleElem = postsList.find((curpost) => curpost.id === postId);
    res.json(singleElem);
})

//Create - post
router.post("/", (req, res) => {
    res.json("qui aggiungo un nuovo post")
})
//Update - put
router.put("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("qui aggiorno tutti i dati del post id" + postId)
})
//Modify - patch
router.patch("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("qui aggiorno solo alcuni dati del post id" + postId)
})
//Destroy - delete
router.delete("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("qui elimino il post id" + postId)
})