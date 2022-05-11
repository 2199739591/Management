$(function() {
  function initArtCateList() {
    $.ajax({
      method: 'GET',
      url: '/my/drugin/getinfo',
      success: function(res) {
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }
        var time = res.data;
        for (var i in time) {
          // console.log(time[i].date);
          var date = new Date(time[i].date); //当前标准时间格式
          var year = date.getFullYear();
          var month = date.getMonth() + 1; //返回0~11之间的数字，0代表一月，11代表12月
          var day = date.getDate(); //返回天数，0~31，getDay()返回的是星期几（0~6）
          var hour = date.getHours(); //获取小时
          var minute = date.getMinutes(); //获取分钟
          var second = date.getSeconds(); //获取秒
          var num = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
          time[i].date = num
        }

        var htmlStr = template('tpl-table', res)

        $('tbody').html(htmlStr)
      }
    })
  }
  initArtCateList()


  $('.btn-searchall').on('click', function() {

    // console.log($(this).html());
    // console.log(55555);

    // console.log(id === '');
    // if (id == '') {
    //   initArtCateList()
    // }
    // console.log(id);
    initArtCateList()

  })

  $('body').on('submit', '#form-search', function(e) {
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: '/my/drugin/searchinfo',
      data: $(this).serialize(),
      success: function(res) {
        // console.log(1258);
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }
        layui.layer.msg(res.msg)

        var time = res.data;
        for (var i in time) {
          // console.log(time[i].date);
          var date = new Date(time[i].date); //当前标准时间格式
          var year = date.getFullYear();
          var month = date.getMonth() + 1; //返回0~11之间的数字，0代表一月，11代表12月
          var day = date.getDate(); //返回天数，0~31，getDay()返回的是星期几（0~6）
          var hour = date.getHours(); //获取小时
          var minute = date.getMinutes(); //获取分钟
          var second = date.getSeconds(); //获取秒
          var num = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
          time[i].date = num
        }
        // console.log(res.data);
        var htmlStr = template('tpl-table', res)
        $('tbody').html(htmlStr)
      }
    })
  })

  $('.btn-exporttable').on('click', function() {

    dataToExcel()

  })

  function downloadDataHandle(data) {
    //增加\t为了不让表格显示科学计数法或者其他格式
    let str = '';
    for (let i = 0; i < data.length; i++) {
      for (let item in data[i]) {
        str += `${data[i][item] + '\t'},`;
      }
      str += '\n';
    }
    return str;
  }

  function dataToExcel() {

    $.ajax({
      method: 'GET',
      url: '/my/drugin/getinfo',
      success: function(res) {
        let title = "入库记录ID,药品名称,入库日期,入库数量";
        let data = res.data
          // 将数据拼接成字符串
        let str = downloadDataHandle(data);
        str = title + "\n" + str;
        // encodeURIComponent解决中文乱码
        let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
        // 通过创建a标签实现
        let link = document.createElement("a");
        link.href = uri;
        //对下载的文件命名
        link.download = "入库记录表.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    })
  }


})