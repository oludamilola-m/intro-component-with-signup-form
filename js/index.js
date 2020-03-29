var formFields = ["first-name", "last-name", "password"];

function validateForm() {
  event.preventDefault();
  for (let i = 0; i < formFields.length; i++) {
    const id = formFields[i];
    const element = document.getElementById(id);
    const value = element.value;

    if (value === "") {
      const idName = id.split("-").join(" ");
      const errorMsg = `${idName} cannot be empty`;
      const errorMsgSpan = element.nextElementSibling;
      errorMsgSpan.innerHTML = errorMsg;
      element.classList.add("error");
    }
  }
}

// function validateForm() {
//   event.preventDefault();
//   for (let i = 0; i < formFields.length; i++) {
//     const element = document.getElementById(formFields[i]);

//     if (isFieldValid(field)) {
//       element.classList.add("error");
//     }
//   }
// }

// function isFieldValid(field) {
//   return field.value === "";
// }
