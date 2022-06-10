// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = function(fnCallback) {
  //array untuk menampung kata yang diambil
  let arrGabung = [];

  //baca file data1.json dan masukkan kondisi error
  fs.readFile(file1, {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        return fnCallback(err, null);
    }
    //ambil kata 'dunia' dari data1.json
    let jsonFile1 = JSON.parse(data);
    let arrString1 = jsonFile1.message.split(' ');
    arrGabung.push(arrString1[1]);
  
    //baca file data2.json dan masukkan kondisi error
    fs.readFile(file2, {encoding: 'utf8'}, (err, data) => {
      if (err) {
        return fnCallback(err, null);
      }
      //ambil kata 'world' dari data2.json
      let jsonFile2 = JSON.parse(data);
      let arrString2 = jsonFile2[0].message.split(' ');
      arrGabung.push(arrString2[1]);

      //baca file data3.json dan masukkan kondisi error
      fs.readFile(file3, {encoding: 'utf-8'}, (err, data3) => {
        if (err) {
          return fnCallback(err, null);
        }  
        //ambil kata 'sekai' dari data3.json
        let jsonFile3 = JSON.parse(data3);
        let arrString3 = jsonFile3[0].data.message.split(' ');
        arrGabung.push(arrString3[1]);
  
        fnCallback(null, arrGabung);
      })
    })
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
