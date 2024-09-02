"use strict";

exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
  };
  res.json(data);
  res.end();
};

//response ntuk nested matakuliah
exports.oknested = function (values, res) {
  //lakukan akumulasi
  const hasil = values.reduce((akumulasikan, item) => {
    //tentukan grup
    if (akumulasikan[item.nama]) {
      //buatlah variable grup nama mahasiswa
      const group = akumulasikan[item.nama];
      //cek jika isi aray adalah mata kuliah
      if (Array.isArray(group.matakuliah)) {
        //tambah value kedalam grup
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});
  var data = {
    status: 200,
    values: hasil,
  };

  res.json(data);
  res.end;
};
