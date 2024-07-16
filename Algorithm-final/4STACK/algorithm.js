//alert("test");
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
		if(li_value=="push"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="pop"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="push1"){
			document.querySelector("."+li_value).style.display="block";
		}
		else if(li_value=="pop1"){
			document.querySelector("."+li_value).style.display="block";
		}
		
		else{
			console.log("");
		}
	})