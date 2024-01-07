const name = document.getElementById("user_name");
const email = document.getElementById("user_email");
const contact = document.getElementById("user_contact");
const message = document.getElementById("user_message");
const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  // console.log(name.value, email.value, contact.value, message.value);
  // ------------------------------------------------------

  let ebody = `
  <b>Name: </b>${name.value}
  <br>
  <b>Email: </b>${email.value}
  <br>
  <b>Phone no: </b>${contact.value}
  <br>
  <b>Message: </b>${message.value}`;
  // ------------------------------------------------------
  Email.send({
    SecureToken: "5dfe0abb-331a-4bb7-accc-b0357ea9f30b",
    To: "shreechhatrapati2021@gmail.com",
    From: "shreechhatrapati2021@gmail.com",
    Subject: "New Enquiry From " + name.value,
    Body: ebody,
  }).then((message) => alert("Thanks for submitting form!"));
  setTimeout(() => {
    location.reload();
  }, 3000);
});
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------







