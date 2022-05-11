$(function() {
  function initArtCateList() {
    $.ajax({
      method: 'GET',
      url: '/my/druginfo/getinfo',
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
      url: '/my/druginfo/getinfoByid' + '?id=' + data,
      success: function(res) {
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }
        layui.layer.msg(res.msg)

        var htmlStr = template('tpl-table', res)

        $('tbody').html(htmlStr)
      }
    })
  }

  $('.btn-searchall').on('click', function() {

    initArtCateList()

  })





  $('.btn-searchbyid').on('click', function() {

    // console.log($(this).html());
    // console.log(55555);
    var id = $("#input-searchbyid").val()
      // console.log(id === '');
      // if (id == '') {
      //   initArtCateList()
      // }
      // console.log(id);
    initArtCateList1(id)

  })


  var indexAdd = null
  $('.btnAddCate').on('click', function() {
    indexAdd = layui.layer.open({
      type: 1,
      title: '添加',
      content: $('#dialog-add').html(),
      area: ['500px', '330px']
    })
  })

  $('body').on('submit', '#form-add', function(e) {
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: '/my/druginfo/addinfo',
      data: $(this).serialize(),
      success: function(res) {
        console.log(1258);
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }
        console.log(123123);
        layui.layer.close(indexAdd)
        layui.layer.msg(res.msg)
        initArtCateList()
      }
    })
  })

  $('tbody').on('click', '.btnDelCate', function(e) {
    var id = $(this).attr('data-id')

    layui.layer.confirm('确认删除?这会删除药品的数量信息！！！', { icon: 3, title: '提示' }, function(index) {
      $.ajax({
        method: 'GET',
        url: `/my/druginfo/deleteinfo/${id}`,
        success: function(res) {
          layui.layer.msg(res.msg)

          if (res.status !== 0) {
            return
          }

          layui.layer.close(index)
          initArtCateList()
        }
      })

    });


  })

  var indexEdit = null
  $('tbody').on('click', '.btnEditCate', function(e) {
    indexEdit = layui.layer.open({
      type: 1,
      title: '修改药品信息',
      content: $('#dialog-edit').html(),
      area: ['500px', '280px']
    })

    var values = $(this).parent().siblings('td')
    $('#form-edit [name=name]').attr('value', values[1].innerHTML)
    $('#form-edit [name=functions]').attr('value', values[2].innerHTML)
    $('#form-edit [name=adreaction]').attr('value', values[3].innerHTML)
    $('#form-edit [name=taboo]').attr('value', values[4].innerHTML)
    $('#form-edit [name=prescription]').attr('value', values[5].innerHTML)
    $('#form-edit [name=specification]').attr('value', values[6].innerHTML)
      // $('#form-edit [name=salary]').attr('value', values[7].innerHTML)
      // $('#form-edit [name=telnumber]').attr('value', values[8].innerHTML)
      // $('#form-edit [name=salary]').attr('value', values[9].innerHTML)


    $('#form-edit [name=id]').attr('value', $(this).attr('data-id'))
    var id = $(this).attr('data-id')
    console.log(id);
  })

  $('body').on('submit', '#form-edit', function(e) {
    var id = $(this)[0].id.value
    console.log(id);
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: `/my/druginfo/updateinfo/${id}`,
      data: $(this).serialize(),
      success: function(res) {

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
      url: '/my/druginfo/getinfo',
      success: function(res) {
        let title = "药品ID,药品名称,作用,不良反应,禁忌,是否处方,规格";
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
        link.download = "药品信息表.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    })
  }


})