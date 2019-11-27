// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;
//
//     // Advanced Answer
//     if(document.querySelector('input[name="fruit"]:checked'))
//         return true;
//
//     alert("You must pick a fruit!")
//     return false;
//   }

$("#ch3form").submit(function(){
    var fruitcheck = false;
    var fruit = $('input[name="fruit"]');
    console.log(fruit);

    var standingcheck = false;
    var standing = $('input[name="standing"]');

    fruit.each(function() {
      if(this.checked) {
        console.log("A fruit was checked");
        fruitcheck= true;

      }
    });

    standing.each(function() {
      if(this.checked) {
        console.log("A standing was checked")
        standingcheck = true;
      }
    });

    if (fruitcheck && standingcheck)
      return true;
    else {
      if (!fruitcheck && !standingcheck) {
        alert("You must pick a standing and fruit")
      }
      else if (!standingcheck) {
        alert("You must pick a standing")
      }
      else {
        alert("You must pick a fruit")
      }
      return false;
    }
});
