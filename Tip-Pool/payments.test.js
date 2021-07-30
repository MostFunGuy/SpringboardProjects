describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        submitPaymentInfo();
      });
    
    // Add a curPayment object to allPayments, update html and reset input values
    //function submitPaymentInfo(evt) {

    it('Should submit payment info from (submitPaymentInfo) without an event', function () {
        submitPaymentInfo();
        
        // Expect a zero'd out form
        expect(billAmtInput.value).toEqual('');
        expect(tipAmtInput.value).toEqual('');

        // Expect the first row of the payment info to have values
        expect(paymentTbody.firstElementChild.firstElementChild.innerText).toEqual('$50');
        expect(paymentTbody.firstElementChild.children[1].innerText).toEqual('$5');
        expect(paymentTbody.firstElementChild.lastElementChild.innerText).toEqual('10%');
    });

    // // createCurPayment() will return undefined with negative or empty inputs
    // // positive billAmt is required but tip can be 0
    // function createCurPayment() {
    it('Should be able to create current payments from createCurPayment()', function () {
        
        //This function pulls text from the page
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        let testValue = createCurPayment();

        //Expect it to pass back a formatted testValue containing the information
        expect(testValue.billAmt).toEqual('50');
        expect(testValue.tipAmt).toEqual('5');
        expect(testValue.tipPercent).toEqual(10);
    });

    // // Create table row element and pass to appendTd with input value
    // function appendPaymentTable(curPayment) {
    it('should append the payment table using payments passed to it using appendPaymentTable()', function () {
        //Empty the table for this one
        paymentTbody.innerHTML = '';

        appendPaymentTable({
            billAmt: 80,
            tipAmt: 20,
            tipPercent: 25,
          });
        
        // Expect the first row of the payment info to have values
        expect(paymentTbody.firstElementChild.firstElementChild.innerText).toEqual('$80');
        expect(paymentTbody.firstElementChild.children[1].innerText).toEqual('$20');
        expect(paymentTbody.firstElementChild.lastElementChild.innerText).toEqual('25%');
    });

    // // Create table row element and pass to appendTd with calculated sum of all payment
    // function updateSummary() {
    it('Should update the summary using updateSummary', function () {
        
        //This function pulls text from the page
        billAmtInput.value = 10;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 50;
        tipAmtInput.value = 3;
        submitPaymentInfo();
        billAmtInput.value = 80;
        tipAmtInput.value = 80;
        submitPaymentInfo();

        
        // Expect the first row of the payment info to have values
        //50 + 10 + 100 + 50 + 80 = 290
        expect(summaryTds[0].innerText).toEqual('$290');
        expect(summaryTds[1].innerText).toEqual('$108');
        expect(summaryTds[2].firstChild.textContent).toEqual('45%');
        //5 + 10 + 10 + 3 + 80 = 108



    });

    
    afterEach(function() {
        // teardown logic
        // Empty out the servers
        allServers = {};
        serverId = 0;
        updateServerTable();
        // Empty out the payments
        allPayments = {};
        serverId = 0;
        updateServerTable();
    
        // Empty the list of bills
        paymentTbody.innerHTML = '';
        
        // Empty the shift summary. Probably a better way to do this, but I couldn't find one
        summaryTds[0].innerHTML = "";
        summaryTds[1].innerHTML = "";
        summaryTds[2].innerHTML = "";

      });


});