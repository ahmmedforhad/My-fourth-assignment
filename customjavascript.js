// first-class-plus-button

const firstClassIncreased = getElementById('first-class-plus-btn');
firstClassIncreased.addEventListener("click", function() {
    count("first-class-count", true);
    const countSeat = getElementByIdWithValue("first-class-count");
    const cost = 150 * countSeat;
    const newCost = getElementById("first-class-cost")
    newCost.innerHTML = cost;
    const economyClassCost = getElementByIdWithInnerText("economy-class-cost");
    const subTotal = cost + parseInt(economyClassCost);
    const newSubTotal = getElementById("sub-total");
    newSubTotal.innerHTML = subTotal;
    let tax = getElementById("tax");
    const totalVat = subTotal * 0.10;
    tax.innerHTML = totalVat;
    const total = getElementById("total");
    total.innerHTML = subTotal+ totalVat;
})


// first class decreased button

const firstClassDecreased = getElementById("first-class-minus-btn");
firstClassDecreased.addEventListener("click", function() {
    count("first-class-count", false);
    const countSeat = getElementByIdWithValue("first-class-count");
    const cost = 150 * countSeat;
    const newCost = getElementById("first-class-cost")
    newCost.innerHTML = cost;
    const economyClassPrice = getElementByIdWithInnerText("economy-class-cost");
    const subTotal = cost + parseInt(economyClassPrice);
    const newSubTotal = getElementById("sub-total");
    newSubTotal.innerHTML = subTotal;
    let tax = getElementById("tax");
    const totalVat = subTotal * 0.10;
    tax.innerHTML = totalVat;
    const total = getElementById("total");
    total.innerHTML = subTotal + totalVat;
})



// economy class increased button

const economyClassIncreased = document.getElementById('increase-e-class');
economyClassIncreased.addEventListener("click", function() {
        count("economy-class-count", true);
        const countSeat = getElementByIdWithValue("economy-class-count");
        const cost = 100 * countSeat;
        const newCost = getElementById("economy-class-cost")
        newCost.innerHTML = cost;
        const firstClassCost = getElementByIdWithInnerText("first-class-cost");
        const subTotal = cost + parseInt(firstClassCost);
        const newSubTotal = getElementById("sub-total");
        newSubTotal.innerHTML = subTotal;
        let tax = getElementById("tax");
        const totalVat = subTotal * 0.10;
        tax.innerHTML = totalVat;
        const total = getElementById("total");
        total.innerHTML = subTotal + totalVat;
    })


// economy class decreased button


const economyClassDecreased = getElementById('decrease-e-class');
economyClassDecreased.addEventListener("click", function() {
    count("economy-class-count", false);
    const countSeat = getElementByIdWithValue("economy-class-count");
    const cost = 100 * countSeat;
    const newCost = getElementById("economy-class-cost")
    newCost.innerHTML = cost;
    const firstClassCost = getElementByIdWithInnerText("first-class-cost");
    const subTotal = cost + parseInt(firstClassCost);
    const newSubTotal = getElementById("sub-total");
    newSubTotal.innerHTML = subTotal;
    let tax = getElementById("tax");
    const totalVat = subTotal * 0.10;
    tax.innerHTML = totalVat;
    const total = getElementById("total");
    total.innerHTML = subTotal + totalVat;
})

// book now

const bookBtn = getElementById("book-btn");
bookBtn.addEventListener("click", function() {
    const bookingArea = getElementById("booking-area");
    bookingArea.style.display = 'none';
    const confirmation = getElementById("book-now-display");
    confirmation.style.display = 'block';
})

// custom function

// This function is for class count
function count(id, isIncrease) {
    const Count = document.getElementById(id).value;
    const CountNumber = parseInt(Count);
    let countIncrease = 0;
    if (isIncrease == true) {
        countIncrease = CountNumber + 1;
    } else if (isIncrease == false) {
        if (Count > 0) {
            countIncrease = CountNumber - 1;
        }

    }
    document.getElementById(id).value = countIncrease;
}

// This function is for selecting element using getElementById
function getElementById(id) {
    const result = document.getElementById(id);
    return result;
}
// This function is for selecting element using getElementByIdWithValue
function getElementByIdWithValue(id) {
    const result = document.getElementById(id).value;
    return result;
}

// This function is for selecting element using getElementByIdWithInnerText
function getElementByIdWithInnerText(id) {
    const result = document.getElementById(id).innerText;
    return result;
}