const http = require("http");
// menggunakan modul http yg sudah disiapkan oleh node.js
// modul http berfungsi untuk
// membuat komputer kita bisa diakses dari luar
// (dengan menggunakan internet)
// localhost adalah replika (dummy) dari situs web asli tapi hanya jalan di komputer kita
// untuk keperluan pengembangan/pembuatan aplikasi
http
  .createServer(function (request, response) {
    // console.log("tes server");
    response.writeHead(200, {
      "content-type": "text/html",
    });
    response.end("halo bro <hr>");
  })
  .listen(2000, () => {
    console.log("keren udah nyala");
  });

//   nyalain server : node namafile
// Note : untuk status code itu ada table sendiri tidak bisa sembarangan
// Note : untuk status code itu ada table sendiri tidak bisa sembarangan
// Note : untuk status code itu ada table sendiri tidak bisa sembarangan
