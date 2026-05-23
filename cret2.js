const email = document.getElementById('email')
const password = document.getElementById('password')
const number = document.getElementById('number')

const emailpara = document.getElementById('emailpara')
const passpara = document.getElementById('passpara')
const numpara = document.getElementById('numpara')

const form = document.getElementById('form')
const subpara = document.getElementById('subpara')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    if(email.value==''|| password.value==''|| number.value==''){
        alert('please enter the details')
    }

let isvalid=true

    if (email.value === '') {
        alert('plese enter the email')
        isvalid=false
    }
    else if (/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(email.value)) {
        emailpara.innerHTML = 'email is correct'
        emailpara.style.color = `green`
    }
    else {
        emailpara.innerHTML = `email is not required`
        emailpara.style.color = `red`
        isvalid=false
    }



    if (password.value === '') {
        alert('plese enter the password')
          isvalid=false
    }
    else if (/^.{8,}$/.test(password.value)) {
        passpara.innerHTML = 'password is required 8 characters'
        passpara.style.color = `green`
    }
    else {
        passpara.innerHTML = `password is not required 8 characters`
        passpara.style.color = `red`
          isvalid=false
    }



    if (number.value === '') {
        alert('plese enter the number')
          isvalid=false
    }
    else if ( /^[0-9]{10}$/.test(number.value)) {
        numpara.innerHTML = 'number is min 10 characters'
        numpara.style.color = `green`
    }
    else {
        numpara.innerHTML = `number is not required`
        numpara.style.color = `red`
          isvalid=false
    }


    if (isvalid) {


    subpara.innerHTML = 'Successfully submitted'
    subpara.style.color = 'green'
    setTimeout(()=>{
        alert(' 💗🎉🤗THANK YOU🤗🎉💗')
    },2000)

} else {

  
    subpara.innerHTML = 'Unsuccessful submission'
    subpara.style.color = 'red'
}


})







