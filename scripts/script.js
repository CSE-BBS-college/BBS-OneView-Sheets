function AadharValidate() {
  var aadhar = document.getElementById("addhar").value;
  var adharcardTwelveDigit = /^\d{12}$/;
  var adharSixteenDigit = /^\d{16}$/;
  if (aadhar != '') {
      if (aadhar.match(adharcardTwelveDigit)) {
          return true;
      }
      else if (aadhar.match(adharSixteenDigit)) {
          return true;
      }
      else {
          alert("Enter valid Aadhar Number");
          return false;
      }
  }
}

let addr_check = document.getElementById("diff-address");
let addr_block = document.getElementById("res-addr");
let number_block = document.getElementById("phone-number");
let number_check = document.getElementById("diff-number");
let whatsapp_block = document.getElementById("whatsapp-number");

function enableResAddr(){
if(addr_check.checked) {
  addr_block.classList.add("hide")
}
else{
  addr_block.classList.remove("hide")
}
}
function enableWaNumber(){
if(number_check.checked) {
  console.log(number_block.value)
  if (number_block.value != "") {
    whatsapp_block.value = number_block.value
  }
  else{
    alert("Please enter a phone number!")
  }
}
else{
  whatsapp_block.value = ""  
}
}
/* ---- particles.js config ---- */
Splitting()
ScrollOut({
targets: '.word',
scrollingElement: '.container',
})



