import fs from 'fs';
import { createThumbnailFromPath } from '../../utilities/imageprocessing';

describe('Test suite for createThumbnailFromPath', () => {
  const sourceFile = './resources/tests/cats1.jpg';
  const newFile = './resources/tests/resized_cats1.jpg';

  beforeEach(() => {
    if (fs.existsSync(newFile)) {
      fs.rmSync(newFile);
    }
  });

  afterEach(() => {
    if (fs.existsSync(newFile)) {
      fs.rmSync(newFile);
    }
  });

  it('Makes sure a thumbnail is created', async () => {
    await createThumbnailFromPath(sourceFile, newFile, 10, 10);
    expect(fs.existsSync(newFile)).toBe(true);
  });
});
