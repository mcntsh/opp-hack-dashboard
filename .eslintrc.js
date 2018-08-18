
module.exports = {
    'extends': './node_modules/grumbler-scripts/config/.eslintrc-browser.js',

    'rules': {
        'promise/catch-or-return': 'off',
        'complexity': 'off',
        'max-nested-callbacks': [ 'error', 5 ]
    }
};
