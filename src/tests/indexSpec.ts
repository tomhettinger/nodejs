import app from '../index';
import supertest from 'supertest';
import fs from 'fs';

const request = supertest(app);

describe('Test endpoint root /', () => {
  it('Gets the root endpoint', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('This is the main route.  There is nothing here.  Try /resize instead.');
    done();
  });
});

describe('Test endpoint /resize', () => {
  const thumbnailDir = './resources/thumbnail';

  // Teardown, remove any created dirs and files
  afterAll(function () {
    if (fs.existsSync(thumbnailDir)) {
      fs.rmdirSync(thumbnailDir, { recursive: true });
    }
  });

  it('Gets the /resize endpoint', async (done) => {
    const response = await request.get('/resize');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Please specify a filename using "/resize?filename=sample.jpg&width=200&height=200"');
    done();
  });

  it('Gets the /resize endpoint with an invalid image reference.', async (done) => {
    const response = await request.get('/resize?filename=doesNotExist.jpg');
    expect(response.status).toBe(200);
    expect(response.text).toBe('File resources\\fullsize\\doesNotExist.jpg does not exist.');
    done();
  });

  it('Gets the /resize endpoint with an valid image reference.', async (done) => {
    const response = await request.get('/resize?filename=cats1.jpg&width=20&height=20');
    expect(response.status).toBe(200);
    expect(response.header['content-type']).toBe('image/jpeg');
    done();
  });
});
