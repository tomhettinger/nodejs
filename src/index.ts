import express from 'express';
import { createThumbnail, loadImage, resize, writeThumbnail } from './imageprocessing';

const app = express();
const port = 3000;
const inPath = './resources/fullsize/cats1.jpg';
const outPath = './resources/thumbnail/cats1.jpg';

app.get('/resize', (req, res) => {
  res.send(`Welcome to the endpoint localhost:${port}.`);
  console.log(`A visitor has reached the endpoint localhost:${port}/resize`);
  createThumbnail(inPath, outPath);
});

app.listen(port, () => {
  console.log(`Server is up at localhost:${port}.`);
});
