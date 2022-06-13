function start() {
  
  let userInput1 = Number(document.querySelector("#userinput1").value);
  let userInput2 = Number(document.querySelector("#userinput2").value);
  console.log(userInput1, userInput2);
  if (userInput1 != userInput2){
    alert("please enter both input same")
  }else{
    let matix1 = document.querySelector("#box1");
  let matix2 = document.querySelector("#box2");
  for (let i = 0; i < userInput1; i++) {
    for (let j = 0; j < userInput2; j++) {
      matix1.innerHTML += `<input type="number"value="0" required min="0" max="20" id="matirx1_${i}${j}" ;style="width:30px;" placeholder="0" >`;
    }
    matix1.innerHTML += `<br>`;
  }
  for (let i = 0; i < userInput1; i++) {
    for (let j = 0; j < userInput2; j++) {
      matix2.innerHTML += `<input type="number" value="0" required min="0" max="20" id="matirx2_${i}${j}" ;style="width:30px;" placeholder="0" >`;
    }
    matix2.innerHTML += `<br>`;
  }
  }
  start = function(){}
  
  // let matix1 = document.querySelector("#box1");
  // let matix2 = document.querySelector("#box2");
  // for (let i = 0; i < userInput1; i++) {
  //   for (let j = 0; j < userInput2; j++) {
  //     matix1.innerHTML += `<input type="number"value="0" required min="0" max="20" id="matirx1_${i}${j}" ;style="width:30px;" placeholder="0" >`;
  //   }
  //   matix1.innerHTML += `<br>`;
  // }

  // for (let i = 0; i < userInput1; i++) {
  //   for (let j = 0; j < userInput2; j++) {
  //     matix2.innerHTML += `<input type="number" value="0" required min="0" max="20" id="matirx2_${i}${j}" ;style="width:30px;" placeholder="0" >`;
  //   }
  //   matix2.innerHTML += `<br>`;
  // }


}


function sum() {

  let userInput1 = Number(document.querySelector("#userinput1").value);
  let userInput2 = Number(document.querySelector("#userinput2").value);
  let result = document.querySelector("#box3");
  // for (let i = 0; i < userInput1; i++) {
  //     for (let j = 0; j < userInput2; j++) {
  //       let res = Number(document.querySelector(`#matirx1_${i}${j}`).value);
  //       console.log(res)
  //     }
  //   }
  //   for (let i = 0; i < userInput1; i++) {
  //     for (let j = 0; j < userInput2; j++) {
  //       let res1 = Number(document.querySelector(`#matirx2_${i}${j}`).value);
  //       console.log(res1)
  //     }
  //   }
  for (let i = 0; i < userInput1; i++) {
    for (let j = 0; j < userInput2; j++) {
      result.innerHTML += `<input type="number" required min="0" id="result_${i}${j}" max="20" style="width: 45px;" placeholder="0" disabled>`
    }
    result.innerHTML += `<br>`
  }
  for (let i = 0; i < userInput1; i++) {
    for (let j = 0; j < userInput2; j++) {
      let res = Number(document.querySelector(`#matirx1_${i}${j}`).value);
      //   console.log(res)
      let res1 = Number(document.querySelector(`#matirx2_${i}${j}`).value);
      //   console.log(res1)
      let val = res + res1;
      console.log(val)
      document.getElementById(`result_${i}${j}`).value = res + res1
    }
  }
  // for (let i = 0; i < userInput1; i++){
  //     for (let j = 0; j < userInput2; j++){
  //         document.getElementById(`result_${i}${j}`).innerHTML+= 
  //     }
  // }
}



