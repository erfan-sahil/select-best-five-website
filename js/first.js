document.getElementById('neymar-btn').addEventListener('click',function(){

    let neymarName =  document.getElementById('neymar-name');
    let neymarNameInnerText = neymarName.innerText;
 
    let playerList = document.querySelector('#five-player-list li');

    let li = document.createElement('li');
    
    li.innerText = neymarNameInnerText;

    playerList.appendChild(li);


    let neymarBtn = document.getElementById('neymar-btn');
    neymarBtn.disabled = true;

    neymarBtn.style.backgroundColor = 'gray';

 
 })




document.getElementById('messi-btn').addEventListener('click',function(){

   let messiName =  document.getElementById('messi-name');
   let messiNameInnerText = messiName.innerText;

   let playerList = document.querySelector('#five-player-list li');

   let li = document.createElement('li');
   li.innerText = messiNameInnerText;

   playerList.appendChild(li);
  

   let messiBtn = document.getElementById('messi-btn');
   messiBtn.disabled = true;

   messiBtn.style.backgroundColor = 'gray';


   

})


document.getElementById('mbappe-btn').addEventListener('click',function(){

   let mbappeName =  document.getElementById('mbappe-name');
   let mbappeNameInnerText = mbappeName.innerText;

   let playerList = document.querySelector('#five-player-list li');

   let li = document.createElement('li');
   li.innerText = mbappeNameInnerText;

   playerList.appendChild(li);
  
   let mbappeBtn = document.getElementById('mbappe-btn');
   mbappeBtn.disabled = true;

   mbappeBtn.style.backgroundColor = 'gray';


})


document.getElementById('ronaldo-btn').addEventListener('click',function(){

   let ronaldoName =  document.getElementById('ronaldo-name');
   let ronaldoNameInnerText = ronaldoName.innerText;

   let playerList = document.querySelector('#five-player-list li');

   let li = document.createElement('li');
   li.innerText = ronaldoNameInnerText;

   playerList.appendChild(li);
  

   let ronaldoBtn = document.getElementById('ronaldo-btn');
   ronaldoBtn.disabled = true;

   ronaldoBtn.style.backgroundColor = 'gray';

})


document.getElementById('haaland-btn').addEventListener('click',function(){

   let haalandName =  document.getElementById('haaland-name');
   let haalandNameInnerText = haalandName.innerText;

   let playerList = document.querySelector('#five-player-list li');

   let li = document.createElement('li');
   li.innerText = haalandNameInnerText;



    playerList.appendChild(li);
   
   
  

   let haalandBtn = document.getElementById('haaland-btn');
   haalandBtn.disabled = true;

   haalandBtn.style.backgroundColor = 'gray';
   
})


document.getElementById('grealish-btn').addEventListener('click',function(){

   let grealishName =  document.getElementById('grealish-name');
   let grealishNameInnerText = grealishName.innerText;

   let playerList = document.querySelector('#five-player-list li');

   let li = document.createElement('li');
   li.innerText = grealishNameInnerText;

   

    playerList.appendChild(li);
   
   

   let grealishBtn = document.getElementById('grealish-btn');
   grealishBtn.disabled = true;

   grealishBtn.style.backgroundColor = 'gray';
   


})


document.getElementById('pedri-btn').addEventListener('click',function(){

   let pedriName =  document.getElementById('pedri-name');
   let pedriNameInnerText = pedriName.innerText;

   let playerList = document.querySelector('#five-player-list li');

   let li = document.createElement('li');
   li.innerText = pedriNameInnerText;

  

    playerList.appendChild(li);
   
   

   let pedriBtn = document.getElementById('pedri-btn');
   pedriBtn.disabled = true;

   pedriBtn.style.backgroundColor = 'gray';
  
   

})

document.getElementById('vini-btn').addEventListener('click',function(){

   let viniName =  document.getElementById('vini-name');
   let viniNameInnerText = viniName.innerText;

   let playerList = document.querySelector('#five-player-list li');

   let li = document.createElement('li');
   li.innerText = viniNameInnerText;

  

    playerList.appendChild(li);
   
   
  

   let viniBtn = document.getElementById('vini-btn');
   viniBtn.disabled = true;

   viniBtn.style.backgroundColor = 'gray';
   

})



document.getElementById('lewa-btn').addEventListener('click',function(){

   let lewaName =  document.getElementById('lewa-name');
   let lewaNameInnerText = lewaName.innerText;

   let playerList = document.querySelector('#five-player-list li');

   let li = document.createElement('li');
   li.innerText = lewaNameInnerText;

  

    playerList.appendChild(li);
   
   

   let lewaBtn = document.getElementById('lewa-btn');
   lewaBtn.disabled = true;

   lewaBtn.style.backgroundColor = 'gray';
  
   
})







// player value calculation


document.getElementById('calc-btn').addEventListener('click',function(){

    let perPlayerSalary = document.getElementById('per-player-salary');
    let perPlayerSalaryText = perPlayerSalary.innerText;
    let perPlayerSalaryValue = parseFloat(perPlayerSalaryText);


    let playerExpense = document.getElementById('player-expense');
    let playerExpenseText = playerExpense.innerText;
    let playerExpenseValue = parseFloat(playerExpenseText);

    let fivePlayerSalary = perPlayerSalaryValue*5;

    playerExpense.innerText = fivePlayerSalary;
})



document.getElementById('calc-total-btn').addEventListener('click',function(){

    let playerExpense = document.getElementById('player-expense');
    let playerExpenseText = playerExpense.innerText;
    let playerExpenseValue = parseFloat(playerExpenseText);

    let managerSalary = document.getElementById('manager-salary');
    let managerSalaryText = managerSalary.innerText;
    let managerSalaryValue = parseFloat(managerSalaryText);

    let coachSalary = document.getElementById('coach-salary');
    let coachSalaryText = coachSalary.innerText;
    let coachSalaryValue = parseFloat(coachSalaryText);


    let totalCost = playerExpenseValue + managerSalaryValue + coachSalaryValue;


    let totalValue = document.getElementById('total-value');

    totalValue.innerText = totalCost;



})


const orderedList = document.querySelector('#five-player-list');
const listItems = orderedList.querySelectorAll('li');

if (listItems.length > 5) {
  console.log("The ordered list has more than 5 elements.");
  // Remove excess elements
  while (listItems.length > 5) {
    orderedList.removeChild(listItems[listItems.length - 1]);
  }
} else {
  console.log("The ordered list has 5 or fewer elements.");
  // Perform actions or handle the case where the list has 5 or fewer elements
} 