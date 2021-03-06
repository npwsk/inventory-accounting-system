import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './config';
import boardsRouter from './routes/board';
import locationsRouter from './routes/location';
import staffRouter from './routes/staff';

const PORT = config.port || 3000;
const NODE_ENV = config.env || 'production';

const app = express();

app.use(express.static(NODE_ENV === 'production' ? 'build' : 'dist'));

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the application.' });
});

app.use('/api/boards', boardsRouter);
app.use('/api/locations', locationsRouter);
app.use('/api/staff', staffRouter);

app.listen(PORT, () => {
  console.log('Node server started running');
});
