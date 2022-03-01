//this line selects the three 'select' buttons
const threeButtons = document.querySelectorAll('.open-button')




//this function remove/add the 'toggle' class of '.container2'
var togglePayment = function() {
    let paymentItem = document.querySelector('.container2');
    if (paymentItem.classList.length == 2) {
        paymentItem.classList.remove('toggle')
    } 

} 



//this function adding the head to the container

var addingHead = function() {
    const head = document.createElement('h1');
    head.innerText = 'Confirm your payment';
    let paymentItem = document.querySelector('.container2')
    paymentItem.insertAdjacentElement('afterbegin',head)
    togglePayment()


}


//this function takes the itemDiv and add style to it


//this function creates div and creating a border to it and give it a class .then, put the item text into it.
var createItemText = function(itemsPay) {
    var paymentItem = document.querySelector('.container2')
    var itemDiv = document.createElement('div')
    itemDiv.classList.add('specific-item')
    itemDiv.style.border = '10px solid black';
    paymentItem.insertAdjacentElement('afterbegin', itemDiv)
    for (let i of itemsPay.children) {
        var newItemAdd = document.createElement('h3')
        newItemAdd.innerText = i.innerText;
        itemDiv.append(newItemAdd)
    }
    togglePayment()
    
    
    
}

var addSum = function(addPrice) {
    var sum = document.querySelector('#total-price');
    priceTotal += addPrice;
    sum.innerText = `Total Price: ${priceTotal}$`
}



// this function takes the values from the item and store it and updating total price
var addItem = function(price, name){
    var itemsPay = document.createElement('div')
    var newPrice = document.createElement('div');
    var newName = document.createElement('div')
    newName.innerText = `Item name: ${name}`;
    newPrice.innerText = `Price: ${price}`;
    itemsPay.append(newPrice);
    itemsPay.append(newName) 
    addSum(parseInt(price))
    createItemText(itemsPay)
    

}

// counts the quantity of elements selected
let numberOfItemClicked = 0;

let priceTotal = 0;


//creating an event listener for the select button and store the data from it.
for (let button of threeButtons) {
    button.addEventListener('click',function(){
        var infoContainer = button.parentElement
        var price = infoContainer.children[1].innerText
        var name =  infoContainer.children[0].innerText
        addItem(price,name)

        
        
    })
}




        
        






