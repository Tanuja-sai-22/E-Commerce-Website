document.addEventListener("DOMContentLoaded", () => {
  // Select buttons
  const buttons = document.querySelectorAll(".product button");
  const cart = document.getElementById("cart");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const showCartBtn = document.getElementById("show-cart");
  const closeCartBtn = document.getElementById("close-cart");

  // Cart data
  let cartData = {};

  // Add event to product buttons
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const productDiv = e.target.parentElement;
      const productName = productDiv.querySelector("h3").textContent;
      const productPrice = parseInt(productDiv.querySelector("p").textContent.replace("₹",""));

      // Add to cart or update quantity
      if(cartData[productName]) {
        cartData[productName].quantity += 1;
      } else {
        cartData[productName] = { price: productPrice, quantity: 1 };
      }

      updateCart();
      // Optional: alert(`${productName} added to cart`);
    });
  });

  // Show cart button
  showCartBtn.addEventListener("click", () => {
    cart.style.display = "block";
  });

  // Close cart button
  closeCartBtn.addEventListener("click", () => {
    cart.style.display = "none";
  });

  // Update cart display
  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    for(let item in cartData) {
      const li = document.createElement("li");
      li.textContent = `${item} x ${cartData[item].quantity} - ₹${cartData[item].price * cartData[item].quantity}`;
      cartItems.appendChild(li);
      total += cartData[item].price * cartData[item].quantity;
    }
    cartTotal.textContent = `Total: ₹${total}`;
  }
});
