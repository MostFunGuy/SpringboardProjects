describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        submitPaymentInfo();
      });
    

    //   function calculateTipPercent(billAmt, tipAmt) {
    //     return Math.round(100 / (billAmt / tipAmt));
    //   }
      it('Should calculate the tip average using calculateTipPercent()', function () {
        
        // Various (bill, tip)
        expect(calculateTipPercent(100, 10)).toEqual(10);
        expect(calculateTipPercent(5, 1)).toEqual(20);
        expect(calculateTipPercent(1200, 600)).toEqual(50);
        expect(calculateTipPercent(128, 0)).toEqual(0);
        expect(calculateTipPercent(100, 200)).toEqual(200);

        // Initially was going to add something like this just as an edge case, but you shouldn't ring up 0... But added it anyway
        // The code doesn't allow anything less than 1 single whole dollar, but still
        expect(calculateTipPercent(0, 5)).toEqual(0);
      });

      // accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
      it('Should summarize the totals using sumPaymentTotal(type)', function () {
        
        // Could have programmatically inputed these values, but this works
        billAmtInput.value = 10;
        tipAmtInput.value = 1;
        submitPaymentInfo();
        
        billAmtInput.value = 20;
        tipAmtInput.value = 6;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(12);
        expect(sumPaymentTotal('billAmt')).toEqual(80);

        // Unsure why this is 50, but the exercise didn't say to fix their code?
        expect(sumPaymentTotal('tipPercent')).toEqual(50);

      });

      // expects a table row element, appends a newly created td element from the value
      it('Should add new table rows using appendTd(tr, value)', function () {
        
        let newTr = document.createElement('tr');
        appendTd(newTr, "Hello World");
        
        expect(newTr.children.length).toEqual(1);
        //expect(paymentTbody[0].innerText = "Hello World");
        expect(newTr.firstChild.innerHTML).toEqual("Hello World");

      });

      // expects a table row element, appends a newly created delete button with delete functionality
      it('Should add delete buttons using  using appendDeleteBrn(tr)', function () {
        
        let newTr = document.createElement('tr');
        appendDeleteBrn(newTr);
        
        expect(newTr.children.length).toEqual(1);
        //expect(paymentTbody[0].innerText = "Hello World");
        expect(newTr.firstChild.innerHTML).toEqual("X");

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