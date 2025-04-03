let fruits = ["apple", "mango", "banana"];
document.getElementById('demo1').innerHTML = `
 
 let fruits =["apple","mango","banana"];<br>
  Output : 
  ${fruits}

 
 `
let numbers = new Array(1, 2, 3, 4, 5, 6);
let number = new Array(5);
document.getElementById('demo2').innerHTML = `
 
 let numbers = new Array(1,2,3,4,5,6);<br>
  Output : 
  ${numbers}
<pre> or  </pre>
let number = new Array(5);<br>
  Output :
  ${number}

//  `
// array from method 


let str = "hello";
let chararr = Array.from(str);
 document.getElementById('demo3').innerHTML=`
 let str = "hello"; <br>
 let chararr = Array.from(str); <br>

Output : 
${chararr}
 `