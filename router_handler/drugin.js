const db = require('../db/index')

exports.getinfo = (req, res) => {
  const sqlStr = 'select * from inputinfo;'
  db.query(sqlStr, function(err, results) {
    console.log(results);
    if (err) {
      res.cc(err);
    }
    res.send({
      status: 0,
      msg: '获取药品入库记录信息成功',
      data: results

    });
  })

}

exports.searchinfo = (req, res) => {

  if (req.body.name && !req.body.date) {
    //2
    // const sql = 'call query_info(4,"2001-02-02",?,"123")'
    const sql = 'SELECT * from inputinfo where name=?'
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

  } else if (!req.body.name && req.body.date) {
    // const sql = 'call query_info(3,?,"123","123")'
    const sql = 'SELECT * from inputinfo where CONVERT(inputinfo.date,date)=?'
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
  } else if (req.body.name && req.body.date) {
    // const sql = 'call query_info(8,?,?,"123")'
    const sql = 'SELECT * from inputinfo where CONVERT(inputinfo.date,date)=? and name=?'
    db.query(sql, [req.body.date, req.body.name], (err, results) => {
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