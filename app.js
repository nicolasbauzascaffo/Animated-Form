/* Eventos para movimiento del formulario */
var a = document.getElementById("log");
var b = document.getElementById("sign");
var c = document.getElementById("btn");

const register = () => {
  a.style.left = "-400px";
  b.style.left = "50px";
  c.style.left = "110px";
};

const login = () => {
  a.style.left = "50px";
  b.style.left = "450px";
  c.style.left = "0px";
};

/* Fondo de pantalla móvil con el cursor */
window.onload = () => {
  var x1 = document.querySelector("#main");
  x1.onmousemove = function (e) {
    var x = -(e.clientX - this.offsetLeft / 100);
    var y = -(e.clientY - this.offsetTop / 100);
    this.style.backgroundPosition = x + "px " + y + "px";
  };
};

/* FORMULARIO LOG IN : Expresiones regulares */

var formulario_login = document.getElementById("log");
var input_login = document.querySelectorAll("#log input");

const regExp_1 = {
  email1: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password1: /^\d{6}$/,
};

const campos = {
  email1: false,
  password1: false,
};

const validacion1 = (e) => {
  switch (e.target.name) {
    case "email1":
      validarCampos1(regExp_1.email1, e.target, "email1");
      break;
    case "password1":
      validarCampos1(regExp_1.password1, e.target, "password1");
      break;
  }
};

const validarCampos1 = (exp, input, campo) => {
  const element = document.getElementById(`${campo}`);
  if (exp.test(input.value)) {
    element.classList.remove("red");
    element.classList.add("green");
    campos[campo] = true;
  } else {
    element.classList.remove("green");
    element.classList.add("red");
    campos[campo] = false;
  }
};

/* Validación formulario Log-in */
var formulario_login = document.getElementById("log");
var input_login = document.querySelectorAll("#log input");

input_login.forEach((input) => {
  input.addEventListener("keyup", validacion1);
  input.addEventListener("blur", validacion1);
});

formulario_login.addEventListener("submit", (e) => {
  e.preventDefault();
  if (campos.email1 && campos.password1) {
    formulario_login.reset()
    input_login.forEach((input)=> {
      input.classList.remove('green')
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank you',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        container: 'swal-font'
      }
    })
  } else {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Something is wrong !',
      showConfirmButton: false,
      timer: 2000,
      background: 'black',
      customClass: {
        container: 'swal-font'
      }
    })
  } ;
  for (var campo in campos) {
    if (!campos[campo] || campos[campo].value === '') {
      document.getElementById(campo).classList.add("red");
    } else {
      document.getElementById(campo).classList.remove("red");
    }
  }
});

/**********************/

/*  FORMULARIO SIGN UP : Expresiones regulares */
var formulario_sign = document.getElementById("sign");
var input_sing = document.querySelectorAll("#sign input");

const expresiones_2 = {
  name2: /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ\s]{0,38}[a-zA-ZÀ-ÿ]$/,
  email2: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password2: /^\d{6}$/,
  phone2: /^\d{7,14}$/,
};

const campos_2 = {
  name2: false,
  password2: false,
  email2: false,
  phone2: false,
};

const validacion2 = (e) => {
  switch (e.target.name) {
    case "name2":
      valdiarCampos2(expresiones_2.name2, e.target, "name2");
      break;
    case "email2":
      valdiarCampos2(expresiones_2.email2, e.target, "email2");
      break;
    case "password2":
      valdiarCampos2(expresiones_2.password2, e.target, "password2");
      break;
    case "phone2":
      valdiarCampos2(expresiones_2.phone2, e.target, "phone2");
      break;
  }
};

const valdiarCampos2 = (exp, input, campo) => {
  const element = document.getElementById(`${campo}`);
  if (exp.test(input.value)) {
    element.classList.remove("red");
    element.classList.add("green");
    campos_2[campo] = true;
  } else {
    element.classList.remove("green");
    element.classList.add("red");
    campos_2[campo] = false;
  }
};

input_sing.forEach((input) => {
  input.addEventListener("keyup", validacion2);
  input.addEventListener("blur", validacion2);
});

formulario_sign.addEventListener("submit", (e) => {
  e.preventDefault();
  if (campos_2.phone2 && campos_2.email2 && campos_2.name2 && campos_2.password2) {
    formulario_sign.reset()
    input_sing.forEach((input)=> {
      input.classList.remove('green')
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thank you',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        container: 'swal-font'
      }
    })
  } else {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Something is wrong !',
      showConfirmButton: false,
      timer: 2000,
      background: 'black',
      customClass: {
        container: 'swal-font'
      }
    });
    for (var campo in campos_2) {
      if (!campos_2[campo] || campos_2[campo].value === '') {
        document.getElementById(campo).classList.add("red");
      } else {
        document.getElementById(campo).classList.remove("red");
      }
    }
  }
});
