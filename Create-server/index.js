const http = require('http')
http.createServer((req,resp)=>{
    resp.write("<h1>This is Aman</h1>")
    resp.end()
}).listen(4500)