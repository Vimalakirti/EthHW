const Coin = artifacts.require("Nmlabtoken.sol");

contract('test hw2', async (accounts) => {
    let contractInstance;
    beforeEach(async () => {
        contractInstance = await Coin.new({ from: accounts[0] });
    })
    it('totalSupply() is correct', async () => {
        const result = await contractInstance.totalSupply({ from: accounts[0] });
        assert.equal(result.words[0], 10000);
    });
    it('balanceOf(account) is correct', async () => {
        const result1 = await contractInstance.balanceOf(accounts[0], { from: accounts[0] });
        const result2 = await contractInstance.balanceOf(accounts[1], { from: accounts[0] });
        assert.equal(result1.words[0], 10000);
        assert.equal(result2.words[0], 0);
    });
    it('transfer(recipient, amount) is correct', async () => {
        await contractInstance.transfer(accounts[1], 1000, { from: accounts[0] });
        const result1 = await contractInstance.balanceOf(accounts[0], { from: accounts[0] });
        const result2 = await contractInstance.balanceOf(accounts[1], { from: accounts[0] });
        assert.equal(result1.words[0], 9000);
        assert.equal(result2.words[0], 1000);
    });
    it('approve(spender, amount) + allowance(owner, spender)  is correct', async () => {
        await contractInstance.approve(accounts[1], 1000, { from: accounts[0] });
        const result = await contractInstance.allowance(accounts[0], accounts[1], { from: accounts[0] });
        assert.equal(result.words[0], 1000);
    });
    it('approve(spender, amount) + transferFrom(sender, recipient, amount) is correct', async () => {
        await contractInstance.approve(accounts[1], 1000, { from: accounts[0] });
        await contractInstance.transferFrom(accounts[0], accounts[2], 100, { from: accounts[1] });
        const result1 = await contractInstance.balanceOf(accounts[0], { from: accounts[0] });
        const result2 = await contractInstance.balanceOf(accounts[1], { from: accounts[0] });
        const result3 = await contractInstance.balanceOf(accounts[2], { from: accounts[0] });
        assert.equal(result1.words[0], 9900);
        assert.equal(parseInt(result2.words[0]), 0);
        assert.equal(result3.words[0], 100);

    });
});
