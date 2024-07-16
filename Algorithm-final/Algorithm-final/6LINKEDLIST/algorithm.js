//alert("test");
var li_elements=document.querySelectorAll(".topbar ul li");
var item_elements=document.querySelectorAll(".item");
	
	document.getElementById("singly1").style.display="block";
	document.getElementById("singly2").style.display="block";
	document.getElementById("singly3").style.display="block";
	document.getElementById("singly4").style.display="block";
	document.getElementById("singly5").style.display="block";
	document.getElementById("singly6").style.display="block";
	document.getElementById("singly7").style.display="none";
	document.getElementById("singly8").style.display="none";
	document.getElementById("singly9").style.display="none";
	document.getElementById("singly10").style.display="none";
	document.getElementById("singly11").style.display="none";
	document.getElementById("singly12").style.display="none";
for(var i=0;i<li_elements.length;i++)
	li_elements[i].addEventListener("click",function(){
		li_elements.forEach(function(li){
			li.classList.remove("active");
		})
		this.classList.add("active");
		var li_value=this.getAttribute("data-li");
		//alert(li_value);
		item_elements.forEach(function(item){
			item.style.display="none";
		})
		if(li_value=="array"){
			document.querySelector("."+li_value);	
		}
		else if(li_value=="linkedlist"){
			document.querySelector("."+li_value);
		}		
		else if(li_value=="circular"){
			document.querySelector("."+li_value);
		}
		else if(li_value=="circu"){
			document.querySelector("."+li_value);
		}
		 else{
			console.log("");
		} 
	})
	
	
	
	
var li_elements=document.querySelectorAll(".wrapper_left ul li");
var item_elements=document.querySelectorAll(".item");
for(var i=0;i<li_elements.length;i++)
	li_elements[i].addEventListener("click",function(){
		li_elements.forEach(function(li){
			li.classList.remove("active");
		})
		this.classList.add("active");
		var li_value=this.getAttribute("data-li");
		//alert(li_value);
		item_elements.forEach(function(item){
			item.style.display="none";
		})
		if(li_value=="singlybeg"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlyend"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlypos"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlydelbeg"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlydelend"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlydelpos"){
			document.querySelector("."+li_value).style.display="block";
		}
		if(li_value=="singlybeg1"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlyend1"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlypos1"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlydelbeg1"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlydelend1"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="singlydelpos1"){
			document.querySelector("."+li_value).style.display="block";
		}
		
		else{
			console.log("");
		}
	})

function singly()
{
	document.getElementById("singly1").style.display="block";
	document.getElementById("singly2").style.display="block";
	document.getElementById("singly3").style.display="block";
	document.getElementById("singly4").style.display="block";
	document.getElementById("singly5").style.display="block";
	document.getElementById("singly6").style.display="block";
	document.getElementById("singly7").style.display="none";
	document.getElementById("singly8").style.display="none";
	document.getElementById("singly9").style.display="none";
	document.getElementById("singly10").style.display="none";
	document.getElementById("singly11").style.display="none";
	document.getElementById("singly12").style.display="none";
}
function linked()
{
	document.getElementById("singly12").style.display="block";
	document.getElementById("singly11").style.display="block";
	document.getElementById("singly10").style.display="block";
	document.getElementById("singly9").style.display="block";
	document.getElementById("singly8").style.display="block";
	document.getElementById("singly7").style.display="block";
	document.getElementById("singly6").style.display="none";
	document.getElementById("singly5").style.display="none";
	document.getElementById("singly4").style.display="none";
	document.getElementById("singly3").style.display="none";
	document.getElementById("singly2").style.display="none";
	document.getElementById("singly1").style.display="none";
}
/*function circular()
{
	document.getElementById("singly1").style.display="block";
	document.getElementById("singly2").style.display="block";
	document.getElementById("singly3").style.display="none";
	document.getElementById("singly4").style.display="none";
	document.getElementById("singly5").style.display="none";
	document.getElementById("singly6").style.display="none";
} 
function circular1()
{
	document.getElementById("singly1").style.display="block";
	document.getElementById("singly2").style.display="block";
	document.getElementById("singly3").style.display="none";
	document.getElementById("singly4").style.display="none";
	document.getElementById("singly5").style.display="none";
	document.getElementById("singly6").style.display="none";
} */