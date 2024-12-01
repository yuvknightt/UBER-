
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(8080, '0.0.0.0', () => {
    console.log('Server is running on port 8080');
  });
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})