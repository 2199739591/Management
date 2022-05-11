const db = require('../db/index')
  // const bcrypt = require('bcryptjs')
  // const { promisify } = require('util')
  // const jwt = require('jsonwebtoken')
  // const config = require('../confg')

exports.getinfo = (req, res) => {
  console.log(123);
  const sqlStr = 'select * from employee'


  db.query(sqlStr, function(err, results) {
    if (err) {
      res.cc(err);
    }
    // if (results.length == 0) {
    //     res.cc("获取员工数据失败");
    // }
    res.send({
      status: 0,
      msg: '获取员工信息成功',
      data: results

    });
  })
}


exports.addinfo = (req, res) => {
  console.log(111111);
  const sql = 'select * from employee where name = ? or id = ?'
  let results = []

  db.query(sql, [req.body.name, req.body.id], (err, results) => {
    if (err) {
      return res.cc(err)
    }

    if (results != 0) {
      if (results[0].name == req.body.name && results[0].id == req.body.id) {
        return res.cc("id和名字都已被占用")
      }
      if (results[0].name == req.body.name) {
        return res.cc("名字已被占用")
      }
      if (results[0].id == req.body.id) {
        return res.cc('id已被占用')
      }

      if (results.length === 2) { // name，alias分别被两条数据占用
        return res.cc('id和醒名已被占用')
      }
    }

    const sqlStr = "insert into employee set ?"

    db.query(sqlStr, req.body, (err, results) => {
      if (err) {
        return res.cc(err)
      }
      if (results.affectedRows !== 1) {
        return res.cc("新增员工失败")
      }
      res.cc("新增员工成功", 0)


    })


  })






}


exports.deleteinfo = (req, res) => {
  const sql = 'delete from employee where id = ?'

  db.query(sql, req.params.id, (err, results) => {
    if (err) {
      return res.cc(err)
    }
    if (results.affectedRows !== 1) {
      return res.cc('删除员工失败')
    }
    res.send({
      status: 0,
      msg: '删除员工成功'
    })


  })


}


exports.updateinfo = (req, res) => {
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


    const sqlUpdate = 'update employee set ? where id = ?'



    db.query(sqlUpdate, [req.body, req.body.id], (err, results) => {
      if (err) {
        return res(err)
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