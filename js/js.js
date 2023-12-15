let img = document.querySelector(`.img`);
function plans(plan){
    img.src = plan;
}
let imgs = document.querySelector(`.img1`);
function foods(food){
    imgs.src = food;
}
var nam = [];
document.getElementById("save").addEventListener("click", function() {
   var sname = document.getElementById("name").value;
   nam.push(sname);
   var newP = document.createElement("p");
   newP.textContent = sname;
   document.getElementById("names1").appendChild(newP);
   document.getElementById("name").value = "";
});
document.getElementById("dleet").addEventListener("click", function() {
   var sname = document.getElementById("name").value;
   nam.pop(sname);
   var namesContainer = document.getElementById("names1");
   namesContainer.removeChild(namesContainer.lastChild);
   document.getElementById("name").value = "";
});
