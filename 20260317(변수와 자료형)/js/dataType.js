///////////////////////////////////////////////////////
// dataType _ String(문자열)
///////////////////////////////////////////////////////

let password = "black1234";
console.log(password);

let d_type = typeof password;
console.log(d_type);

//문자열 추출, 합치기

let str = "hello world";
let n = str.charAt(0);
console.log(n);

//문자열 합하기

let string1 = "javascript";
let string2 = string1.indexOf("world");
let string3 = string1.concat(" ", string2);
console.log(string3);

//문자형 숫자
let sum = "123";
let num = 123;
if (sum === num) {
    console.log("같다");
} else {
    console.log("다르다");
}
