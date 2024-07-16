var container = document.getElementById("array");


// Asynchronous TernarySearch function
async function TernarySearch(delay = 1500) {
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");

	// Extracting the value entered by the user
	var num = document.getElementById("fname").value;

	// Colouring all the blocks violet
	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "yellow";
	}

	output.innerText = "";

	// TernarySearch Algorithm
	var start = 0;
	var end = blocks.length-1;
	var flag = 0;
	while (start <= end) {
		var mid1 = Math.floor(start + (end - start) / 3);
		var mid2 = Math.floor(end - (end - start) / 3);

		// Extracting values of mid1 and mid2 blocks
		var value1 = Number(blocks[mid1].childNodes[0].innerHTML);
		var value2 = Number(blocks[mid2].childNodes[0].innerHTML);

		// Changing color to red
		blocks[mid1].style.backgroundColor = "#8300bb";
		blocks[mid2].style.backgroundColor = "#8300bb";

		// To wait for .1 sec
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);

		// Number entered by the user equals to
		// element at mid1
		if (value1 == num) {
			output.innerText = "Element Found";
			blocks[mid1].style.backgroundColor = "#13CE66";
			flag = 1;
			break;
		}

		// Number entered by the user equals to
		// element at mid2
		if (value2 == num) {
			output.innerText = "Element Found";
			blocks[mid2].style.backgroundColor = "#13CE66";
			flag = 1;
			break;
		}

		if (num < value1) {
			end = mid1 - 1;
		} else if (num > value2) {
			start = mid2 + 1;
		} else {
			start = mid1 + 1;
			end = mid2 - 1;
		}
	}

	if (flag === 0) {
		output.innerText = "Element Not Found";
	}
}

function generatearray()
{
pages = [];
  let inputText = document.getElementById('fname1').value;
  if(inputText.trim()==''){
		alert("Array textbox should not be empty!");
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
function Reset(){
	window.location.reload();
}
 function TimeComplexity()
{
  let inputText = document.getElementById('fname1').value;
  var output1 = document.getElementById("text1");

var output2 = document.getElementById("text2");
var output3 = document.getElementById("text3");
  inputText = inputText.split(' ');
let n=inputText.length;

let b=Math.floor(Math.log(n));
let a=n*n;
let w=Math.floor(Math.log(n));
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

let sp=Math.floor(Math.log(n));
output.innerText = "SPACE COMPLEXITY  :"+sp;

}