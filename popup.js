

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
    element.src ="http://ecx.images-amazon.com/images/I/71Qwx0Q4eaL._SL1000_.jpg";
  })
}
pagePics()

function pageParagraph(links) {
  var siteParagraphs = document.querySelectorAll('p');
  siteParagraphs = Array.from(siteParagraphs)
  siteParagraphs.forEach(function (element,idx,arr){
    element.innerText ="DANCE";
  })
}
pageParagraph()
