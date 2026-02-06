const http = require("http");
const { url } = require("inspector");
http
  .createServer((request, response) => {
    response.writeHead(200, {
      "content-type": "text/html",
    });
    if (request.url == "/") {
      response.write(`<h1>Sudah bener ini page 1</h1>`);
    } else if (request.url == "/profil") {
      response.write(`<h1>ini profil</h1>`);
    } else {
      response.write(`<h1>url tidak ada</h1>`);
    }
  })
  .listen(3000, function () {
    console.log("Sudah Berhasil Nyalain server");
  });
//pelajari lagi
//
