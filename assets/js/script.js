$(function () {

  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function () {
        window.location.hash = gato;
      });
    }
  });

  $('[data-toggle="popover"]').popover();

/*   let img1 = document.getElementById('img1');

  let descargarImg = document.getElementById('descargarImg');
  descargarImg.addEventListener(click, () => {
    img1.download = true;

  })
*/

$('a[download]').each(function() {
  var $a = $(this),
      fileUrl = $a.attr('href');

  $a.attr('href', 'data:application/octet-stream,' + encodeURIComponent(fileUrl));
});
 
});
