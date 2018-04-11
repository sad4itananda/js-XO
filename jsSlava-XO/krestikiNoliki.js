var player=2;
function checkWinner() { 
	if (player==2) {
		var y ="O";
		switch(y) {
			case  ((document.getElementById("a1").innerHTML == document.getElementById("a2").innerHTML)	&&
				(document.getElementById("a1").innerHTML == document.getElementById("a3").innerHTML) &&
				(document.getElementById("a1").innerHTML == "O") && "O") :
			alert("нолики победили");
			break; 
			case  ((document.getElementById("b1").innerHTML == document.getElementById("b2").innerHTML)	&&    
				(document.getElementById("b1").innerHTML == document.getElementById("b3").innerHTML) &&
				(document.getElementById("b1").innerHTML == "O") && "O") :
			alert("нолики победили");
			break; 
			case  ((document.getElementById("c1").innerHTML == document.getElementById("c2").innerHTML)	&&    
				(document.getElementById("c1").innerHTML == document.getElementById("c3").innerHTML) &&
				(document.getElementById("c1").innerHTML == "O") && "O") :
			alert("нолики победили");
			break; 
			case  ((document.getElementById("a1").innerHTML == document.getElementById("b1").innerHTML)	&&    
				(document.getElementById("b1").innerHTML == document.getElementById("c1").innerHTML) &&
				(document.getElementById("c1").innerHTML == "O") && "O") :
			alert("нолики победили");
			break; 
			case  ((document.getElementById("a2").innerHTML == document.getElementById("b2").innerHTML)	&&    
				(document.getElementById("b2").innerHTML == document.getElementById("c2").innerHTML) &&
				(document.getElementById("c2").innerHTML == "O") && "O") :
			alert("нолики победили");
			break;
			case  ((document.getElementById("a3").innerHTML == document.getElementById("b3").innerHTML)	&&    
				(document.getElementById("b3").innerHTML == document.getElementById("c3").innerHTML) &&
				(document.getElementById("c3").innerHTML == "O") && "O") :
			alert("нолики победили");
			break;
			case  ((document.getElementById("a1").innerHTML == document.getElementById("b2").innerHTML)	&&    
				(document.getElementById("b2").innerHTML == document.getElementById("c3").innerHTML) &&
				(document.getElementById("c3").innerHTML == "O") && "O") :
			alert("нолики победили");
			break;
			case  ((document.getElementById("c1").innerHTML == document.getElementById("b2").innerHTML)	&&    
				(document.getElementById("b2").innerHTML == document.getElementById("a3").innerHTML) &&
				(document.getElementById("a3").innerHTML == "O") && "O") :
			alert("нолики победили");
			break;
			case  (( document.getElementById("c1").innerHTML && document.getElementById("c2").innerHTML &&    
				   document.getElementById("c3").innerHTML && document.getElementById("a1").innerHTML &&
				   document.getElementById("a2").innerHTML && document.getElementById("a3").innerHTML &&  
				   document.getElementById("b1").innerHTML && document.getElementById("b2").innerHTML && 
				   document.getElementById("b3").innerHTML  )&& "O") :
			alert("Ска, победила дружба!");
			break;
		}
	}
	else{
		var x ="X";
		switch(x) {
			case  ((document.getElementById("a1").innerHTML == document.getElementById("a2").innerHTML)	&&
				(document.getElementById("a1").innerHTML == document.getElementById("a3").innerHTML) &&
				(document.getElementById("a1").innerHTML == "X") && "X") :
			alert("крестики победили");
			break; 
			case  ((document.getElementById("b1").innerHTML == document.getElementById("b2").innerHTML)	&&    
				(document.getElementById("b1").innerHTML == document.getElementById("b3").innerHTML) &&
				(document.getElementById("b1").innerHTML == "X") && "X") :
			alert("крестики победили");
			break; 
			case  ((document.getElementById("c1").innerHTML == document.getElementById("c2").innerHTML)	&&    
				(document.getElementById("c1").innerHTML == document.getElementById("c3").innerHTML) &&
				(document.getElementById("c1").innerHTML == "X") && "X") :
			alert("крестики победили");
			break; 
			case  ((document.getElementById("a1").innerHTML == document.getElementById("b1").innerHTML)	&&    
				(document.getElementById("b1").innerHTML == document.getElementById("c1").innerHTML) &&
				(document.getElementById("c1").innerHTML == "X") && "X") :
			alert("крестики победили");
			break; 
			case  ((document.getElementById("a2").innerHTML == document.getElementById("b2").innerHTML)	&&    
				(document.getElementById("b2").innerHTML == document.getElementById("c2").innerHTML) &&
				(document.getElementById("c2").innerHTML == "X") && "X") :
			alert("крестики победили");
			break;
			case  ((document.getElementById("a3").innerHTML == document.getElementById("b3").innerHTML)	&&    
				(document.getElementById("b3").innerHTML == document.getElementById("c3").innerHTML) &&
				(document.getElementById("c3").innerHTML == "X") && "X") :
			alert("крестики победили");
			break;
			case  ((document.getElementById("a1").innerHTML == document.getElementById("b2").innerHTML)	&&    
				(document.getElementById("b2").innerHTML == document.getElementById("c3").innerHTML) &&
				(document.getElementById("c3").innerHTML == "X") && "X") :
			alert("крестики победили");
			break;
			case  ((document.getElementById("c1").innerHTML == document.getElementById("b2").innerHTML)	&&    
				(document.getElementById("b2").innerHTML == document.getElementById("a3").innerHTML) &&
				(document.getElementById("a3").innerHTML == "X") && "X") :
			alert("крестики победили");
			break;
			case  (( document.getElementById("c1").innerHTML && document.getElementById("c2").innerHTML &&    
				   document.getElementById("c3").innerHTML && document.getElementById("a1").innerHTML &&
				   document.getElementById("a2").innerHTML && document.getElementById("a3").innerHTML &&  
				   document.getElementById("b1").innerHTML && document.getElementById("b2").innerHTML && 
				   document.getElementById("b3").innerHTML  )&& "X") :
			alert("Победила,ска, дружба!");
			break;
		}
	}	
};	
function cklickHandler() {
	document.getElementById("message").innerHTML="ходит игрок №"+ player;
	if ( player==1){
		this.innerHTML="X"; 
		checkWinner(); 
		player=2;
	} 
	else {
		this.innerHTML="O";
		checkWinner(); 
		player=1;
	}
	this.onclick=null; 
};
a1.onclick=cklickHandler;
a2.onclick=cklickHandler;
a3.onclick=cklickHandler;
b1.onclick=cklickHandler;
b2.onclick=cklickHandler;
b3.onclick=cklickHandler;
c1.onclick=cklickHandler;
c2.onclick=cklickHandler;
c3.onclick=cklickHandler;



	



