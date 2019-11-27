// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}

  	// Advanced Option....
//   	x.style.display == "block" ?
//		x.style.display = "none" :
// 		x.style.display = "block";

	$(document).ready(function(){
				 window.alert("My function is being called");
			});

	$("#subscribe").click(function(){
		var x = $("#emailField");
		if (this.checked){
			console.log("selected");
			x.css("display", "block")
		}
		else {
			console.log("Not selected");
			x.css("display", "none")
		}
	});
