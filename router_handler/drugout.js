const db = require('../db/index')


exports.getinfo = (req, res) => {
  const sqlStr = 'select * from outputinfo'
  db.query(sqlStr, function(err, results) {
    console.log(results);
    if (err) {
      res.cc(err);
    }
    res.send({
      status: 0,
      msg: '获取药品出库记录信息成功',
      data: results

    });
  })

}

exports.searchinfo = (req, res) => {

  if (req.body.name && !req.body.date && !req.body.place) {
    //2
    // const sql = 'call query_info(4,"2001-02-02",?,"123")'
    const sql = 'SELECT * from outputinfo where name=?'
    db.query(sql, req.body.name, (err, results) => {
      if (err) {
        return res.cc(err);
      }
      res.send({
        status: 0,
        msg: "查询成功",
        data: results
      })

    })

  } else if (!req.body.name && req.body.date && !req.body.place) {
    // const sql = 'call query_info(3,?,"123","123")'
    const sql = 'SELECT * from outputinfo where CONVERT(outputinfo.date,date)=?'
    db.query(sql, req.body.date, (err, results) => {
        if (err) {
          return res.cc(err);
        }
        res.send({
          status: 0,
          msg: "查询成功",
          data: results
        })

      })
      //1
  } else if (!req.body.name && !req.body.date && req.body.place) {
    // const sql = 'call query_info(8,?,?,"123")'
    const sql = 'SELECT * from outputinfo where place=?'
    db.query(sql, req.body.place, (err, results) => {
      if (err) {
        return res.cc(err);
      }
      res.send({
        status: 0,
        msg: "查询成功",
        data: results
      })

    })
  } else if (req.body.name && req.body.date && !req.body.place) {
    // const sql = 'call query_info(8,?,?,"123")'
    const sql = 'SELECT * from outputinfo where name=? and CONVERT(outputinfo.date,date)=?'
    db.query(sql, [req.body.name, req.body.date], (err, results) => {
      if (err) {
        return res.cc(err);
      }
      res.send({
        status: 0,
        msg: "查询成功",
        data: results
      })

    })
  } else if (req.body.name && !req.body.date && req.body.place) {
    // const sql = 'call query_info(8,?,?,"123")'
    const sql = 'SELECT * from outputinfo where name=? and place=?'
    db.query(sql, [req.body.name, req.body.place], (err, results) => {
      if (err) {
        return res.cc(err);
      }
      res.send({
        status: 0,
        msg: "查询成功",
        data: results
      })

    })
  } else if (!req.body.name && req.body.date && req.body.place) {
    // const sql = 'call query_info(8,?,?,"123")'
    const sql = 'SELECT * from outputinfo CONVERT(outputinfo.date,date)=? and place=?'
    db.query(sql, [req.body.date, req.body.place], (err, results) => {
      if (err) {
        return res.cc(err);
      }
      res.send({
        status: 0,
        msg: "查询成功",
        data: results
      })

    })
  } else if (req.body.name && req.body.date && req.body.place) {
    // const sql = 'call query_info(8,?,?,"123")'
    const sql = 'SELECT * from outputinfo where name=? and CONVERT(outputinfo.date,date)=? and place=?'
    db.query(sql, [req.body.name, req.body.date, req.body.place], (err, results) => {
      if (err) {
        return res.cc(err);
      }
      res.send({
        status: 0,
        msg: "查询成功",
        data: results
      })

    })
  } else {

  }
}