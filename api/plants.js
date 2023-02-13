const plantRepository = require("../dataAccess/plantRepository");

// DEV
// const express = require("express");
// const app = express();
// app.listen(3000, (err) => {
//     if (err) throw err;
//     console.log("Server running at http://localhost:" + 3000);
// });
// app.get("/api/plants.js", async (req, res) => {
//     // PARAMETERS
//     const id = req.query.id;
//     let data;
//     try {
       
//         if (id) {
//             // Si se da un ID
//             data = await plantRepository.findOne(id);
//         } else {
//             // Si no se da un ID, se quiere obtener todas
//             data = await plantRepository.findAll();
//         }
//         const cacheSeconds = 72000;
//         res.setHeader("Content-Type", "application/json");
//         res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
//         return res.send(data);
//     } catch (err) {
//         console.log(err);
//         res.send("Couldn't fetch the plant data! :((");
//     }
// });


// PROD
module.exports = async (req, res) => {
   // PARAMETERS
   const id = req.query.id;
   let data;
   try {
       if (id) {
           // Si se da un ID
           data = await plantRepository.findOne(id);
       } else {
           // Si no se da un ID, se quiere obtener todas
           data = await plantRepository.findAll();
       }
       const cacheSeconds = 72000;
       res.setHeader("Content-Type", "application/json");
       res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
       return res.send(data);
   } catch (err) {
       console.log(err);
       res.send("Couldn't fetch the plant data! :(( Error:" + err);
   }
};