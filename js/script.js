function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
  }

  product = {
    "id":"1",
    "name":"iPhone 14 Pro Max",
    "regular_price":"35990000",
    "sale_price":"28990000",
    "image":"",
    "phone": {
        "home":"028341932",
        "hand":"0918764526",
        "work":"028156392"
    }
};
$("#account").on("click",function(){

  $("#login").css("display","block")

});
$(document).ready(function () {
  var modal = $('.modal');
  var btn = $('.btn');
  var span = $('.close');

  btn.click(function () {
    modal.show();
  });

  span.click(function () {
    modal.hide();
  });

  $(window).on('click', function (e) {
    if ($(e.target).is('.modal')) {
      modal.hide();
    }
  });
});
