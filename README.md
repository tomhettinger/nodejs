# node.js

# Installation

After cloning the repo, install dependencies using `npm install`

Build the code with `npm run build`


# Using the application

Start the server with `node ./dist/index.js`

Visit the web application in a webrowser at [localhost:3000](localhost:3000)

To resize an image, use the `/resize` endpoint [localhost:3000/resize](localhost:3000/resize)

Specify one of the available images to resize, such as `cats1.jpg` or `cast2.jpg`.

Specify the `width` and `height` in pixels, using parameters.

Examples:
* [localhost:3000/resize?filename=cats1.jpg&width=200&height=200](localhost:3000/resize?filename=cats1.jpg&width=200&height=200)
* [localhost:3000/resize?filename=cats2.jpg&width=400&height=600](localhost:3000/resize?filename=cats2.jpg&width=400&height=600)

