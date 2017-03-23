const express = require('express')
const path    = require('path')
const port    = process.env.PORT || 3000
const io      = require('./sockets/io')
const app     = express()
const http    = require('http')
const server  = http.createServer(app)

io.attach(server)

app.use(express.static(__dirname + '/public'))

app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

server.listen(port, (error) => {
  if (error) console.log(error);
  console.info('server started on port %s.', port);
});
