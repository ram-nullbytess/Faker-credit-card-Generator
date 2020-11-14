let btnGen = document.querySelector('button');
 
btnGen.addEventListener('click', () => {
    let info = faker.helpers.contextualCard();
    let info2 = faker.random.number();
    let info3 = faker.random.number();
    let info4 = faker.finance.amount();
    let info5 = faker.helpers.createCard();
    let {name,  email, address:{city,  zipcode}} = info;
    let account = info2;
    let {address:{country}} = info5;
    let acc = info3;
   let amount = info4;
  
    document.querySelector('#myName').value = name; 
    document.querySelector('#Email').value = email;
    document.querySelector('#city').value = city;
    document.querySelector('#zipcode').value = zipcode;
    document.querySelector('#Country').value = country;
    document.querySelector('#account').value = account  + '' + acc;
    document.querySelector('#amount').value = amount;
});