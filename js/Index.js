console.log("choose an option For Valid Input:\n \n1.Post Code\n2.Phone \n3.Email ");
let option = prompt("Choose your Option");
let inputData = prompt("Write your Data");

option = parseInt(option)

let re;
let str;

switch (option) {

    case 1:
        re = /^([0-9]){4}$/;
        str = inputData;

        if (re.test(str)) {

            alert("Matches Your Input  ");

        } else {

            alert("Doesn't Match  Your Input  ");


        }

        break;

    case 2:

        // Phone Number
        // 01717888888 +8801717888888 8801717888888

        re = /^(\+)?(88)?01[0-9]{9}/;
        str = inputData;

        if (re.test(str)) {

            alert("Matches Your Input  ");

        } else {

            alert("Doesn't Match  Your Input  ");


        }

        break;

    case 3:

        // Email Address
        // bohubrihi8.learn@edu.com.bd
        re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
        str = inputData;


        if (re.test(str)) {

            alert("Matches Your Input  ");

        } else {

            alert("Doesn't Match  Your Input  ");


        }

        break;


}
