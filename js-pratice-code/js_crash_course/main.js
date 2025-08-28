
// single element
//  console.log(document.getElementById('my-form'));
//  console.log(document.querySelector('.container'));



 //Multiple element
//  console.log(document.querySelectorAll('.item'));
//  console.log(document.getElementByClassName('item'));


// const items=document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));



const ul=document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent='hello';
ul.childern[1].innerText='abc';
ul.lastElementChild.innerHTML = '<h1>hello</h1>';
