/*
    filename: appclients.js
    Student name: Rudy Huayhua
    Student id: 301229804
    Date: Feb 05, 2022
*/ 
console.log('This goes to client side.');

if(getTitle == "Inventory List"){
    let deleteButtons = document.querySelectorAll('.btn-danger');
    
    console.log('This is Inventory List page.');
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}

if(getTitle == "Sign-up Form")
{
    console.log('This is Sign-up form.');
    const confirm = document.querySelector('input[name=password_confirm]');
    confirm.addEventListener('change', onChange); 
}


function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');
    
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
}