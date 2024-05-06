const removeFromArray = function(targetArray, ...args) {
    // Revisa con filter, si existe uno de los elementos en args, entonces no lo considera.
    return targetArray.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
