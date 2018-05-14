const web3 = require('web3');

module.exports.tokenTransferData = (amountGen, address) => {
    const transferFunSig = "a9059cbb";
    const amountGenWei = web3.utils.toWei(amountGen.toString());
    const amountGenWeiHex = web3.utils.toHex(amountGenWei);
    const amountGenWeiHexNoPrefix = amountGenWeiHex.substring(2);
    const amountGenWeiHexPadded = amountGenWeiHexNoPrefix.padStart(64, "0");
    const addressNoPrefix = address.substring(2);
    const addressPadded = addressNoPrefix.padStart(64, "0");
    const fullTX = "0x" + transferFunSig + addressPadded + amountGenWeiHexPadded;

    return fullTX;
}
