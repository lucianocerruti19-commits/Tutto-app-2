let cart = [];
let total = 0;
let userLocation = "No definida";

function addToCart(item, price) {
  cart.push(item);
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");

  cartItems.innerHTML = "";

  cart.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = "✔ " + item;
    cartItems.appendChild(li);
  });

  totalPrice.textContent = total;
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      userLocation =
        "https://maps.google.com/?q=" +
        pos.coords.latitude +
        "," +
        pos.coords.longitude;

      document.getElementById("locationText").textContent =
        "Ubicación lista ✅";
    });
  } else {
    alert("Tu celular no soporta ubicación");
  }
}

function sendWhatsApp() {
  if (cart.length === 0) {
    alert("Agregá algo al pedido primero");
    return;
  }

  let message =
    "🍔 Pedido Tutto per Tutti:%0A%0A" +
    cart.join("%0A") +
    "%0A%0ATotal: $" +
    total +
    "%0A%0A📍 Ubicación: " +
    userLocation;

  let phone = "549XXXXXXXXXX"; // <-- TU NÚMERO

  window.open(
    "https://wa.me/" + phone + "?text=" + message,
    "_blank"
  );
}