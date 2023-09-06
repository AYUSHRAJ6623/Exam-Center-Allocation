let users = []

//  Function getting users  input 

function add() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');

    // Options of exam center 

    let cities = ['Delhi', 'Pune ', 'Agra', 'Banglore', 'Mumbai']
    let City = cities[(Math.floor(Math.random() * (cities.length)))];

    let userInput = {
        name: name.value,
        email: email.value,
        City: City,

    }

    addUser(userInput)
    displyUsers();
    console.log(users);

}



//  Function to check users input

function addUser(userInput) {
    let checkUser = users.filter((currentUser) => {
        return currentUser.email == userInput.email;
    })
    if (checkUser.length == 0) {
        users.push(userInput);
        notifyUserAdded();
    }
    else {
        notifyUserExist();
    }

}



// Function to check new users is added  

function notifyUserAdded() {
    let alert = document.getElementById('alert-success');
    alert.classList.remove('alert');
    alert.classList.add('alert-success');

    setTimeout(() => {
        alert.classList.remove('alert-success');
        alert.classList.add('alert');
    }, 2000);
    // Here 2000 means 2000 milisecond

}


// Function to check users is already exist

function notifyUserExist() {
    let alert = document.getElementById('alert-danger');
    alert.classList.remove('alert');
    alert.classList.add('alert-danger');


    setTimeout(() => {
        alert.classList.remove('alert-danger');
        alert.classList.add('alert');
    }, 2000);
    // Here 2000 means 2000 milisecond
}


// Function to display users and center 

function displyUsers() {
    let usercart = document.getElementById('users');
    usercart.innerHTML = " ";
    users.map((input) => {
        let userdiv = document.createElement('div')
        userdiv.classList.add('user');
        let namepara = document.createElement('p');
        namepara.innerText = input.name;
        let emailpara = document.createElement('p');
        emailpara.innerText = input.email;
        let citypara = document.createElement('p');
        citypara.innerText = input.City;



        usercart.appendChild(userdiv);
        userdiv.appendChild(namepara);
        userdiv.appendChild(emailpara);
        userdiv.appendChild(citypara);

    })

}

