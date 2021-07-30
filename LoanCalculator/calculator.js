window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault(); //  Prevents reload of the page
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 8;
  document.getElementById("loan-rate").value = 5.8;
}

// Activated from the button. Already canceled
// Get the current values from the UI
// Update the monthly payment
function update() {
  var values = getCurrentUIValues(); // calculateMonthlyPayment();
  var monthlypayment = calculateMonthlyPayment(values);
  //console.log(monthlypayment);
  updateMonthly(monthlypayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var p = values.amount; // Monthly rate/Amount of principle
  var i = (values.rate / 100) / 12; // periodic interest rate (in our case yearly rate ÷ 12)
  var n = Math.floor(values.years * 12); //total number of payments (years × 12)
  return ((p * i)
             /
          (1 - Math.pow((1 + i), -n))).toFixed(2)
};




// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}
