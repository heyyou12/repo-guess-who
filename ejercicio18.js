let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let cont = 0;

const fn1 = () => {
  
  if (cont < 6) {
    cont++;
    let nombre = prompt("ingresa el nombre y apellido de esta persona");
    let nombre1 = nombre.toLowerCase();
    if (nombre1 === "cristhian atehortua") {
      alert("Perfecto adivinaste a la persona");
    } else {
      alert("Lo siento estas equivocado intenta de nuevo");
    }
  } else {
    
  }
};

btn1.onclick = function () {
  fn1();
};

const fn2 = () => {
  if (cont < 6) {
    cont++;
    let nombre = prompt("ingresa el nombre y apellido de esta persona");
  let nombre1 = nombre.toLowerCase();
  if (nombre1 === "jaime castro") {
    alert("Perfecto adivinaste a la persona");
  } else {
    alert("Lo siento estas equivocado intenta de nuevo");
  }
  } else {
    alert("lo siento, has agotado todos tus intentos");
  }
  
};

btn2.onclick = function () {
  fn2();
};

const fn3 = () => {
  if (cont<6) {
    cont++;
    let nombre = prompt("ingresa el nombre y apellido de esta persona");
    let nombre1 = nombre.toLowerCase();
    if (nombre1 === "daniela apraez") {
      alert("Perfecto adivinaste a la persona");
    } else {
      alert("Lo siento estas equivocado intenta de nuevo");
    }
  } else {
    alert("lo siento, has agotado todos tus intentos");
  }
  
};

btn3.onclick = function () {
  fn3();
};

const fn4 = () => {
  if (cont<6) {
    cont++;
    let nombre = prompt("ingresa el nombre y apellido de esta persona");
  let nombre1 = nombre.toLowerCase();
  if (nombre1 === "juan daza") {
    alert("Perfecto adivinaste a la persona");
  } else {
    alert("Lo siento estas equivocado intenta de nuevo");
  }
  } else {
    alert("lo siento, has agotado todos tus intentos");
  }
  
};

btn4.onclick = function () {
  fn4();
};

const fn5 = () => {
  if (cont<6) {
    cont++;
    let nombre = prompt("ingresa el nombre y apellido de esta persona");
    let nombre1 = nombre.toLowerCase();
    if (nombre1 === "mario loaiza") {
      alert("Perfecto adivinaste a la persona");
    } else {
      alert("Lo siento estas equivocado intenta de nuevo");
    }
  } else {
    alert("lo siento, has agotado todos tus intentos");
  }
  
};

btn5.onclick = function () {
  fn5();
};

const fn6 = () => {
  if (cont<6) {
    cont++;
    let nombre = prompt("ingresa el nombre y apellido de esta persona");
  let nombre1 = nombre.toLowerCase();
  if (nombre1 === "manuel restrepo rios") {
    alert("Perfecto adivinaste a la persona");
  } else {
    alert("Lo siento estas equivocado intenta de nuevo");
  }
  } else {
    alert("lo siento, has agotado todos tus intentos");
  }
  
};

btn6.onclick = function () {
  fn6();
};
