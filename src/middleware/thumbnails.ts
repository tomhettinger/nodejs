import express from 'express';
import { createDir, fileExists } from '../utilities/filesysutils';
import { createThumbnailFromPath } from '../utilities/imageprocessing';
import path from 'path';

const thumbnailDir = './resources/thumbnail/';
const fullDir = './resources/fullsize';

export const createThumbnailDirectory = (req: express.Request, res: express.Response, next: Function): void => {
  console.log('Creating thumbnail Directory.');
  createDir(thumbnailDir);
  next();
};

export const createThumbnail = async (req: express.Request, res: express.Response, next: Function): Promise<void> => {
  // Parse the req parameters.
  const filename = req.query.filename;
  let width = Number(req.query.width);
  let height = Number(req.query.height);

  // Check if we have valid parameters.
  if (filename == null) {
    console.log(`Image filename was not specified.`);
    res.send('Please specify a filename using "/resize?filename=sample.jpg&width=200&height=200"');
    return;
  }
  if (isNaN(width)) {
    width = 200;
  }
  if (isNaN(height)) {
    height = 200;
  }

  // Create the full paths
  const inPath = path.join(fullDir, String(filename));
  const outFilename = `${width}x${height}_${filename}`;
  const outPath = path.join(thumbnailDir, outFilename);
  res.locals.inPath = inPath;
  res.locals.outPath = outPath;
  console.log(`Request to create thumbnail of ${inPath} with size ${width} by ${height}.`);

  // Check if the input filename exists
  if (!fileExists(inPath)) {
    console.log(`inPath ${inPath} does not exist.`);
    res.send(`File ${inPath} does not exist.`);
    return;
  }

  // Check first if the thumbnail exists already.
  if (fileExists(outPath)) {
    console.log('Thumbnail already exists.');
    res.locals.thumbPath = outPath;
    return next();
  }
  // If not, create the thumbnail
  else {
    console.log('Creating Thumbnail.');
    await createThumbnailFromPath(inPath, outPath, width, height);
    res.locals.thumbPath = outPath;
  }
  next();
};

export const sendThumbnail = (req: express.Request, res: express.Response, next: Function): void => {
  // Check if thumbPath exists
  if (res.locals.thumbPath == null || !fileExists(res.locals.thumbPath)) {
    console.log('Thumbnail path not specified.');
    res.status(500).send(`Could not find thumbnail.`);
    return;
  }
  res.sendFile(path.resolve(res.locals.thumbPath));
  next();
};
