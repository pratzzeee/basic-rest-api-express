import express from 'express';
import userRouter from './routes/users.js';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
app.use('/users', userRouter);

app.get('/', (req,res) => {
    res.send("Welcome to API")
});

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on port: https://localhost:${port}`)});