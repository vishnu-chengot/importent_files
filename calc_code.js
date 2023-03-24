let lastvalue = ''
// function calclick(val) {
//   const text = document.querySelector(".input");
//   const lastChar = lastvalue.slice(-1);
//   lastvalue += val;
//   if (isNaN(val)) {


//     if (isNaN(lastChar)) {
//       console.log("Invalid input: operator cannot follow another operator.");
//       return false;
//     }
//     else {
//       text.innerHTML += val;
//     }
//   }
//   else {
//     text.innerHTML += val;
//   }

// }
function calclick(val) {
  const text = document.querySelector(".input");
  const lastChar = lastvalue.slice(-1);
  if (isNaN(val)) {
    if (isNaN(lastChar)) {
      console.log("Invalid input: operator cannot follow another operator.");
      text.innerHTML = text.innerHTML.slice(0, -1) + val;
      lastvalue = lastvalue.slice(0, -1) + val;
      return false;
    } else {
      lastvalue += val;
      text.innerHTML += val;
    }
  } else {
    lastvalue += val;
    text.innerHTML += val;
  }
}
function clearScreen() {
  var output = document.querySelector(".input")
  var in_put = document.querySelector(".output")
  output.innerHTML = ""
  in_put.innerHTML = "0"
  output.style.animation = ""
  in_put.style.animation = ""
}
function backSpace() {
  text = document.querySelector(".input")
  text.innerHTML = text.innerHTML.slice(0, -1)
}
function btnEqual() {

  const text = document.querySelector(".input").innerHTML;
  const operands = text.match(/[+\-×÷%]?([0-9.]+)/g);
  let result = parseFloat(operands[0]);
  for (let i = 1; i < operands.length; i++) {
    const operator = operands[i][0];
    const operand = parseFloat(operands[i].slice(1));
    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '×':
        result *= operand;
        break;
      case '÷':
        result /= operand;
        break;
      case '%':
        console.log()
        result +=(operand /100);
        break;

    }
  }
  document.querySelector(".output").innerHTML = "= " + result;
  let output = document.querySelector(".output")
  let in_put = document.querySelector(".input")
  output.style.animation = "big 0.5s ease-in-out"
  in_put.style.animation = "small 0.5s ease-in-out"
  output.style.animationFillMode = "forwards"
  in_put.style.animationFillMode = "forwards"

}

function btnBracket() {
  const text = document.querySelector(".input").innerHTML;
  const lastChar = lastvalue.slice(-1);

  if (!isNaN(lastChar)) {
    if (isOpeningBracket) {
      document.querySelector(".input").innerHTML += "(";
      lastvalue += "(";
      isOpeningBracket = false;
    } else {
      document.querySelector(".input").innerHTML += ")";
      lastvalue += ")";
      isOpeningBracket = true;
    }
  }
}
limit = document.querySelectorAll("button")
for (let i = 0; i < limit.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelectorAll("button")[i].classList.add("press")
    setTimeout(function () {
      document.querySelectorAll("button")[i].classList.remove("press")
    }, 200)
  })

}

