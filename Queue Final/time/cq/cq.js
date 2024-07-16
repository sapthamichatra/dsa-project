//variable Declaration
const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const massage = document.querySelector(".massage");
const massageBox = document.querySelector(".massage-box");
const box = document.querySelectorAll(".box");
var output1 = document.getElementById("text1");
var output2 = document.getElementById("text2");
var output3 = document.getElementById("text3");
var output4 = document.getElementById("text4");
const stack = [];
let front=-1;
let rear=-1;

//for disable all buttons
const buttonDisable = () => {
	push.disabled = true;
	push.classList.add("disable-button");
	pop.disabled = true;
	pop.classList.add("disable-button");
	reset.disabled = true;
	reset.classList.add("disable-button");
	input.disabled = true;
	
};

//for enable all buttons
const buttonEnable = () => {
	push.disabled = false;
	push.classList.remove("disable-button");
	pop.disabled = false;
	pop.classList.remove("disable-button");
	reset.disabled = false;
	reset.classList.remove("disable-button");
	input.disabled = false;
};

//When the push button will be clicked
push.addEventListener("click", () => {
	//if input box is empty
	if (input.value == "") {
		massage.innerHTML = "Please Enter a value.";
		massageBox.classList.add("error-massage");
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1200);
		return;
	}
	
	//if the stack is full
	if (front==(rear+1)%5) {
		input.value = "";
		massage.innerHTML = "Queue Overflow";
		massageBox.classList.add("error-massage");
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1200);
		return;
	}
	rear=(rear+1)%5;
	if(front==-1){
		front=0;
	}
	const itemValue = input.value; //for store the input value
	stack.push(itemValue); //push the value into the stack

	//creating a new element
	if(rear==0){
		
			
	const element = document.createElement("div");
	element.classList.add("ele");
	element.innerText = stack[stack.length - 1];
	bucket.appendChild(element);

	//update the top
	box[0].innerHTML = stack[stack.length-1];

	//clear the input box
	input.value = "";

	//adding the animation for a new pushed element
	element.classList.add("ele-add");

	//disable all buttons
	buttonDisable();
	
	

	//after pushing the element
	setTimeout(() => {
		//remove the animation
		element.classList.remove("ele-add");

		//update the Last Pushed Item Value
		box[1].innerHTML = itemValue;

		//Display the massage
		massage.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;

		//Enable all buttons
		buttonEnable();
	}, 1500);
	}
	if(rear==1){
		
			
	const element = document.createElement("div");
	element.classList.add("ele1");
	element.innerText = stack[stack.length - 1];
	bucket.appendChild(element);

	//update the top
	box[0].innerHTML = stack[stack.length-1];

	//clear the input box
	input.value = "";

	//adding the animation for a new pushed element
	element.classList.add("ele1-add");

	//disable all buttons
	buttonDisable();
	
	

	//after pushing the element
	setTimeout(() => {
		//remove the animation
		element.classList.remove("ele1-add");

		//update the Last Pushed Item Value
		box[1].innerHTML = itemValue;

		//Display the massage
		massage.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;

		//Enable all buttons
		buttonEnable();
	}, 1500);
	}
	if(rear==2){
		
			
	const element = document.createElement("div");
	element.classList.add("ele2");
	element.innerText = stack[stack.length - 1];
	bucket.appendChild(element);

	//update the top
	box[0].innerHTML = stack[stack.length-1];

	//clear the input box
	input.value = "";

	//adding the animation for a new pushed element
	element.classList.add("ele2-add");

	//disable all buttons
	buttonDisable();
	
	

	//after pushing the element
	setTimeout(() => {
		//remove the animation
		element.classList.remove("ele2-add");

		//update the Last Pushed Item Value
		box[1].innerHTML = itemValue;

		//Display the massage
		massage.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;

		//Enable all buttons
		buttonEnable();
	}, 1500);
	}
	if(rear==3){
		
			
	const element = document.createElement("div");
	element.classList.add("ele3");
	element.innerText = stack[stack.length - 1];
	bucket.appendChild(element);

	//update the top
	box[0].innerHTML = stack[stack.length-1];

	//clear the input box
	input.value = "";

	//adding the animation for a new pushed element
	element.classList.add("ele3-add");

	//disable all buttons
	buttonDisable();
	
	

	//after pushing the element
	setTimeout(() => {
		//remove the animation
		element.classList.remove("ele3-add");

		//update the Last Pushed Item Value
		box[1].innerHTML = itemValue;

		//Display the massage
		massage.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;

		//Enable all buttons
		buttonEnable();
	}, 1500);
	}
	if(rear==4){
		
			
	const element = document.createElement("div");
	element.classList.add("ele4");
	element.innerText = stack[stack.length - 1];
	bucket.appendChild(element);

	//update the top
	box[0].innerHTML = stack[stack.length-1];

	//clear the input box
	input.value = "";

	//adding the animation for a new pushed element
	element.classList.add("ele4-add");

	//disable all buttons
	buttonDisable();
	
	

	//after pushing the element
	setTimeout(() => {
		//remove the animation
		element.classList.remove("ele4-add");

		//update the Last Pushed Item Value
		box[1].innerHTML = itemValue;

		//Display the massage
		massage.innerHTML = `Item ${stack[stack.length - 1]} is Pushed.`;

		//Enable all buttons
		buttonEnable();
	}, 1500);
	}
});

//When the pop button will be clicked
pop.addEventListener("click", () => {
	//if Stack is Empty
	if (front == -1) {
		massageBox.classList.add("error-massage");
		massage.innerHTML = "Queue Underflow";
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1200);
		return;
	}
	if(front==rear){
		front=-1;
		rear=-1;
	}
	else{
		front=(front+1)%5;
	}
		
	//adding the popping animation
	bucket.firstElementChild.classList.add("ele-remove");

	//disable all buttons
	buttonDisable();

	//start popping the element
	setTimeout(() => {
		//delete the element from the bucket
		bucket.removeChild(bucket.firstElementChild);
		
		//Storing the popped value
		const itemValue = stack.shift();
		
		//updating the last popped item
		box[2].innerHTML = itemValue;

		//updating the Top
		if (stack.length == 0) {
			box[0].innerHTML = "";
		} else {
			box[0].innerHTML = stack[stack.length - 1];
		}

		//adding the massage
		massage.innerHTML = `Item ${itemValue} is Popped.`;

		//Enable all buttons
		buttonEnable();
	}, 1500);
});

//When the reset button will be clicked
reset.addEventListener("click", () => {
	window.location.reload();
});
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
function draw()
	{
		var canvas=document.getElementById("tutorial");
		var c1=canvas.getContext("2d");
		c1.strokeStyle="red";
		c1.lineWidth=5;
		c1.arc(225,225,100,0,2*Math.PI);
	}