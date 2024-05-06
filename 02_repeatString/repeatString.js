const repeatString = function(word, repeat) {
    if (word == '') {
        return '';
    } else if (repeat < 0) {
        return 'ERROR';
    }
    var result = ''
    for (let i = 0; i < repeat; i ++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
