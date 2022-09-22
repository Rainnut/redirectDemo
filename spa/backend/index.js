const http = require('http');
http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === '/redirect') {
    res.writeHead(302, {
      location: 'http://localhost:8848/done',
    });
  } else {
    res.writeHead(200);
    res.write('hello');
  }

  res.end();
}).listen(8848);
// https://blog.lishunyang.com/2020/06/redirect.html