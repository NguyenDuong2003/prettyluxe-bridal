import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import publicRoute from '../src/route/publicRoute';
import configViewEngine from '../src/config/viewEngine';

const app = express();
dotenv.config();
configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

publicRoute(app);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
