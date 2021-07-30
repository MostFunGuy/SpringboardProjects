
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  // Added a <= zero check,  just in case. You shouldn't be able to ring up, but better safe than sorry
  if (billAmt <= 0){
    return 0;
  }
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;
  tr.append(newTd);
}


// expects a table row element, appends a newly created td element from the value
function appendDeleteBrn(tr) {
  let newBtn = document.createElement('td');
  newBtn.innerText = "X";
  newBtn.addEventListener("click", function(event) {
    event.target.parentElement.remove();
    let key = tr.dataset.targetKey;
    delete allServers[key];
  });
  tr.append(newBtn);
}
