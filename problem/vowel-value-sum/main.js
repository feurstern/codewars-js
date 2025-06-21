var vowelValueSum = function (text) {
    var aCode = "a".charCodeAt(0);
    return Math.max.apply(Math, text
        .toLocaleLowerCase()
        .split("")
        .filter(function (x) { return x == "a" || x == "i" || x == "o" || x == "e" || x == "o"; })
        .map(function (x) { return x.charCodeAt(0) - aCode + 1; }));
};
console.log(vowelValueSum("codewars"));
