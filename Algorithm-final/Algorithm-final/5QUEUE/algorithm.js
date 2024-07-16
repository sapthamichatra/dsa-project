//alert("test");
var li_elements=document.querySelectorAll(".topbar ul li");
var item_elements=document.querySelectorAll(".item");
	document.getElementById("array1").style.display="block";
	document.getElementById("array2").style.display="block";
	document.getElementById("linked1").style.display="none";
	document.getElementById("linked2").style.display="none";
	document.getElementById("circular1").style.display="none";
	document.getElementById("circular2").style.display="none";
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
		
		/* else{
			console.log("");
		} */
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
		if(li_value=="arrayin"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="arraydel"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="listin"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="listdel"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="circularin"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="circulardel"){
			document.querySelector("."+li_value).style.display="block";
		}
		
		else{
			console.log("");
		}
	})

function array()
{
	document.getElementById("array1").style.display="block";
	document.getElementById("array2").style.display="block";
	document.getElementById("linked1").style.display="none";
	document.getElementById("linked2").style.display="none";
	document.getElementById("circular1").style.display="none";
	document.getElementById("circular2").style.display="none";
}
function linked()
{
	document.getElementById("linked1").style.display="block";
	document.getElementById("linked2").style.display="block";
	document.getElementById("array1").style.display="none";
	document.getElementById("array2").style.display="none";
	document.getElementById("circular1").style.display="none";
	document.getElementById("circular2").style.display="none";
}
function circular()
{
	document.getElementById("linked1").style.display="none";
	document.getElementById("linked2").style.display="none";
	document.getElementById("array1").style.display="none";
	document.getElementById("array2").style.display="none";
	document.getElementById("circular1").style.display="block";
	document.getElementById("circular2").style.display="block";
}