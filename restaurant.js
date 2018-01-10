var totals = [];
var foods =[
  {
  "name":"Burger",
  "price1":5
  },{
  "name":"Fries",
  "price2":2
  },{
  "name":"Hot Dog",
  "price3":2
  },{
  "name":"Pizza",
  "price4":4
  },{
  "name":"Sandwich",
  "price5":6
  },{
  "name":"Milkshake",
  "price6":3
  }
  ];
  function buyBurger() {
    var qty1 = document.getElementById('food1').value;
    var price1 = qty1 * foods[0].price1 + " dollars for " + qty1 + " Burger(s).";
    totals.push(price1);
    window.alert(price1);
    }
  function buyFries() {
    var qty2 = document.getElementById('food2').value;
    var price2 = qty2 * foods[1].price2 + " dollars for " + qty2 + " Fries.";
    totals.push(price2);
    window.alert(price2);
    }
  function buyHotDog() {
    var qty3 = document.getElementById('food3').value;
    var price3 = qty3 * foods[2].price3 + " dollars for " + qty3 + " Hot Dog(s).";
    totals.push(price3);
    window.alert(price3);
    }
  function buyPizza() {
    var qty4 = document.getElementById('food4').value;
    var price4 = qty4 * foods[3].price4 + " dollars for " + qty4 + " Pizza(s).";
    totals.push(price4);
    window.alert(price4);
    }
  function buySandwich() {
    var qty5 = document.getElementById('food5').value;
    var price5 = qty5 * foods[4].price5 + " dollars for " + qty5 + " Sandwich(s).";
    totals.push(price5);
    window.alert(price5);
    }
  function buyMilkshake() {
    var qty6 = document.getElementById('food6').value;
    var price6 = qty6 * foods[5].price6 + " dollars for " + qty6 + " Milkshake(s).";
    totals.push(price6);
    window.alert(price6);
    }
  function allDone() {
    var a = JSON.stringify(totals);
    localStorage.setItem('list',a);
    location.href="restaurant2.html";
  }
  function showTotals() {
    var b = localStorage.getItem('list');
    var c = JSON.parse(b);
    document.getElementById('showAll').innerHTML = c;
    for(i=0; i<c.length; i++){
      var foodItem = document.createElement('li');
      var newText = document.createTextNode(c[i]);
      foodItem.appendChild(newText);
      var position = document.getElementById('receipt');
      position.appendChild(foodItem);
    }
  }
