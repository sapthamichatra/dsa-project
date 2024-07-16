var container = document.getElementById("array");
pages = [];

// Asynchronous TernarySearch function
async function JumpSearch() {
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");

	// Extracting the value entered by the user
	var num = document.getElementById("fname").value;

	// Colouring all the blocks violet
	for (var j = 0; j < blocks.length; j += 1) {
		blocks[j].style.backgroundColor = "#6b5b95";
	}
	var flag = 0;
	var str="";
	var n=blocks.length;
	output.innerText = "";


	
  if (n == 0) { // if array is empty, return -1
    output.innerText = "Element NOT Found";
	return;
  }
let delay=1000;
		
		let i = 1;
  while (i < n && pages[i] < num) { 
    i *= 2;
  }
		
let left = Math.floor(i / 2); 
let right = Math.min(i, n - 1); 
 

// To wait for .1 sec
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
	
		while (left <= right) { 
    const mid = Math.floor((left + right) / 2); 
    if (pages[mid] == num) { 
     output.innerText = "Element Found ";
			blocks[mid].style.backgroundColor = "#13CE66";
	flag=1;
			return;
    } else if (pages[mid] < num) {
blocks[mid].style.backgroundColor = "red";
      left = mid + 1;
    } else {
blocks[mid].style.backgroundColor = "red";
      right = mid - 1;
    }
await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
  }
	
		// To wait for .1 sec
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
	

	if (flag === 0) {
		output.innerText = "Element Not Found";
	}
}

function generatearray()
{

  let inputText = document.getElementById('fname1').value;
  if(inputText.trim()==''){
		alert(" Array textbox should not be empty!");
		return;
	}
  
  inputText = inputText.split(' ');
  for (let i = 0; i < inputText.length; i++) {
	  if(inputText[i]==''){
		  continue;
	  }
    inputText[i] = Number(inputText[i]);
    pages.push(Number(inputText[i]));
  }
for (var i = 0; i < pages.length; i++) {
	// Return a value from 1 to 100 (both inclusive)






	

pages.sort(function(a, b) {
		return a - b;
	});
var value = pages[i];
	


	// Creating element div
	var array_ele = document.createElement("div");

	// Adding class 'block' to div
	array_ele.classList.add("block");

	// Adding style to div
	array_ele.style.height = `${value * 3}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;

	// Creating label element for displaying
	// size of particular block
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;

	// Appending created elements to index.html
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}
// Calling generatearray function
//generatearray();
}
function clearInput(){
      window.location.reload()
		
 }
 
 
 function TimeComplexity()
{
  let inputText = document.getElementById('fname1').value;
  var output1 = document.getElementById("text1");

var output2 = document.getElementById("text2");
var output3 = document.getElementById("text3");
  inputText = inputText.split(' ');
let n=inputText.length;

let b=1;
let a=Math.floor(Math.log2(n));
let w=Math.floor(Math.log2(n));
output1.innerText = "BEST CASE :"+b;
output2.innerText = "AWERAGE CASE :"+a;
output3.innerText = "WORST CASE :"+w;
}

function SpaceComplexity()
{
 let inputText = document.getElementById('fname1').value;
  var output = document.getElementById("text4");


  inputText = inputText.split(' ');
let n=inputText.length;

let sp=2**n+4;
output.innerText = "SPACE COMPLEXITY  :"+sp;

}