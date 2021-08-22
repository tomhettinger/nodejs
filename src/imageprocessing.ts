import sharp from 'sharp';
import createThumbnailDir from './files';

export async function loadImage(inPath: string) : Promise<sharp.Sharp> {
    console.log(`Now loading the image ${inPath}.`);
    return sharp(inPath);
}

export async function resize(image: sharp.Sharp) : Promise<sharp.Sharp> {
    console.log(`Now resizing the image.`);
    return image.resize(200, 200);
        
}

export async function writeThumbnail(image: sharp.Sharp, outPath: string) : Promise<void> {
    console.log(`Writing image to ${outPath}`);
    image.toFile(outPath, (err, info) => {
        console.log(err);
        console.log(info);
    });
}

export async function createThumbnail(inPath: string, outPath: string): Promise<void> {
    let image = await loadImage(inPath);
    image = await resize(image);
    await createThumbnailDir();
    await writeThumbnail(image, outPath)
    console.log("Thumbnail created.")
}