var container = document.getElementById("array");



// Asynchronous LinearSearch function
async function LinearSearch(delay = 500) {
var blocks = document.querySelectorAll(".block");
var output = document.getElementById("text");

//Extracting the value entered by the user
var num = document.getElementById("fname").value;

//Changing the color of all the blocks to violet
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#6b5b95";
}

output.innerText = "";
var str="";
var flag = 0;
// LinearSearch Algorithm
for (var i = 0; i < blocks.length; i += 1) {
	//Changing the color of current block to red
	blocks[i].style.backgroundColor = "#FF4949";

	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	//Extracting the value of current block
	var value = Number(blocks[i].childNodes[0].innerHTML);

	// To compare block value with entered value
	if (value == num) {
	flag = 1;
//output.innerText = "Element Found";
	str=str+(i+1)+ "   ";
	//output.innerText = "Element Found  AT  :"+(i+1);
	blocks[i].style.backgroundColor = "#13CE66";
	if(i==blocks.length-1)
	{

	blocks[i].remove();
	}
	
	let j;
	for( j=i;j<blocks.length-1;j++)
	{
	var temp1 = blocks[j+1].style.height;
	var temp2 = blocks[j+1].childNodes[0].innerText;
	blocks[j].style.height=0;
	blocks[j].childNodes[0].innerText="";

	 blocks[j].style.height=temp1;
	blocks[j].childNodes[0].innerText=temp2;
await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);
	}
	blocks[j].remove();
	
	
	break;
	} else {
	// Changing the color to the previous one
	blocks[i].style.backgroundColor = "#6b5b95";
	}
}
//When element is not found in the array
if(flag==1)
{
output.innerText = "Element Found  And Delete At  "+str;
}
else
 {
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
function Reset()
{
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

let b=n;
let a=n*n;
let w=n*n;
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

let sp=n*2+4;
output.innerText = "SPACE COMPLEXITY  :"+sp;

}