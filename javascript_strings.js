//1
let str1 = "font-size-test";
let str2 = "cascading style sheets";
let str3 = "https://journal.top-academy.ru/ru/main/homework/page/index"
let str4 = "10/08/2020";
let str5 = ""
function toCamelCase(targetString) {
    return targetString.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}
console.log(toCamelCase(str1));

//2
function toAbraviatura(_inputStr)
{
    tempStr = _inputStr;
    tempStr = tempStr.split(' ');
    tempStr = tempStr.map(word => word.charAt(0).toUpperCase());
    return tempStr.join('');
}
console.log(toAbraviatura(str2));

//3
function getUrlInfo(_str) {
    const urlObj = new URL(_str);
    return {
        protocol: urlObj.protocol.slice(0, -1),
        domain: urlObj.hostname,
        path: urlObj.pathname
    };
}
const info = getUrlInfo(str3);
console.log(`протокол: ${info.protocol}, домен: ${info.domain}, путь: ${info.path}`);

//4
function splitString(_str, delimiter) {
    return _str.split(delimiter);
}
const array = splitString(str4, "/");
console.log(array);

//5
function print(template, ...args) {
    return template.replace(/%(\d+)/g, (match, index) => {
        return args[index - 1];
    });
}
const result = print("Сегодня %1 %4.%3.%2", "Воскресенье", 6, 10, 2024);
// const result = print("Сегодня %1 %2.%3.%4", "Воскресенье", 6, 10, 2024);
console.log(result);