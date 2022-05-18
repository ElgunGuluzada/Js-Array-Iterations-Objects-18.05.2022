// Task 1 Start 
// Ededlerden ibaret bir array verilir. Hemin arrayi boyukden ededden kiciye  dogru sort elemek.

function MaxToMin() {
    let count = prompt("Yeni bir array yaratmaliyiq. \nZehmet olmasa 1-10 araliginda arrayin uzunlugunu daxil edin:  \n")
    if (count > 0 && count < 11) {
        let numbArr = [];
        for (let i = 0; i < count; i++) {
            numbArr.push((prompt((i + 1) + "nomreli ededi qeyd edin")));
        }
        numbArr.sort(function (a, b) {
            return a - b;
        });
        document.write(numbArr," Siralama kicikden boyuye \n"); // kicikden boyuye
        numbArr.reverse();
        document.write(numbArr," Boyukden kiciye"); //boyukden kiciye
    }
    else {
        alert("Daxil edilen eded verilen serti odemir!")

    }
    // let numbArr = [5, 10, 20, 2, 51]


}

MaxToMin();

// Task 1 End


// Task 2 Start 
// 3) ["Yanvar","Fevral","Mart","Aprel"]  - bu arrayi parametr kimi qebul eden bir function yazirsiz.
// Hemin function geriye yeni bir array qaytarir. Yeni yaranan arrayda hemin aylarin necenci ay oldugu yazilmalidir. 
// Cavab bele olmlalidir: ["Yanvar -1","Fevral-2","Mart-3","Aprel-4"]. 

let monthArr = ["Yanvar", "Fevral", "Mart", "Aprel"];

function MonthAndNumb([]) {
    let newArr = [];

    for (let i = 0; i < monthArr.length; i++) {
        newArr.push(monthArr[i] + " - " + (i + 1))
    }
    console.log(newArr);
    return newArr;
}

MonthAndNumb(monthArr);

// Task 2 End

// Task 3 Start
// 4)String qebul eden bir function yaziriq. Hemin function yeni bir array qaytaracaq,
// hemin arrayin elementleri functiona gelen stringin sozlerinin herflerinin cemine beraber olmalidir.
// Meselen: Functiona gelen string - "Salam olsun hamiya", hemin functionun qaytardiqi array ise - [5,5,6] olacaq.

let string = "Salam olsun hamiya";

function arrElementCount(index) {
    let arr = index.split(" ");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].length);
    }
    return newArr;
}

console.log(arrElementCount(string));