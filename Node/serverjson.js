const http=require('http');

var server = http.createServer(function (req, res) {
    console.log(req.url);
    res.writeHead(200, {'Content-type':'application/json' });
    var miobjeto={
        nombre:'antonio',
        trabajo:'programador',
        edad:35,
    }
    //convertir en un string  el *miobjeto* json
    res.end(JSON.stringify(miobjeto));
});

server.listen(3001,'127.0.0.1');