var alphbetPosition = function (text) {
    var aCode = "a".charCodeAt(0);
    return text
        .toLocaleLowerCase()
        .split("")
        .filter(function (char) { return char >= "a" && char <= "z"; })
        .map(function (x) { return x.charCodeAt(0) - aCode + 1; })
        .join("");
};
console.log(alphbetPosition("hatsune miku 123"));
