import {roll} from "./lib/roll.js";
import minimist from "minimist";
import express from "express";

const args = minimist(process.argv.slice(2));

const port = args.port || 5000
const app = express();

app.use(express.urlencoded( { extended: true }));
app.use(express.json());

app.get('/app/', (req, res) => {
	res.status(200).send("200 OK");
})

app.get('/app/roll/', (req, res) => {
	res.status(200).send(roll(6, 2, 1));
})

app.get('/app/roll/', (req, res) => {
	res.status(200).send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
	res.status(200).send(roll(req.params.sides, req.params.dice, req.params.rolls));
})

app.listen(port);
