import express from "express";
import cors from "cors";
//import UserRoute from "./routes/UserRoute.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname,'images')));
//app.use(UserRoute);
const jsonFilePath = path.join(__dirname, 'JSON', 'doctordata.json');

app.get('/findadoc', (req, res) => {
  fs.readFile(jsonFilePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading data');
    } else {
      try{
        const jsonData = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(jsonData);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error parsing data');
      }
    }
  });
});
/*
app.post('/newdoc', (req, res) => {
    // TODO: Add new doctor to the database

    res.send('New doctor added');

});
*/


app.listen(3000, () => console.log('Server up and running...'));