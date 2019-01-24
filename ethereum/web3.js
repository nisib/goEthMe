import Web3 from 'web3';

let web3;

//Check to see we are in browser and metamask is running
if (typeof window !== 'undefined' && typeof window.web3 !='undefined'){
  //We are in the browser and metamask is running.
  web3=new Web3(window.web3.currentProvider);
}else{
  //We are on the server or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/8a8fa978e5bb4f4ea3b48c983543801b'
  );
  web3=new Web3(provider);
}

export default web3;
