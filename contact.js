const contactForm = document.querySelector("form");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const subject = document.querySelector("#subject");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");
const subjectError = document.querySelector("#subjectError");

const success = document.querySelector("#success");

const emailRegEx = /\S+@\S+\.\S+/;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  success.innerHTML = "";
  nameError.innerText = "";
  emailError.innerText = "";
  addressError.innerText = "";
  subjectError.innerText = "";

  let error = false;
  if (name.value === "") {
    error = true;
    nameError.innerText = "Please provide a right name";
  }

  if (email.value === "" || !emailRegEx.test(email.value)) {
    error = true;
    emailError.innerText = "Please provide a valid e-mail address";
  }

  if (address.value.length < 25) {
    error = true;
    addressError.innerText = "Address must be atleast 25 characters";
  }

  if (subject.value.length < 10) {
    error = true;
    subjectError.innerText = "Subject must be atleast 10 characters";
  }

  if (!error) {
    success.innerHTML =
      "<h2>Thank you</h2><p>We will get back to you as fast as we can.</p>";
  }
});
