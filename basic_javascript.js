window.onload = function() {
    let counterSpan = document.getElementById("counter");
    let counter = Number(counterSpan.textContent);
    window.tickUp = function() {
        counter++;
        counterSpan.textContent = counter;
    };
    window.tickDown = function() {
    counter--;
    counterSpan.textContent = counter;
    };
    window.runForLoop = function() {
        let result = "";
        for (let i = 0; i <= counter; i++) {
            result += i + " ";
        }
        document.getElementById("forLoopResult").textContent = result;
    };
    window.showOddNumbers = function() {
        let result = "";
        for (let i = 1; i <= counter; i +=2) {
            result += i + " ";
        }
        document.getElementById("oddNumberResult").textContent = result;
    };
    window.addMultiplesToArray = function() {
        let arr = [];
        for (let i = 5; i <= counter; i += 5) {
            arr.push(i);
        }
        arr.reverse();
        console.log(arr);
    };
    window.printCarObject = function() {
        let car = {
            cType: document.getElementById("carType").value,
            cMPG: document.getElementById("carMPG").value,
            cColor: document.getElementById("carColor").value
        };
        console.log(car);
    };
    window.loadCar = function(num) {
        let car;
        if (num == 1) {
            car = carObject1;
        } else if (num == 2) {
            car = carObject2;
        } else if (num == 3) {
            car = carObject3;
        }
        document.getElementById("carType").value = car.cType;
        document.getElementById("carMPG").value = car.cMPG;
        document.getElementById("carColor").value = car.cColor;
    };
    window.changeColor = function(num) {
        let p = document.getElementById("styleParagraph");
        if (num === 1) {
            p.style.color = "red";
        }
        else if (num === 2) {
            p.style.color = "green";
        }
        else if (num === 3) {
            p.style.color = "blue"
        }
    };
};