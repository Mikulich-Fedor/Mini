import { office, officeNname } from "./office";
let name = document.getElementById("name");
let mail = document.getElementById("mail");
let password = document.getElementById("password");
let btnSubmit = document.getElementById("btnSubmit");
//

function checkName() {
  if (name.value.length > 3 && name.value.trim() !== "") {
    alert(`Здравствуйте ${name.value}`);
    return true;
  } else {
    alert(`Введите имя`);
    return false;
  }
}

function checkMail() {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(mail.value) == true) {
    alert(`Сообщение будет отправлено на ${mail.value}`);
    return true;
  } else {
    alert(`Введите почту`);
    return false;
  }
}
function checkPassword() {
  let reg = /[0-9]/;
  if (password.value.length > 4 && reg.test(password.value) == true) {
    return true;
  } else {
    alert(`Введите пороль больше 4, только цифры`);
    return false;
  }
}

function checkAll() {
  if (checkName() == true && checkMail() == true && checkPassword() == true) {
    officeNname.innerHTML = name.value;
    office.style.display = "flex";
    document.getElementById("wrapper").style.display = "none";
  } else {
    alert(`Попробуйте еще`);
  }
}

export { checkAll, btnSubmit };
