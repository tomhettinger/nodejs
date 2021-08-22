import fs from 'fs';

const thumbnailDir = './resources/thumbnail/';

export default async function createThumbnailDir() : Promise<string> {

    return new Promise( (resolve, reject) => {
        console.log(`Creating thumbnail directory ${thumbnailDir}`)
        if (!fs.existsSync(thumbnailDir)) {
            fs.mkdirSync(thumbnailDir);
        }
        console.log("Directory created.")
        resolve('Done.')  
    })
}
