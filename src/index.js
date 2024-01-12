function pickPropArray(studs, prop) {
    let res = new Array();
    for (let i = 0; i < 5; i++){
        res.push(studs[i].name)
    }
    return res;
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
 ]
 
 const result = pickPropArray(students, 'name');

 console.log(result);


 function createCounter(){
    let count = 0;
    return function () {
        count++;
        console.log(count)
      }
 }

 const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2

function spinWords(str) {
    words = str.split(" ");
    var res = new Array();
    for (let i = 0; i < words.length; i++){
        if (words[i].length >= 5){
            res.push(words[i].split("").reverse().join(""));
        }
        else {
            res.push (words[i]);
        }
    }
    return res.join(" ");
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test




function lookForNumbers (nums, target){
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
}

console.log(lookForNumbers([2,7,11,15], 9));




function longPrefix (strs) {
    len = strs.length;
    pref = strs[0];
    for (let i = 1; i < len; i++){
        word = strs[i];
        while (word.indexOf(pref) != 0) {
            pref = pref.substring(0, pref.length - 1);
            if (pref == "") {
                return "";
            }
        }
    }
}

console.log(longPrefix(["цветок","поток","хлопок"]));


console.log(longPrefix(["собака","гоночная машина","машина"]));


