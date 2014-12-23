Steps
http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/

# download and install Node.js from the website
# install Express into your Node.js installation
  C:\node>npm install -g express
# install the Express Generator
  C:\node>npm install -g express-generator
# create an Express project
  C:\node>express hackberry
# add 2 dependencies to the package.json file
  "dependencies": {
  ...
  "mongodb": "*",
  "monk": "*"
  }
# install the dependencies
  C:\node\hackberry>npm install
# create a folder for the MongoDB data
  C:\node\hackberry>mkdir data 
# start the web server
  C:\node\hackberry>npm start

# download MongoDB and install it in C:/mongo
   
