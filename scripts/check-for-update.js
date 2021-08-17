const updateNotifier = require('update-notifier');

const pkg = require('../package.json');

const notifier = updateNotifier({ pkg }).notify();
console.log(123, notifier.update);
exports.wtf = () => {
    console.log('WHAT THE ACTUAL');
};
