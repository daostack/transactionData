const web3 = require('web3');
const BN = web3.utils.BN;

module.exports.tokenTransferData = (amountToken, address, decimals) => {
    const transferFunSig = "a9059cbb";
    console.log(amountToken, address, decimals);
    const amountTokenBN = (new BN(amountToken)).mul((new BN(10)).pow(new BN(decimals)));
    const amountTokenBNHex = web3.utils.toHex(amountTokenBN);
    const amountTokenBNHexNoPrefix = amountTokenBNHex.substring(2);
    const amountTokenBNHexPadded = amountTokenBNHexNoPrefix.padStart(64, "0");
    const addressNoPrefix = address.substring(2);
    const addressPadded = addressNoPrefix.padStart(64, "0");
    const fullTX = "0x" + transferFunSig + addressPadded + amountTokenBNHexPadded;

    return fullTX;
}
