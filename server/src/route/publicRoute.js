import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const router = express.Router();

const publicRoute = (app) => {
    router.get('/', async (req, res) => {
        try {
            const filePath = path.join(__dirname, '../../data.txt');
            const data = await fs.readFile(filePath, 'utf8');

            const users = [
                { id: 1, name: 'Sản phẩm A', price: 100 },
                { id: 2, name: 'Sản phẩm B', price: 200 },
            ];

            return res.render('home.ejs', { users, fileContent: data });
        } catch (err) {
            console.error('Lỗi khi đọc file:', err);
            return res.status(500).send('Lỗi khi đọc file.');
        }
    });

    return app.use('/', router);
};

export default publicRoute;
