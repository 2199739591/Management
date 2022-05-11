const db = require('../db/index')

exports.getinfo = (req, res) => {
  const sqlStr = 'select name,sum(count) as count from drugcount GROUP BY name;'
  db.query(sqlStr, function(err, results) {
    console.log(results);
    if (err) {
      res.cc(err);
    }
    // if (results.length == 0) {
    //     res.cc("获取员工数据失败");
    // }
    res.send({
      status: 0,
      msg: '获取药品数量信息成功',
      data: results

    });
  })

}

exports.getinfoByName = (req, res) => {
  const sqlStr = 'select * from drugcount where name = ?'
  db.query(sqlStr, req.query.name, function(err, results) {
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

  const sqlStr = "select in1(?,?)"

  db.query(sqlStr, [req.body.name, req.body.count], (err, results) => {

    if (err) {
      return res.cc(err)
    }
    if (Object.values(results[0])[0] === -1) {
      return res.cc("药品信息中没有该药品，已自动添加", 2)
    }

    return res.cc("入库药品成功", 0)
  })
}












exports.deleteinfo = (req, res) => {
  // const sql = 'select count from drugcount where name = ?'
  // db.query(sql, req.body.name, (err, results) => {
  //   if (err) {
  //     return res.cc(err)
  //   }
  //   if (results == 0) {
  //     return res.cc("不存在该药品，无法出库")
  //   }
  //   console.log(results);
  //   if (results[0].count < req.body.count) {
  //     return res.cc("出库药品数量超过库存")
  //   }

  //   const sqlcall = 'call out1(?,?)'
  //   db.query(sqlcall, [req.body.name, req.body.count], (err, results) => {
  //     if (err) {
  //       return res.cc(err)
  //     }
  //     if (results.affectedRows !== 1) {
  //       return res.cc("出库药品失败")
  //     }
  //     return res.cc("出库药品成功", 0)



  // })

  const sqlCount = 'select count_drug(?)'

  db.query(sqlCount, req.body.name, (err, results) => {
    console.log(parseInt(Object.values(results[0])[0]));
    if (err) {
      return res.cc("大错特错")
    }
    if (Object.values(results[0])[0] < req.body.count) {
      return res.cc("库存不足")
    }
    // console.log("可以开始出库");


    const sql = 'call out1(?,?,?)'
    db.query(sql, [req.body.name, req.body.count, req.body.place], (err1, results1) => {
      if (err1) {
        return res.cc('错了')
      }
      if (results1.affectedRows !== 1) {
        return res.cc('出库药品失败')
      }
      res.send({
        status: 0,
        msg: '出库药品成功'
      })
    })
  })
}


// })
// }













// exports.updateinfo = (req, res) => {
//   // res.send(req.body);
//   // res.cc("好家伙", 1)
//   // const sql = 'select * from druginfo where id != ? and name = ?'

//   // db.query(sql, [req.body.id, req.body.name], (err, results) => {
//   //   if (err) {
//   //     return res.cc(err)
//   //   }

//   //   if (results != 0) {
//   //     if (results[0].name == req.body.name) {
//   //       return res.cc("名字已被占用")
//   //     }

//   //   }
//   //   res.cc("好家伙2", 1)
//   const sqlUpdate = 'update druginfo set ? where id = ?'



//   db.query(sqlUpdate, [req.body, req.params.id], (err, results) => {
//     // return res.cc("真的好家伙")
//     // res.send(req.body)
//     if (err) {
//       return res(err)
//     }
//     if (results.affectedRows !== 1) {
//       return res.cc('更新员工信息失败')
//     }
//     res.send({
//       status: 0,
//       msg: '更新员工信息成功'
//     })
//   })

//   // })