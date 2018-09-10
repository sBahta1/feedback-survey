const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    const survey = req.body;
    const query = `INSERT INTO "feedback" ("feeling", "understanding","support","comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [survey.feeling, survey.understanding, survey.support, survey.comments])
        .then((results) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error:', error);
            res.sendStatus(500);
        })
})
app.put('/feedback/:id', (req, res) => {
    console.log(req.params.id);
    
    const query = `UPDATE "feedback" SET "flagged" = 'true' WHERE "id" =  $1;`;
    pool.query(query,[req.params.id]).then((results) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error', error);
        res.sendStatus(500);
    })
})


app.get('/feedback', (req, res) => {
    const query = `SELECT * FROM "feedback";`;
    pool.query(query).then(results => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('error getting feedback', error);
        res.sendStatus(500);
    })
})

app.delete('/feedback/:id', (req, res) => {
    const query = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(query, [req.params.id]).then((results) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});