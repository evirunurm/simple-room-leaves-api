const summaryRepository = require("../dataAccess/summaryRepository");

// // DEV
// const express = require("express");
// const app = express();
// app.listen(3000, (err) => {
//     if (err) throw err;
//     console.log("Server running at http://localhost:" + 3000);
// });
// app.get("/api/categories.js", async (req, res) => {
//     // PARAMETERS
//     const id = req.query.id;
//     let data;
//     try {
       
//         if (id) {
//             // Si se da un ID
//             data = await categoryRepository.findOne(id);
//         } else {
//             // Si no se da un ID, se quiere obtener todas
//             data = await categoryRepository.findAll();
//         }
//         const cacheSeconds = 72000;
//         res.setHeader("Content-Type", "application/json");
//         res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
//         return res.send(data);
//     } catch (err) {
//         console.log(err);
//         res.send("Couldn't fetch the category data! :((");
//     }
// });

module.exports = async (req, res) => {
   // PARAMETERS
   let days = req.query.days;
   let data;
   try {
      
       if (days && days <= 10) {
           // Si se da un numero de días
           data = await summaryRepository.getLatest(days);
       } else {
           days = 10
           // Si no se da un numero de días, se quiere obtener los ultimos 10 (máximo número)
           data = await summaryRepository.findAll();
       }
       const cacheSeconds = 72000;
       res.setHeader("Content-Type", "application/json");
       res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
       return res.send(data);
   } catch (err) {
       console.log(err);
       res.send("Couldn't fetch the category data! :(( Error:" + err);
   }
};