//const type2 = document.getElementById("id5");
//const btn = document.getElementById("btn1");

const firstname = document.getElementById("id1");
const lastname = document.getElementById("id2");
const Email = document.getElementById("id3");
const message = document.getElementById("id6");
// const radio = document.getElementsByName("query");
const button = document
  .getElementById("id7")
  .addEventListener("submit", formInfor);

function formInfor() {
  const radio = document.querySelector("input[name='query']:checked");
  const tick = document.querySelector("input[name='tick] : check");

  console.log(radio);
  if (
    firstname.value == "" ||
    lastname.value == "" ||
    Email.value == "" ||
    message.value == "" ||
    radio == null ||
    tick == null
  ) {
    alert("YOU MUST FILL ALL FIELD");
    firstname.style.borderColor = "red";
    radio.style.borderColor = "red";
    tick.style.borderColor = "red";
    lastname.style.borderColor = "red";
    Email.style.borderColor = "red";
    message.style.borderColor = "red";
  } else {
    firstname.value = "";
    lastname.value = "";
    Email.value = "";
    message.value = "";
    radio.checked = false;
    tick.check = false;
  }
}

document
  .getElementById("registrationform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("errorEmail").classList.add("hidden");
    let isValid = true;

    if (
      !isValidEmail(
        firstname.value == "" ||
          radio == null ||
          tick == null ||
          lastname.value == "" ||
          Email.value == "" ||
          message.value == ""
      )
    ) {
      document.getElementById("emailError").classList.remove("hidden");
      isValid = false;
    }
  });

/*
function form() {
  const radio = document.getElementById("id4");

  if (!isonClick(radio)) {
    alert("you must fill");
  }
}
  */

// const radio = document.getElementById("id4").addEventListener("check", (e) => {
//   e.preventDefault();

//   const type1 = document.getElementById("id4");
//   if(type1.oninvalid()){
//     alert("You Must Fill")
//     type1.style.borderColor="red"
//     type1.style.color="red"
//   }
//   else{
//     type1.style.color="green"
//   }
// });

/*
function formInfor() {
  const text1 = document.getElementById('id1')
  const text2 = document.getElementById('id2')
  const text3 = document.getElementById('id3')
  const text4 = document.getElementById('id6')

  const infor1 = text1.value,
    infor2 = text2.value,
    infor3 = text3.value,
    infor4 = text4.value
  if (infor1 && infor2 && infor3 && infor4) {
    alert('Ok na')
  } else {
    alert('e no work')
  }
  text1.value = '';
  text2.value = '';
  text3.value = '';
  text4.value = '';
}
  */
