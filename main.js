const array = ["Olma", "Banan", "Nok", "Shaftoli"];
let lengthArr = array.length;

console.log(array);
alert("Boshlanishda Arrayning uzunligi: " + lengthArr);
let question = confirm("Sizning arrayingizdan malumotni olib tashlamoqchimiz")

if (question){
    let pop = array.pop()
    let lengthPop = array.length
    alert("Arrayning uzunligi: " + lengthPop)
    console.log(array);
}
else {
    alert("Arrayning uzunligi: " + lengthArr)
    console.log(array);
}