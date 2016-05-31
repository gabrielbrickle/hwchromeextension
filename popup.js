

function pageLinks(links) {
  var aTags = document.querySelectorAll('a');
  aTags = Array.from(aTags)
  aTags.forEach(function (element,idx, arr){
    element.href = "http://gifdanceparty.giphy.com/";
  })
}
pageLinks()

function pagePics(links) {
  var sitePhotos = document.querySelectorAll('img');
  sitePhotos = Array.from(sitePhotos)
  sitePhotos.forEach(function (element,idx,arr){
    element.photo= "http://ecx.images-amazon.com/images/I/71Qwx0Q4eaL._SL1000_.jpg";
  })
}
pagePics()
