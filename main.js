
//  database

let host = 'localhost';
let user = 'root';
let password = '';
let database = 'fave';





//  Variables  =======================>
    

// let pdf = document.getElementById("pdf_body");

let dateTime = document.getElementById('datetime');
let cashier = document.getElementById('cash');
let shift = document.getElementById('shif');



let userDataArray;
if(localStorage.userData!= null ){
    
    userDataArray = JSON.parse(localStorage.userData)

}else{}

function userData(){
    let userDataObject = {
        dateTime:dateTime.value,
        cashier:cashier.value,
        shift:shift.value
    }
    userDataArray.push(userDataObject);
    localStorage.setItem("userData", JSON.stringify(userDataArray))
    console.log(userDataObject);
    // console.log('doneeeeeeeeeeeee')

}



let Revenue = document.getElementById("revenue");

let total = document.getElementById("expenses");
// total.style.color = "#9452eb ";

let sum = document.getElementById("sum")


let visa = document.getElementById("visa");
// visa.style.color = '#f6416c';

let actualCash = document.getElementById("actualCash");

let cash = document.getElementById("cashValue");


let variance = document.getElementById("variance");

function getVariance(){
        totalVisa()
        totalExpenses()
        let cash = 0;
        if (Revenue.value != ""){
            cash = +Revenue.value - (+total   + +visa );
            document.getElementById("cashValue").innerHTML = cash
            let result =  +actualCash.innerHTML -  +cash  ;
            variance.innerHTML = result;
        }else{

        } 
        
}
// values
let twoHundred = document.getElementById("val200");
let oneHundred = document.getElementById("val100");
let fifty = document.getElementById("val50");
let twenty = document.getElementById("val20");
let tens = document.getElementById("val10");
let five = document.getElementById("val5");
let one = document.getElementById("val1");

// categories

let cat200 = document.getElementById("cat200");
let cat100 = document.getElementById("cat100");
let cat50 = document.getElementById("cat50");
let cat20 = document.getElementById("cat20");
let cat10 = document.getElementById("cat10");
let cat5 = document.getElementById("cat5");
let cat1 = document.getElementById("cat1");

// count

let count200 = document.getElementById("count200");
let count100 = document.getElementById("count100");
let count50 = document.getElementById("count50");
let count20 = document.getElementById("count20");
let count10 = document.getElementById("count10");
let count5 = document.getElementById("count5");
let count1 = document.getElementById("count1");

function cashValue(){
    
    
    let resultTwoHundred = +count200.value * +cat200.innerHTML;
    twoHundred.innerHTML = resultTwoHundred;

    let resultOneHundred = +count100.value * +cat100.innerHTML;
    oneHundred.innerHTML = resultOneHundred;

    let resultFifty = +count50.value * +cat50.innerHTML;
    fifty.innerHTML = resultFifty;

    let resultTwenty = +count20.value * +cat20.innerHTML;
    twenty.innerHTML = resultTwenty;

    let resultTens = +count10.value * +cat10.innerHTML;
    tens.innerHTML = resultTens;

    let resultFive = +count5.value * +cat5.innerHTML;
    five.innerHTML = resultFive;

    let resultOne = +count1.value * +cat1.innerHTML;
    one.innerHTML = resultOne;
    let sumC = +resultTwoHundred + +resultOneHundred + +resultFifty
    + +resultTwenty + +resultTens + +resultFive + +resultOne;
    actualCash.innerHTML =sum.innerHTML = sumC  
    if (sum.innerHTML  | actualCash.innerHTML != ""){
        sum.style.background = "#b90731"
        actualCash.style.background = "#b90731"
    

    }else;
    // window.print()
    getVariance()
}
let selectedValue;
function getSelectedValue(){
    selectedValue = document.getElementById("ex").value;
    
    
}


//  Expenses section ===========================================

let expensesArray ;
if (localStorage.expenses != null){
    expensesArray = JSON.parse (localStorage.expenses)
}else{

}
let description = document.getElementById('desc');
let value = document.getElementById('expVal');
getSelectedValue()


//  Add Expenses =============>

