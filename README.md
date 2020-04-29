# EthHW
Ethereum teaching materials HW2 for NTUEE Networking and Multimedia Lab (EE3002)
## Prequisites
node.js, npm, ganache-cli(or ganache), truffle, Metamask(browser add-ons)
```
~ $ sudo apt install nodejs
~ $ sudo apt install npm
~ $ npm install -g ganache-cli
~ $ npm install -g truffle
```
## Quick start
```
~ $ git clone https://github.com/Vimalakirti/EthHW.git
~ $ cd EthHW/
```
## Table of contents
- [1_Hello: basic solidity development](#1_hello)
- [2_Coin: ERC and testing](#2_Coin)
- [3_TodoApp: Web3 and frontend](#3_TodoApp)

## Notice
1. If your os is not **Windows**, please rename `truffle-config.js` to `truffle.js`, or just run the following command:
```
~ $ bash rename.sh
```
2. Remember to run ganache on developing.
3. Step-by-step
## HWs
**Please describe how you get the point(s) in your report.**

### 1_Hello
```
~ $ cd 1_Hello/
```
- (1%) Compile the contracts
- Modify `truffle-config.js`(or `truffle.js`)
- (1%) Migrate the contracts
- Run `truffle console`
- (1%) Get the message:
![image](https://github.com/Vimalakirti/EthHW/blob/master/images/1_hello_1.PNG)
- Change your name, we hold **Vimalakirti** up as an example here,
- (1%) And get the message:
![image](https://github.com/Vimalakirti/EthHW/blob/master/images/1_hello_2.PNG)
### 2_Coin
```
~ $ cd 2_Coin/
~ $ npm install @openzeppelin/contracts@^2.4.0
```
- Google "ERC20" first
- And you might need this doc: https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#erc20
- Compile the contracts
- Modify `truffle-config.js`(or `truffle.js`)
- Migrate the contracts
- Write your test script(solidity or javascript)
- (4%) Test the functions below:
    * totalSupply() - I've done for you
    * balanceOf(account) - I've done for you
    * transfer(recipient, amount) - **TODO**
    * allowance(owner, spender) - **TODO**
    * approve(spender, amount) - **TODO**
    * transferFrom(sender, recipient, amount) - **TODO**
- You should test these functionalities comprehensively and get "passing" by running `truffle test`
### 3_TodoApp
```
~ $ cd 3_TodoApp/
```
- Compile and migrate the contracts (remember to check `truffle-config.js` or `truffle.js`)
- `mv build react/src/`
- `cd react` and run `npm install`, then run `npm run start`
- Open your browser and enter `localhost:3000` in the URL bar
- (4%) Realize web3 functions below (`react/src/index.js` line 55~85):
    * addTodo
    * deleteTodo
    * completeTodo
    * undoneTodo
- Metamask should pop up on using these functions