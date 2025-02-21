// form-demo.js
function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const theForm = event.target;
    // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
    // To keep it from happening we can can call e.preventDefault()
    // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
    const errors = [];
    // start by assuming the form is valid.
    let isValid = true;
    // add our validations here
    const fname = document.getElementById("fname");
    if (fname.value != "Bob" ){
      isValid = false;
      errors.push("That is not the right name.")
    }

    const paymentMethod = document.getElementById("payment");
    if (paymentMethod.value == "credit"){
      const credit = document.getElementById("credit");
      if (credit.value != "1234123412341234" ){
        isValid = false;
        errors.push("That is not a valid credit card number.")
      }  
    }
    
    // if we ran into any problems above valid will be false.
    if (!isValid) {
      //stop the form from being submitted
      event.preventDefault();
      // show the errors
      showErrors(errors);
      // return false to let the browser know the form was not submitted.
      return false;
    }
  }
  
  function togglePaymentDetails(e) {
    const creditLabel = document.getElementById("credit-label");
    const creditInput = document.getElementById("credit");
    const payPalLabel = document.getElementById("paypal-label");
    const payPalInput = document.getElementById("paypal");

    if (e.target.value == "credit"){
      creditLabel.classList.remove("hide")
      creditInput.classList.remove("hide")

      payPalInput.classList.add("hide")
      payPalLabel.classList.add("hide")

      creditInput.required = true
      payPalInput.required = false
    }
    else {
      creditLabel.classList.add("hide")
      creditInput.classList.add("hide")

      payPalInput.classList.remove("hide")
      payPalLabel.classList.remove("hide")

      creditInput.required = false
      payPalInput.required = true
    }
  }
  
  // helper function to display our errors.
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
  }
  // attach a change event handler to the paymentMethod input
  const payment = document.getElementById("payment");
  payment.addEventListener("change", togglePaymentDetails);

  // attach a submit event handler to the form
  const checkoutForm = document.getElementById("checkoutForm");
  checkoutForm.addEventListener("submit", validateForm);


  