 function op(){
 	
 	var cer = document.getElementById("cerchio");
 	var opa = 0;
 	var id = setInterval(frame, 5);
  function frame() {
    if (opa == 1) {
      clearInterval(id);
    } else {
      opa += 0.01; 
      cer.style.opacity = opa; 
    }
  }
 	
 }