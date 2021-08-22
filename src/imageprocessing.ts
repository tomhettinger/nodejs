import sharp from 'sharp';

export function loadImage(inPath: string): sharp.Sharp {
  console.log(`Now loading the image ${inPath}.`);
  return sharp(inPath);
}

export async function createThumbnailFromPath(inPath: string, outPath: string, width: number, height: number): Promise<void> {
  await sharp(inPath)
    .resize(width, height)
    .toFile(outPath)
  console.log('Thumbnail created.');
}