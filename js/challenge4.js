$("#ch4form").submit(function() {
    var validInput = false;
    var name = $("#fullname").val();
    var address = $("#streetaddr").val();
    console.log(name);
    console.log(address);
    if (name.length == 0){
        $("#nameerrormsg").css("display", "block");
    }
    else {
        $("#nameerrormsg").css("display", "none");
    }

    if (address.length == 0){
        $("#addrerrormsg").css("display", "block");
    }
    else {
        $("#addrerrormsg").css("display", "none");
    }

    if (name && address)
      return true;
    else {
      return false;
    }
  
});