function addExpenses(){
    getSelectedValue()
    if (selectedValue != ''){
        console.log(selectedValue)
        
        let expensesObject = {
            expensesType:selectedValue ,
            description:description.value ,
            value:value.value
        }
        console.log(expensesObject)
        expensesArray.push(expensesObject)
        console.log(expensesArray)
        localStorage.setItem("expenses" , JSON.stringify(expensesArray))

        showExpensesArray()
        totalExpenses()
        // w = window.open();
        // w.document.write(

        //     `
        //     hello
        //     `
    

    
        // )
        // w.print();
        // w.pdf()

        clear()
        
        
    }else{

    }
    
}

        
function clear(){
    let selectedValue = document.getElementById("ex");
    selectedValue.value = '';
    expVal.value = '';
    desc.value = '';

}
//    Show data Table ====================>

function showExpensesArray(){ 
    
    let table = '';
    for(let i=0; i < expensesArray.length; i++){
        table +=
        `
        <tr>
            <td><button onclick="deleteExpenses(${i})">حذف</button></td>
            <td>${expensesArray[i].value}</td>
            <td>${expensesArray[i].description}</td>
            <td>${expensesArray[i].expensesType}</td>
            <td>${i+1}</td>
        </tr>
        `
}
    document.getElementById('tbody').innerHTML = table; 
    // console.log(table)

    
}

function deleteExpenses(i){
    expensesArray.splice(i,1)
    localStorage.expenses = JSON.stringify(expensesArray);
    showExpensesArray()
    totalExpenses()

}

function totalExpenses(){
    total = 0;
    for(let i = 0; i < expensesArray.length; i++){
        total += +expensesArray[i].value;
        document.getElementById("expenses").innerHTML = total
        // console.log(total)
    }
}    



// Delivery Section ===============================================

let orderDeliveryArray;
if(localStorage.delivery != null){
    orderDeliveryArray = JSON.parse(localStorage.delivery);

}else {
    orderDeliveryArray = [];
}


// Add Order Delivery ========================>
function addOrder(){
    let deliveryName = document.getElementById("deliveryName").value;
    let orderValue = document.getElementById("check").value;
    console.log(deliveryName)
    if (deliveryName && orderValue != '' ){
        let orderDeliveryObject = {
            deliveryName: deliveryName,
            orderValue:orderValue
        }
        console.log(orderDeliveryObject)
        orderDeliveryArray.push(orderDeliveryObject);
        localStorage.setItem("delivery" ,JSON.stringify(orderDeliveryArray))
        showDeliveryTable()
        TotalDeliveryAmount()
        ordersCount()
        serviceAmount()
        clearDeliveryData()

    }else{}
    

}



function clearDeliveryData(){
    let deliveryName = document.getElementById("deliveryName");
    deliveryName.value = '';
    let orderValue = document.getElementById("check");
    orderValue.value ='' ;
}

//  Show delivery table  =================>

function showDeliveryTable(){
    let deliveryTable = ''; 
    for(let i = 0; i < orderDeliveryArray.length; i++ ){
        deliveryTable += 

        `
        <tr>
            <td><button onclick="deleteDeliveryOrder(${i})" button>حذف</button></td>
            <td>${orderDeliveryArray[i].deliveryName}</td>
            <td>${orderDeliveryArray[i].orderValue}</td>
        </tr>
        
        `
    }
    document.getElementById("deliveryBody").innerHTML = deliveryTable;
}

function deleteDeliveryOrder(i){
    orderDeliveryArray.splice(i,1)
    localStorage.delivery = JSON.stringify(orderDeliveryArray)
    showDeliveryTable()
    TotalDeliveryAmount()
    serviceAmount() 
    ordersCount()
}

//  total Delivery

function TotalDeliveryAmount(){
        let TotalDelivery = 0;
        for(let i=0; i < orderDeliveryArray.length; i++){
        TotalDelivery += +orderDeliveryArray[i].orderValue;
        document.getElementById('totalDelivery').innerHTML = TotalDelivery
        console.log(TotalDelivery)
        
    }
}
//  order count ====================>
function ordersCount(){
    let numOn ;
    let count = orderDeliveryArray.length 
    console.log(count)
    document.getElementById('orderCount').innerHTML = count
}

//  Service amount ====================>

