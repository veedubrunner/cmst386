function getSSN(){
  var citizen = document.getElementById("USyes");
  var social = document.getElementById("SSN");
    if(citizen.checked){
    social.disabled = false;
    social.required = true;
                        }
    else{
    social.disabled = true;
    social.required = false;
        }
                }

function addReceipt(){
  var recValue = document.getElementById("Receiptin");
  var recDisplay = document.getElementById("RecBox");


}
function chipcounter(){

}
