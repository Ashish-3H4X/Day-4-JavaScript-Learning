let nums = [1, 2, 3];

document.getElementById('demo').innerHTML=nums
nums.push(4); // [1, 2, 3, 4]
 
document.getElementById('demo1').innerHTML=nums

nums.pop();   // [1, 2, 3]
document.getElementById('demo2').innerHTML=nums

nums.unshift(0); // [0, 1, 2, 3]

document.getElementById('demo3').innerHTML=nums
nums.shift();   // [1, 2, 3]

document.getElementById('demo4').innerHTML=nums
