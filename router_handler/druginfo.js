const db = require('../db/index')
  // const bcrypt = require('bcryptjs')
  // const { promisify } = require('util')
  // const jwt = require('jsonwebtoken')
  // const config = require('../confg')

exports.getinfo = (req, res) => {
  console.log(123);
  const sqlStr = 'select * from druginfo'
  db.query(sqlStr, function(err, results) {
    if (err) {
      res.cc(err);
    }
    // if (results.length == 0) {
    //     res.cc("获取员工数据失败");
    // }
    res.send({
      status: 0,
      msg: '获取药品信息成功',
      data: results

    });
  })
}

exports.getinfoByid = (req, res) => {
  const sqlStr = 'select * from druginfo where name = ?'
  db.query(sqlStr, req.query.id, function(err, results) {
    if (err) {
      res.cc(err);
    }
    res.send({
      status: 0,
      msg: '获取药品信息成功',
      data: results
    });
  })
}

exports.addinfo = (req, res) => {
  console.log(123);
  const sql = 'select * from druginfo where name = ?'
  let results = []

  db.query(sql, req.body.name, (err, results) => {
    if (err) {
      return res.cc(err)
    }
    if (results != 0) {
      if (results[0].name == req.body.name) {
        return res.cc("名字已被占用")
      }
    }

    const sqlStr = "insert into druginfo set ?"

    db.query(sqlStr, req.body, (err, results) => {
      if (err) {
        return res.cc(err)
      }
      if (results.affectedRows !== 1) {
        return res.cc("新增药品失败")
      }
      res.cc("新增药品成功", 0)


    })


  })






}


exports.deleteinfo = (req, res) => {
  const sql = 'delete from druginfo where id = ?'

  db.query(sql, req.params.id, (err, results) => {
    if (err) {
      // console.log(123);
      return res.cc(err)
    }
    if (results.affectedRows !== 1) {
      return res.cc('删除药品失败')
    }
    res.send({
      status: 0,
      msg: '删除药品成功'
    })


  })


}


exports.updateinfo = (req, res) => {
  const sqlUpdate = 'update druginfo set ? where id = ?'



  db.query(sqlUpdate, [req.body, req.params.id], (err, results) => {
    // return res.cc("真的好家伙")
    // res.send(req.body)
    if (err) {
      return res(err)
    }
    if (results.affectedRows !== 1) {
      return res.cc('更新药品信息失败')
    }
    res.send({
      status: 0,
      msg: '更新药品信息成功'
    })
  })

  // })
}