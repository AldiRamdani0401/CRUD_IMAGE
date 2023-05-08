import express from 'express';
import FileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());

app.listen(5000, () => console.log('Server Up and Running...'));