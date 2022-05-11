$(function() {
  function initArtCateList() {
    $.ajax({
      method: 'GET',
      url: '/my/employee/getinfo',
      success: function(res) {
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }
        console.log(res);
        var htmlStr = template('tpl-table', res)

        $('tbody').html(htmlStr)
      }
    })
  }

  initArtCateList()

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
    console.log($(this).serialize());
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: '/my/employee/addinfo',
      data: $(this).serialize(),
      success: function(res) {
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }
        layui.layer.close(indexAdd)
        layui.layer.msg(res.msg)
        initArtCateList()
      }
    })
  })

  $('tbody').on('click', '.btnDelCate', function(e) {
    var id = $(this).attr('data-id')

    layui.layer.confirm('确认删除?', { icon: 3, title: '提示' }, function(index) {
      $.ajax({
        method: 'GET',
        url: `/my/employee/deleteinfo/${id}`,
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
      title: '修改员工信息',
      content: $('#dialog-edit').html(),
      area: ['500px', '280px']
    })

    var values = $(this).parent().siblings('td')
    $('#form-edit [name=name]').attr('value', values[1].innerHTML)
    $('#form-edit [name=telnumber]').attr('value', values[2].innerHTML)
    $('#form-edit [name=salary]').attr('value', values[3].innerHTML)
    $('#form-edit [name=id]').attr('value', $(this).attr('data-id'))
  })

  $('body').on('submit', '#form-edit', function(e) {
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: '/my/employee/updateinfo',
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
      url: '/my/employee/getinfo',
      success: function(res) {
        let title = "客户ID,姓名,联系方式,工资";
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
        link.download = "员工信息表.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    })
  }


})