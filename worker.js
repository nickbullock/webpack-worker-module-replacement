const myModule = require('MY_MODULE_PATH');

postMessage("I\'m working before postMessage(\'ali\').");

console.log('>>> in worker!', myModule)

onmessage = function(oEvent) {
    postMessage('Hi ' + oEvent.data);
};