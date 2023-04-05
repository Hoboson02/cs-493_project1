import 'dotenv/config';
import express from 'express';
const app = express();


app.get('/', (req, res) => {
    return res.send(`Received a ${req}`)
});

app.post('/', (req, res) => {
    return res.send(`Received a ${req}`)
});

app.put('/', (req, res) => {
    return res.send(`Received a ${req}`)
});

app.delete('/', (req, res) => {
    return res.send(`Received a ${req}`)
});

app.patch('/', (req, res) => {
    return res.send(`Received a ${req}`)
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);