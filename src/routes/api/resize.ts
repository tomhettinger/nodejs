import express from 'express';
import {createThumbnail, createThumbnailDirectory, sendThumbnail} from '../../middleware/thumbnails';

const resize = express.Router();

resize.use([createThumbnailDirectory, createThumbnail, sendThumbnail]);

resize.get('/', (req, res) => {
    console.log('Middleware finished execution.')
});

export default resize;