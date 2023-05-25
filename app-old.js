const http = require('http');



http.createServer((req,res)=>{
    res.setHeader('Content-Disposition', 'attachment; filename=list.cvs');
   res.writeHead(200,'Content-Type', 'application/json')
   res.write('id, name\n');
   res.write('1, Stefany\n')
   res.write('2, Esteban\n')
   res.write('3, Carlos\n')
   res.write('4, Ingrid\n')


    res.end()
}).listen(8080)
console.log('listenig server on port',8080);