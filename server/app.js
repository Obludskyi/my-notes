/**
 * Created by Oleksii on 30.01.2017.
 */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';
import {serverPort} from '../etc/config.json';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: '*' }));

app.get('/notes', (req, res) => {
    db.listNotes().then(data => res.send(data))
});

app.post('/notes', (req, res) => {
    db.createNote(req.body).then(data => res.send(data))
});

app.delete('/notes/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data))
});

const server = app.listen(serverPort, () => {
    console.log(`Server is up and running on port ${serverPort}`);
});