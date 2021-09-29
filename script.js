var size1=parseInt( document.getElementById("hero-1-score").textContent);

var size2=parseInt( document.getElementById("hero-2-score").textContent);

var size3=parseInt( document.getElementById("hero-3-score").textContent);

var size4=parseInt( document.getElementById("hero-4-score").textContent);


document.getElementById("hero-1-score").innerHTML = "<p style='font-size : "+size1*2+"px ;'>"+size1+"</p>"
document.getElementById("hero-2-score").innerHTML = "<p style='font-size : "+size2*2+"px ;'>"+size2+"</p>"
document.getElementById("hero-3-score").innerHTML = "<p style='font-size : "+size3*2+"px ;'>"+size3+"</p>"
document.getElementById("hero-4-score").innerHTML = "<p style='font-size : "+size4*2+"px ;'>"+size4+"</p>"