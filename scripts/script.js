const API_URL = 'https://script.google.com/macros/s/AKfycbyuXtYKb50ZGfUpyhCKJcFnyNfCfust7Ush2tF5ksAISS2vflXRM9nFMkSbS1rNJccF/exec'
let rollNumber = '';
const rollNumberView = document.getElementsByClassName('rollNumberView')[0];
const resultView = document.getElementsByClassName('resultview')[0];
const result = document.getElementById('result')
const dummy_data = {
  "data": [
      {
          "RollNumber": 2001380100007,
          "Name": "Shraddha",
          "Branch": "CSE",
          "Year": 3,
          "currentCT": "CT-1",
          "marks": [
              16,
              20,
              24,
              26,
              30,
              15
          ],
          "subjects": "[\"Database Management System\",\"Compiler Design\",\"Design & Analysis of Algorithms\", \"Web Design\",\"Machine Learning Techniques\",\"Constitution of India\"]"
              }
  ]
}
const loader = `
<div class="spinner"><div class="line"></div>
<div class="line"></div>
<div class="line"></div>
</div>`
function rollNumberValidate() {
  var rollno = document.getElementById("rn")
  var rollNumberTwelveDigit = /^\d{13}$/;
  if (rollno.value != '') {
      if (rollno.value.match(rollNumberTwelveDigit)) {
          rollNumber = rollno.value;
          rollno.value = ""
          return false
      }
    
      else {
          alert("Enter valid Roll Number");
          return false;
      }
  }
}

const handleClick = (e) => {
  rollNumberValidate()
  fetchResult()
  rollNumberView.classList.toggle('hide')
  resultView.classList.toggle('hide')
}


const fetchResult = () => {
  result.innerHTML = loader
  try {
  fetch(`https://script.google.com/macros/s/AKfycbyuXtYKb50ZGfUpyhCKJcFnyNfCfust7Ush2tF5ksAISS2vflXRM9nFMkSbS1rNJccF/exec?rn=${rollNumber}`)
  .then((response) => response.json())
  .then((data) => {
    let subjects_data = JSON.parse(data.data[0].subjects)

  let content = ` <span style="text-align:center"> <b>${data.data[0].currentCT}</b></span>
  <hr>
  <br>
  <div>
  <span> <b>Name</b>:${data.data[0].Name}</span>
  <br>
  <span> <b> Branch: </b>${data.data[0].Branch}</span>
  <br>
  <span> <b> Roll Number: </b>${data.data[0].RollNumber}</span>
  <br>
  <span> <b> Year: </b>${data.data[0].Year}</span>
  <button class="btn btn-primary" onclick="window.location.reload()">Check Another</button>
  <button onclick="window.print()" class="btn btn-primary">Print</button>
  </div>
  <br>
  <br>
   <table>
 <tr> 
    <th> <b> Marks </b></th>
    <th> <b> Subject </b></th>
    </tr>
    ${subjects_data.map((subject, index) => {
      return `
      <tr>
        <td> <b> ${subject}: </b></td>
        <td>${data.data[0].marks[index]}</td>
      </tr>`
    }    
    ).join('')}
    </table>`
    result.innerHTML = content
  });
      
} catch (error) {
 console.log(error)
 result.innerHTML= `<span>error</span>`   
}
//   let subjects_data = JSON.parse(dummy_data.data[0].subjects)

//   let content = ` <span style="text-align:center"> <b>${dummy_data.data[0].currentCT}</b></span>
//   <hr>
//   <br>
//   <div>
//   <span> <b>Name</b>:${dummy_data.data[0].Name}</span>
//   <br>
//   <span> <b> Branch: </b>${dummy_data.data[0].Branch}</span>
//   <br>
//   <span> <b> Roll Number: </b>${dummy_data.data[0].RollNumber}</span>
//   <br>
//   <span> <b> Year: </b>${dummy_data.data[0].Year}</span>
//   </div>
//   <br>
//   <br>
//    <table>
//  <tr> 
//     <th> <b> Marks </b></th>
//     <th> <b> Subject </b></th>
//     </tr>
//     ${subjects_data.map((subject, index) => {
//       return `
//       <tr>
//         <td> <b> ${subject}: </b></td>
//         <td>${dummy_data.data[0].marks[index]}</td>
//       </tr>`
//     }    
//     ).join('')}
//     </table>`
//     result.innerHTML += content

}





