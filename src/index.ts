import express, {Application} from 'express';


const app:Application = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/", (req, res) => {
    return res.json({});
});

app.listen(PORT, ():void => {
console.log(`Server Running here 👉 http://localhost:${PORT}`);
});