function serviceAmount(){
    let serviceOneCount = 0;
    let serviceTwoCount = 0;
    console.log(orderDeliveryArray.deliveryName == "عبدالله")
    for(let i = 0; i < orderDeliveryArray.length; i++ )
    {
        serviceOneCount += orderDeliveryArray[i].deliveryName == "عبدالله" 
        console.log(serviceOne)
        serviceTwoCount += orderDeliveryArray[i].deliveryName == "مغاوري" 
        serviceOne = +serviceOneCount * 5
        serviceTwo = +serviceTwoCount * 5
    }
    document.getElementById('serviceOne').innerHTML = serviceOne   
    document.getElementById('serviceTwo').innerHTML = serviceTwo   
        
}
// Visa Section =================================================

let visaOrder = document.getElementById("visaCheck");
let visaOrderArray;
if(localStorage.visaOrders !=null){
    visaOrderArray = JSON.parse(localStorage.visaOrders)

}else{
    visaOrderArray = [];
}

function addOrderVisa(){
    visaOrder = document.getElementById("visaCheck");
    if( visaOrder.value !=''){
        let visaObject = {
            visaOrder:visaOrder.value
        }
        
        console.log(visaObject)
        visaOrderArray.push(visaObject);
        localStorage.setItem("visaOrders", JSON.stringify(visaOrderArray))
        console.log(visaOrderArray)

        showVisaTable()
        totalVisa()
        clearVisa ()    
    }else{

    }
    
}

function clearVisa (){
    visaOrder = document.getElementById("visaCheck");
    visaOrder.value = '';
}


function showVisaTable(){
    let visaTable = '';
    for(let i = 0; i < visaOrderArray.length; i++ ){

        visaTable +=
        `
        <tr>
            <td><button onclick="deleteOrderVisa(${i})">حذف</button></td>
            <td>${visaOrderArray[i].visaOrder}</td>
        </tr>
        
        `
    }
    
    document.getElementById("visaBody").innerHTML = visaTable

}

function totalVisa(){
    console.log('done');
    visa = 0;
    for (let i = 0 ; i < visaOrderArray.length ; i++){
        visa +=  +visaOrderArray[i].visaOrder;

        document.getElementById("visa").innerHTML = visa
        console.log('done');
    }
}


function deleteOrderVisa(i){
    visaOrderArray.splice(i,1)
    localStorage.visaOrders = JSON.stringify(visaOrderArray)
    showVisaTable()
    totalVisa()


}

//  =============================================================================

showExpensesArray()
showDeliveryTable()
showVisaTable()
totalVisa()
serviceAmount()
TotalDeliveryAmount()
totalExpenses()
ordersCount()
userData()
getVariance()




//  Clear data =====================>

function clearData(){
        
    document.getElementById('cash').value = '';
    document.getElementById('datetime').value = '';
    document.getElementById('shif').value = '';


    document.getElementById("count200").value = '';
    document.getElementById("count100").value= '';
    document.getElementById("count50").value ='';
    document.getElementById("count20").value = '';
    document.getElementById("count10").value ='';
    document.getElementById("count5").value = '';
    document.getElementById("count1").value = '';


    document.getElementById("val200").innerHTML = '';
    document.getElementById("val100").innerHTML = '';
    document.getElementById("val50").innerHTML = '';
    document.getElementById("val20").innerHTML = '';
    document.getElementById("val10").innerHTML = '';
    document.getElementById("val5").innerHTML = '';
    document.getElementById("val1").innerHTML = '';

    document.getElementById("revenue").value = '';
    document.getElementById("expenses").innerHTML = '';
    document.getElementById("sum").innerHTML= '';
    document.getElementById("visa").innerHTML = '';
    document.getElementById("actualCash").innerHTML = '';
    document.getElementById("cashValue").innerHTML = '';
    document.getElementById("variance").innerHTML = '';
    actualCash.style.background = "";


    localStorage.expenses = null
    expensesArray = []
    orderDeliveryArray = []
    localStorage.delivery = null
    document.getElementById('orderCount').innerHTML ='';
    document.getElementById('serviceOne').innerHTML = ''; 
    document.getElementById('serviceTwo').innerHTML = '';
    visaOrderArray = []
    localStorage.visaOrders = null


    

    document.getElementById('orderCount').innerHTML = '';
    document.getElementById('serviceOne').innerHTML = ''; 
    document.getElementById('serviceTwo').innerHTML = ''; 
    document.getElementById('totalDelivery').innerHTML = '';

    document.getElementById('tbody').innerHTML = '';
    document.getElementById("deliveryBody").innerHTML = '';
    document.getElementById("visaBody").innerHTML = '';


}


















