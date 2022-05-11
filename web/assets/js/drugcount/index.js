$(function() {
  function initArtCateList() {
    $.ajax({
      method: 'GET',
      url: '/my/drugcount/getinfo',
      success: function(res) {
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
            // return console.log(去年买的的);
        }
        // console.log(res);
        var htmlStr = template('tpl-table', res)

        $('tbody').html(htmlStr)
      }
    })
  }
  initArtCateList()

  function initArtCateList1(data) {
    $.ajax({
      method: 'GET',
      url: '/my/drugcount/getinfoByname' + '?name=' + data,
      success: function(res) {
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }
        console.log(res);

        var htmlStr = template('tpl-table1', res)

        $('tbody').html(htmlStr)
      }
    })
  }



  $('.btn-searchall').on('click', function() {
    initArtCateList()

  })


  $('.btn-searchbyname').on('click', function() {


    var name = $("#input-searchbyid").val()
    initArtCateList1(name)
  })


  var indexAdd = null
  $('.btnAddCate').on('click', function() {
    indexAdd = layui.layer.open({
      type: 1,
      title: '入库',
      content: $('#dialog-add').html(),
      area: ['500px', '330px']
    })
  })

  $('body').on('submit', '#form-add', function(e) {
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: '/my/drugcount/addinfo',
      data: $(this).serialize(),
      success: function(res) {
        // console.log(1258);
        if (res.status === 2) {
          layui.layer.close(indexAdd)
          initArtCateList()
          return layui.layer.msg(res.msg)
        }
        if (res.status !== 0) {

          return layui.layer.msg(res.msg)
        }

        // console.log(123123);
        layui.layer.close(indexAdd)
        layui.layer.msg(res.msg)
        initArtCateList()
      }
    })
  })

  var indexEdit = null
  $('tbody').on('click', '.btnEditCate', function(e) {
    indexEdit = layui.layer.open({
      type: 1,
      title: '出库药品',
      content: $('#dialog-edit').html(),
      area: ['500px', '280px']
    })

    var values = $(this).parent().siblings('td')
    $('#form-edit [name=name]').attr('value', values[0].innerHTML)
      // $('#form-edit [name=functions]').attr('value', values[2].innerHTML)
      // $('#form-edit [name=adreaction]').attr('value', values[3].innerHTML)
      // $('#form-edit [name=taboo]').attr('value', values[4].innerHTML)
      // $('#form-edit [name=prescription]').attr('value', values[5].innerHTML)
      // $('#form-edit [name=specification]').attr('value', values[6].innerHTML)
      // $('#form-edit [name=salary]').attr('value', values[7].innerHTML)
      // $('#form-edit [name=telnumber]').attr('value', values[8].innerHTML)
      // $('#form-edit [name=salary]').attr('value', values[9].innerHTML)


    // $('#form-edit [name=id]').attr('value', $(this).attr('data-id'))
    // var id = $(this).attr('data-id')
    // console.log(id);
  })

  $('body').on('submit', '#form-edit', function(e) {
    console.log($(this).serialize());
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: `/my/drugcount/deleteinfo`,
      data: $(this).serialize(),
      success: function(res) {
        // if (res.status == 2) {
        //   return layui.layer.msg(res.msg)
        // }
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }

        layui.layer.close(indexEdit)
        layui.layer.msg(res.msg)
        initArtCateList()
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
      url: '/my/drugcount/getinfo',
      success: function(res) {
        let title = "药品名称,药品数量";
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
        link.download = "药品数量表.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    })
  }


})