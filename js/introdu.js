$('.gnb').children('p').click(function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  var data_alt = $(this).attr('data-alt');
  $('.content p').removeClass('active');
  $('#'+data_alt).addClass('active');
})
