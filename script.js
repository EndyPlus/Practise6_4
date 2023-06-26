document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log("Ім'я: " + firstName);
  console.log("Прізвище: " + lastName);
  console.log("Email: " + email);
  console.log("Пароль: " + password);

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});
