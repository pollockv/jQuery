// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}

$(document).ready(function(){
			 window.alert("My function is being called");
		});

$("#useBilling").click(function(){
		var address = $( "#billing" ).val();
		if (this.checked){
			window.alert( address );
			$("#home").text(address);
			$("#home").prop("disabled", true);
		}
		else {
			window.alert(address);
			$("#home").text("");
			$("#home").prop("disabled", false);
		}
});
