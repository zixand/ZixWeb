 function op(){
 	
 	var cer = document.getElementById("cerchio");
 	var opa = 1;
 	var top=true;
 	var id = setInterval(frame, 10);
 	var n = 0;
 	
  function frame() {
    if (opa == 2) {
      clearInterval(id);
    } else {
    			  
  		if(!top){
  		
  		if(opa == 1){ top=true }
      opa += 0.005; 
      cer.style.opacity = opa; 
    }
    else{
    
    	if(opa==0){top=false}
    	opa -= 0.005;
    	cer.style.opacity = opa;
    	}
    	n++;
    }
  }
  }