import express from 'express';
//import db from './basedatos.js'
//import {shevento} from './contevento.js'
import {router} from './routes/routes.js'
import cors from 'cors'

const app = express();
app.use(cors());

app.use(express.json())
app.use('/',router);

router.get('/', (req,res) => {
    res.send("Deploy en Heroku de nuestro Backend")
})
var PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Se conecto al servidor http://localhost:${PORT}`)
} )