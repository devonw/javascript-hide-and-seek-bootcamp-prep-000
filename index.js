function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild(){
  const lis = document.getElementById('grand-node').querySelectorAll('div')
  var array2 = [];
  for (let i = 0, l = lis.length; i < l; i++) {
    array2.push(lis[i].innerHTML);
  }
  return lis[array2.length-2];
}
