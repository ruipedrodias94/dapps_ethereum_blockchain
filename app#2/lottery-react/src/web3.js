import Web3 from 'web3';

let provider = '';

if ((typeof window.ethereum !== 'undefined') || (typeof window.web3 !== 'undefined')) {

  // Web3 browser user detected. You can now use the provider.
  provider = window['ethereum'] || window.web3.currentProvider
}

const web3 = new Web3(provider);

export default web3;