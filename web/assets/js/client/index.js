$(function() {
  function initArtCateList() {
    let url = '/my/client/getinfo'
    $.ajax({
      method: 'GET',
      url: url,
      success: function(res) {
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }
        // console.log(999);

        var htmlStr = template('tpl-table', res)

        $('tbody').html(htmlStr)
      }
    })
  }

  function initArtCateList1(date) {
    $.ajax({
      method: 'GET',
      url: '/my/client/getinfo' + '?type=' + date,
      success: function(res) {
        if (res.status !== 0) {
          return layui.layer.msg(res.msg)
        }

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
    e.preventDefault()

    $.ajax({
      method: 'POST',
      url: '/my/client/addinfo',
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

    layui.layer.confirm('确认删除?', { icon: 3, title: '提示' }, function(index) {
      $.ajax({
        method: 'GET',
        url: `/my/client/deleteinfo/${id}`,
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
    $('#form-edit [name=type]').attr('value', values[2].innerHTML)
    $('#form-edit [name=telnumber]').attr('value', values[3].innerHTML)
    $('#form-edit [name=address]').attr('value', values[4].innerHTML)
    $('#form-edit [name=id]').attr('value', $(this).attr('data-id'))
  })

  $('body').on('submit', '#form-edit', function(e) {
    e.preventDefault()
    console.log($(this).serialize());

    $.ajax({
      method: 'POST',
      url: '/my/client/updateinfo',
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

  // form.on('submit(demo1)', function(data){
  //   layer.alert(JSON.stringify(data.field), {
  //     title: '最终的提交信息'
  //   })
  //   return false;
  // });

  $('.selecttype').change(function() {
    const value = $(this).val();
    //输出选中项的值
    console.log($(this).val());
    if (value == 0) {

      initArtCateList();
    } else if (value == 1) {
      const data = "com"
      initArtCateList1(data)
    } else {
      const data = "vip"
      initArtCateList1(data)
    }
  });

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
      url: '/my/client/getinfo',
      success: function(res) {
        let title = "客户ID,姓名,类型,电话,地址";
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
        link.download = "客户信息表.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    })
  }

  layui.use('form', function() {
    var form = layui.form;

    //监听提交
    form.on('select(p)', function(data) {
      console.log(data);
      const value = data.value;
      //输出选中项的值
      // console.log($(this).val());
      if (value == 0) {

        initArtCateList();
      } else if (value == 1) {
        const data = "com"
        initArtCateList1(data)
      } else {
        const data = "vip"
        initArtCateList1(data)
      }
    });
  })


})