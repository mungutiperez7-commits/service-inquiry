function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const services = document.getElementById("services").value.trim();
  const location = document.getElementById("location").value.trim();

  if (!name || !services || !location) {
    alert("Please fill all fields");
    return;
  }

  const message =
    "UPTOWN THRILL BOOKING REQUEST\n\n" +
    "Name: " + name + "\n" +
    "Services: " + services + "\n" +
    "Location: " + location + "\n\n" +
    "Ref: 1234";

  const ownerNumber = "254792127246"; // 🔴 replace with your number

  window.open(
    "https://wa.me/" + ownerNumber + "?text=" + encodeURIComponent(message),
    "_blank"
  );
}