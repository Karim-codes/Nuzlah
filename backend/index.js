import express from "express";
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const port = 4000;

app.listen(port, ()=>{
    console.log(`Server Running on ${port}`)
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));



app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'public', 'index.html'));
});


