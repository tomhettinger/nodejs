import sharp from 'sharp';

export async function createThumbnailFromPath(inPath: string, outPath: string, width: number, height: number): Promise<void> {
  await sharp(inPath).resize(width, height).toFile(outPath);
  console.log('Thumbnail created.');
}
