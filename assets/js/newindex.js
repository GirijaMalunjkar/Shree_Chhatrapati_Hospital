

const username = document.getElementById("name");
const useremail = document.getElementById("email");
const usercontact = document.getElementById("cs_contact");
const usermessage = document.getElementById("message");
const usersubmit = document.getElementById("user-form");



usersubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    let ebody = `
  <b>Name: </b>${username.value}
  <br>
  <b>Email: </b>${useremail.value}
  <br>
  <b>Phone no: </b>${usercontact.value}
  <br>
  <b>Message: </b>${usermessage.value}`;
    // ------------------------------------------------------
    Email.send({
        SecureToken: "5dfe0abb-331a-4bb7-accc-b0357ea9f30b",
        To: "shreechhatrapati2021@gmail.com",
        From: "shreechhatrapati2021@gmail.com",
        Subject: "New Enquiry From " + username.value,
        Body: ebody,
    }).then((message) => alert("Thanks for submitting form!"));
    setTimeout(() => {
        location.reload();
    }, 3000);
});
// --------------------------------------------------------------------------------------