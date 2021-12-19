// function show() {
//   var result = document.getElementById('result');
//   console.log(result.innerText);
//   var nowDate =new Date();
//   result.innerText = nowDate.toLocaleString();
// }

// function showElements(){
//   var elements = document.getElementsByTagName('div');
//   for (var i = 0;i < elements.length; i++){
//     console.log(elements[i].innerText);
//   }
// }

// function showElements(){
//   var elements = document.getElementsByName('result');
//   console.log(elements[0].value);
// }

// function showElements(){
//   var elements = document.getElementsByClassName('foo');
//   for (var i = 0; i < elements.length ; i++){
//     console.log(elements[i].innerText);
//   }
// }

// function append(){
//   var li = document.createElement('li');
//   var text = document.createTextNode('追加文字列');
//   li.appendChild(text);
//   lists.appendChild(li);
// }

// function replace(){
//   var newList = document.createElement('li');
//   newList.setAttribute('id','newList');
//   var newText = document.createTextNode('新しい要素です');
//   newList.appendChild(newText);
//   var oldList = document.getElementById('oldList');
//   var parentNode = oldList.parentNode;
//   parentNode.replaceChild(newList,oldList);
// }

// function remove(){
//   var parentElement = document.getElementById('lists');
//   var elements = parentElement.getElementsByTagName("li");
//   var removeIndex = elements.length - 1 ;
//   parentElement.removeChild(elements[removeIndex]);
// }



var body = document.getElementsByTagName('body')[0];
 
function linkUrl() {
    location.href = 'ここに遷移先のアドレス'
}
 
var bt3 = document.getElementById('button3');
bt3.addEventListener('click', function(){
    body.classList.add('anime3');
    setTimeout(linkUrl, 1500);
});