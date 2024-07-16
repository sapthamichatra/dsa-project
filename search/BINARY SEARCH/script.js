var container = document.getElementById("array");



// Asynchronous LinearSearch function
async function LinearSearch(delay = 2000) {
var blocks = document.querySelectorAll(".block");
var output = document.getElementById("text");

//Extracting the value entered by the user
var num = document.getElementById("fname").value;

//Changing the color of all the blocks to violet
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#bb1eff";
}

output.innerText = "";
var str="";
var flag = 0;
// binary Search Algorithm

let low=0;
let high=blocks.length-1;
let mid;
while(low <=high){
	//Changing the color of current block to red
	mid=Math.floor((low+high)/2);
	blocks[mid].style.backgroundColor = "#6b5b95";
	// To wait for .1 sec
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	//Extracting the value of current block
	var value = Number(blocks[mid].childNodes[0].innerHTML);

	// To compare block value with entered value
	if (value == num) {
	flag = 1;
//output.innerText = "Element Found";
	str=str+(mid+1);
	//output.innerText = "Element Found  AT  :"+(i+1);
	
	blocks[mid].style.backgroundColor ="#90021F";
	break;
	} else if(num>value){
	low=mid+1;
	// Changing the color to the previous one
	//blocks[mid].style.backgroundColor = "#EA3B52";
	}
	else
	{	
	high=mid-1;
	// Changing the color to the previous one
	//blocks[mid].style.backgroundColor = "#028AOF";
	}
}
//When element is not found in the array
if(flag==1)
{
output.innerText = "Element Found  At position "+str;
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
let a=Math.floor(Math.log(n));
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

let sp=n*2+10;
output.innerText = "SPACE COMPLEXITY  :"+sp;

}