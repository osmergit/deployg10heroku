import express from 'express';
//import db from './basedatos.js'
//import {shevento} from './contevento.js'
import {router} from './routes/routes.js'

const app = express();

app.use('/',router);
app.use(express.json)


router.get('/', (req,res) => {
    res.send("Deploy en Heroku de nuestro Backend")
})
var PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Se conecto al servidor http://localhost:${PORT}`)
} )