console.log(customers);

let firstName;
let lastName;
let thumbNail;
let emailAddress;
let street;
let city;
let state;
let postCode;
let phoneNumber;
let communismIdentifier;
let humanDataSheet;
let currentCustomer;

function setHumanData(n){
  currentCustomer = customers.results[n];
  firstName = currentCustomer.name.first;
  lastName = currentCustomer.name.last;
  thumbNail = currentCustomer.picture.medium;
  emailAddress = currentCustomer.email;
  street = currentCustomer.location.street;
  city = currentCustomer.location.city;
  state = currentCustomer.location.state;
  postCode = currentCustomer.location.postcode;
  phoneNumber = currentCustomer.phone;
  communismIdentifier = currentCustomer.id.value;
}

function createHumanContainer(){
  humanDataSheet = `
    <img class="thumbNail" src="${thumbNail}">
    <h2 class="humanTitle">${firstName} ${lastName}</h2>
    <p>${emailAddress}</p>
    <p>${street}</p>
    <p>${city}, ${state} ${postCode}</p>
    <p>${phoneNumber}</p>
    <br>
    <p>${communismIdentifier}</p>
  `
}

for (let i=0; i<customers.results.length; i++) {
  setHumanData(i);
  createHumanContainer();
  console.log(firstName);
  let myHumanTank = document.querySelector('.directory');
  newHuman = document.createElement('div');
  newHuman.setAttribute('class', 'human');
  newHuman.innerHTML = humanDataSheet;
  directory.appendChild(newHuman);
}
