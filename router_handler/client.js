const db = require('../db/index')
exports.getinfo = (req, res) => {
  console.log(123);

  // if (req.params) {
  console.log(req.query);
  if (req.query.type) {
    console.log(123);
    const sqlStr = 'select * from client where type = ?'
    db.query(sqlStr, req.query.type, function(err, results) {
      if (err) {
        res.cc(err);
      }
      // if (results.length == 0) {
      //     res.cc("获取员工数据失败");
      // }
      res.send({
        status: 0,
        msg: '获取客户信息成功',
        data: results

      });
    })
  } else {
    const sqlStr = 'select * from client'
    db.query(sqlStr, function(err, results) {
      if (err) {
        res.cc(err);
      }
      // if (results.length == 0) {
      //     res.cc("获取员工数据失败");
      // }
      res.send({
        status: 0,
        msg: '获取客户信息成功',
        data: results

      });
    })
  }
}



exports.addinfo = (req, res) => {
  console.log(123);
  const sql = 'select * from client where name = ?'
  let results = []

  db.query(sql, req.body.name, (err, results) => {
    if (err) {
      return res.cc(err)
    }

    if (results != 0) {
      if (results[0].name == req.body.name) {
        return res.cc("名字已被占用")
      }
      // if (results[0].name == req.body.name) {
      //   return res.cc("名字已被占用")
      // }
      // if (results[0].id == req.body.id) {
      //   return res.cc('id已被占用')
      // }

      // if (results.length === 2) { // name，alias分别被两条数据占用
      //   return res.cc('id和姓名已被占用')
      // }
    }

    const sqlStr = "insert into client set ?"

    db.query(sqlStr, req.body, (err, results) => {
      if (err) {
        return res.cc(err)
      }
      if (results.affectedRows !== 1) {
        return res.cc("新增客户失败")
      }
      res.cc("新增客户成功", 0)


    })


  })






}


exports.deleteinfo = (req, res) => {
  console.log(req.params);
  const sql = 'delete from client where id = ?'

  db.query(sql, req.params.id, (err, results) => {
    if (err) {
      return res.cc(err)
    }
    if (results.affectedRows !== 1) {
      return res.cc('删除客户失败')
    }
    res.send({
      status: 0,
      msg: '删除客户成功'
    })


  })


}


exports.updateinfo = (req, res) => {
  console.log(req.body);
  const sql = 'select * from employee where id != ? and name = ?'

  db.query(sql, [req.body.id, req.body.name], (err, results) => {
    if (err) {
      return res.cc(err)
    }

    if (results != 0) {
      if (results[0].name == req.body.name) {
        return res.cc("名字已被占用")
      }

    }
    const sqlUpdate = 'update client set ? where id = ?'

    db.query(sqlUpdate, [req.body, req.body.id], (err, results) => {
      if (err) {
        return res.cc(err)
      }
      if (results.affectedRows !== 1) {
        return res.cc('更新员工信息失败')
      }
      res.send({
        status: 0,
        msg: '更新员工信息成功'
      })
    })

  })
}