// ***** SEE: https://gist.github.com/sfrdmn/8834747
(function() {
  var images = [].slice.call(document.querySelectorAll('img'))
  try {
    images.forEach(function(img) {
      downloadImage(img)
    })
  } catch (e) {
      alert("Download failed.");
      console.log('Download failed.', e);
  }
  
  function downloadImage(img) {
    var link = document.createElement('a')
    link.setAttribute('href', img.src)
    link.setAttribute('download', '')
    link.click()
  }
}).call(window);

// 
javascript:(function() {var images = [].slice.call(document.querySelectorAll('img'));try {images.forEach(function(img){downloadImage(img)})} catch (e) {alert('Download failed.');console.log('Download failed.', e)}function downloadImage(img) {var link = document.createElement('a');link.setAttribute('href', img.src);link.setAttribute('download', '');link.click()}}).call(window);

javascript:(function () {
  var images = [].slice.call(document.querySelectorAll('img'));
  try {
    images.forEach(function(img) {
      downloadImage(img);
    })
  } catch (e) {
      alert("Download failed.");
      console.log('Download failed.', e);
  }
  
  function downloadImage(img) {
    var link = document.createElement('a');
    link.setAttribute('href', img.src);
    link.setAttribute('download', '');
    link.click();
  }
}());
// **********************************************************

// SEE: https://stackoverflow.com/questions/30088897/trying-to-download-all-of-the-images-on-the-website-using-javascript
javascript:(function() {
    var images = document.getElementsByTagName('img');
    var srcList = [];
    var i = 0;

    setInterval(function(){
        if(images.length > i){
            srcList.push(images[i].src);                        
            var link = document.createElement("a");
            link.id=i;            
            link.download = images[i].src.split('/').splice(-1)[0];
            link.href = images[i].src;
            link.click();
            i++;
        }
    },1500);
}());

// link.download = images[i].src;