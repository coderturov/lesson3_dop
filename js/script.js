//Первая задача

let str = "урок-3-был слишком легким";
str = str[0].toUpperCase() + str.substring(1);

str = str.replace(/-/g, ' ');

let sym = str.length;
str = str.substr(sym-6, sym);

str = str.replace(/им/g, 'оо');
console.log(str);

//Вторая задача


let arr = [20, 33, 1, 'Человек', 2, 3],
    newArr = [];
let multi;
arr.splice(3, 1);
for (let i = 0; i < arr.length; i++) {
    multi = Math.pow(arr[i], 3);
    newArr.push(multi);
}
    multi = 0;
for (let i = 0; i < newArr.length; i++) {
    multi += newArr[i];
}
multi = Math.sqrt(multi);
console.log(multi);


