import fs from 'fs';
import { createDir, fileExists } from '../../utilities/filesysutils';

describe('Test suite for fileExists', () => {
  it('Checks that true returns when file is present', () => {
    expect(fileExists('./resources/tests/cats1.jpg')).toBe(true);
  });

  it('Checks that true returns when file is present', () => {
    expect(fileExists('./resources/tests/cats2.jpg')).toBe(false);
  });
});


describe('Test suite for createDir', () => {
  const testDir = './resources/tests/test_createDir/'

  // Remove directory if it exists already
  beforeEach(function() {
    if (fs.existsSync(testDir)) {
        fs.rmdirSync(testDir);
    }
  });

  // Teardown, remove any directory created
  afterEach(function() {
    if (fs.existsSync(testDir)) {
        fs.rmdirSync(testDir);
    }
  });

  it('Check that a directory is created', () => {
    createDir(testDir);
    expect(fs.existsSync(testDir)).toBe(true);
  });

});