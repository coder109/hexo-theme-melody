$(function () {

  $('#toggle-sidebar').on('click', function () {
    if (!isMobile() && $('#sidebar').is(':visible')) {
      var isOpen = $(this).hasClass('on')
      isOpen ? $(this).removeClass('on') : $(this).addClass('on')
      
      if (isOpen) {
        // 关闭侧边栏：移除样式，触发 CSS 动画
        $('#page-header').removeClass('open-sidebar')
        $('body').css('paddingLeft', '0px')
        $('#sidebar').css('transform', 'translateX(0px)')
        $('#toggle-sidebar')
          .css('transform', 'rotateZ(0deg)')
          .css('color', '#1F2D3D')
      } else {
        // 打开侧边栏：添加样式，触发 CSS 动画
        $('#page-header').addClass('open-sidebar')
        $('body').css('paddingLeft', '300px')
        $('#sidebar').css('transform', 'translateX(300px)')
        $('#toggle-sidebar')
          .css('transform', 'rotateZ(180deg)')
          .css('color', '#99a9bf')
      }
    }
  })

  $(function() {
    $('.author-info').addClass('show');
  })
})

// 补充：原代码中用到的 isMobile 函数（如果未定义需添加）
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}