$(function () {

});

function setView(view, data) {
  var $content = $('.content');

  $content.removeClass('show');
  setTimeout(function () {
    $content.addClass('show');
    $content.html(Mustache.render($('script[id="templates/' + view + '.html"]').html(), data));
  }, 500);
}
