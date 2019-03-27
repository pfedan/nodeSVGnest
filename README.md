# nodeSVGnest
Node.js webserver wrapper for [SVGnest](https://github.com/Jack000/SVGnest)

SVGnest is included as a git submodule, so you'll have to clone this repository recursively.

## Installation
    git clone --recurse-submodules https://github.com/pfedan/nodeSVGnest.git
    cd nodeSVGnest
    npm install
## Run the webserver (listening on port 3000)
    node app.js
or specify a custom port number:
    node app.js 3001