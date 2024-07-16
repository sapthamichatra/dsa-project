let a = [];

    // creating two dimensional array
    for (let i = 1; i<= 5; i++) {
        for(let j = 1; j<= 5; j++) {
            a[i] = [];
        }
    }
let q=[];
let visited=[];
let n;
let f=0;
let r=-1;
let count=0;
let e;
for(var i=1;i<=5;i++){
		document.getElementById('p'+i).style.visibility="Hidden";
		document.getElementById('v'+i).style.visibility="Hidden";
		document.getElementById('c'+i).style.visibility="Hidden";
		
		for (var j=1;j<=5;j++){
			document.getElementById('a'+i+j).style.visibility="Hidden";
			
		}
}
	

function reset(){
  for(var i=1; i<=5; i++){
    for(var j=1; j<=5; j++){
      document.getElementById('a'+i+j).value = '';
     
    }
    document.getElementById('p'+i).value = '';
  }
  
  document.getElementById('resourceA').value = '';
  document.getElementById('resourceB').value = '';
  
  document.body.style.backgroundColor = "#ffffff";
}

function example1(){
  sam = [[0,1,0,1,1],
        [0,0,1,1,1],
        [1,0,0,1,1],
        [1,0,0,0,1],
        [1,0,1,0,0]];


  for(var i=1; i<=5; i++){
	  document.getElementById('p'+i).style.visibility="visible";
	  document.getElementById('v'+i).style.visibility="visible";
		document.getElementById('c'+i).style.visibility="visible";
    for(var j=1; j<=5; j++){
      document.getElementById('a'+i+j).value = sam[i-1][j-1];
		let a11=document.getElementById('a'+i+j);
			a11.style.visibility="visible";
    }
	document.getElementById('resourceA').value=5;
	document.getElementById('resourceA').disabled=true;
  }
  
}

function example2(){
  sam = [[1,0,0,1,0],
        [0,0,0,0,0],
        [0,1,0,0,0],
        [0,0,0,0,1],
        [0,0,0,0,0]];


  for(var i=1; i<=5; i++){
	  document.getElementById('p'+i).style.visibility="visible";
	  document.getElementById('v'+i).style.visibility="visible";
		document.getElementById('c'+i).style.visibility="visible";
    for(var j=1; j<=5; j++){
      document.getElementById('a'+i+j).value = sam[i-1][j-1];
		let a11=document.getElementById('a'+i+j);
			a11.style.visibility="visible";
			
		}
    }
	document.getElementById('resourceA').value=5;
	document.getElementById('resourceA').disabled=true;
	
  }
  

function create_graph(){
	n =  parseInt(document.getElementById('resourceA').value);
	for(var i=1;i<=n;i++){
		document.getElementById('p'+i).style.visibility="visible";
		document.getElementById('v'+i).style.visibility="visible";
		document.getElementById('c'+i).style.visibility="visible";
		for(var j=1;j<=n;j++){
			let a11=document.getElementById('a'+i+j);
			a11.style.visibility="visible";
		}
	}
}
function run_algo(){
n =  parseInt(document.getElementById('resourceA').value);
let v =  parseInt(document.getElementById('resourceB').value);
 e=0;
  for(var i=1; i<=n; i++){
	  for(var j=1;j<=n;j++){
		  {
			var x11 = parseInt(document.getElementById('a'+i+j).value);
    
			a[i][j]=x11;
		  }
			q[i]=0;
			visited[i]=0;
		  
	  }
}


 for(var i=1; i<=n; i++)
{
for(var j=1; j<=n; j++)
{
	if(a[i][j]==1)
	{
	e++;
	}
}
}

bfs(v);
for(var i=1; i<=n; i++)
{

	if(visited[i])
	{
	document.getElementById('p'+i).value = 1;
	count++;

	}
	else
	{
	document.getElementById('p'+i).value = 0;
	}
}
	if(count!=n)
	{

	alert("NOT VISITED ALL THE VERTEX");
	}


}

function bfs(v)
{
	for(var i=1; i<=n; i++)
	if(a[v][i] && !visited[i])
	q[++r]=i;
	if(f<=r)
	{
	visited[q[f]]=1;
	bfs(q[f++]);
	}

}
function TimeComplexity()
{
 
  var output1 = document.getElementById("text1");

 var output2 = document.getElementById("text2");
 var output3 = document.getElementById("text3");
  
let b=n+e;
let a=n+e;
let w=n+e;
output1.innerText = "BEST CASE :"+b;
output2.innerText = "AWERAGE CASE :"+a;
output3.innerText = "WORST CASE :"+w;
}

function SpaceComplexity()
{

  var output = document.getElementById("text4");
let sp=(n*n*2)+4;
output.innerText = "SPACE COMPLEXITY  :"+sp;

}

  