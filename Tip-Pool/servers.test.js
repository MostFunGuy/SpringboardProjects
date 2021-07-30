describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Richard';
  });

  it('should update server info on DOM from the values', function () {
    updateServerTable();

    // Since we didn't add any servers, updating the server table should result in no names
    expect(Object.keys(allServers).length).toEqual(0);
    // And for the body to not contain anything
    expect(serverTbody.innerHTML).toEqual("");
  });
  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Richard');
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

  });
});
