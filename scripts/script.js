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

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1200
      }
    },
    "color": {
      "random": true,
      // "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


