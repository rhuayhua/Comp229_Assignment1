/*
    filename: appclients.js
    Student name: Rudy Huayhua
    Student id: 301229804
    Date: Feb 19, 2022
*/ 
console.log('This goes to client side.');
console.log(getTitle);

// We compare if page title is "Business Contacts" or "Update Contact" to verify delete action
if(getTitle == "Business Contacts" || "Update Contact"){
    let deleteButtons = document.querySelectorAll('.btn-danger');
    
    console.log('This is ...');
    console.log(getTitle);
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

// We compare if page title is  "Sign-up Form" to verify if password and password_confirm are different
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