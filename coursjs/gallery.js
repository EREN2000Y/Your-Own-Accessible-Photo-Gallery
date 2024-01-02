function upDate(previewPic) {
    document.getElementById('image').innerHTML = previewPic.alt;
    document.querySelector('#image').style.backgroundImage = "url('" + previewPic.src + "')";
  
  
  }
  
  function unDo() {
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHtml = "Hover over an image below to display here.";
  }

  function addTabindex() {
    var img = document.getElementsByClassName('preview'); 
    for (var i = 0; i < img.length; i++) {
      img[i].setAttribute('tabindex', '0'); 
  }}
  function addEvents() {
    var images = document.getElementsByClassName('preview');
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener('focus', function() {
        this.style.border = '2px solid blue'; 
      });
  
      images[i].addEventListener('blur', function() {
        this.style.border = '10px solid black'; 
      });
    }
  }