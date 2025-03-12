const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if (username.value === '' || username.value == null){
        messages.push('Username is required')
    }
    
    if (password.value === '' || password.value == null){
        messages.push('Password is required')
    }

    if (password.value.length <= 6){
        messages.push('Password should be longer than 6 characters.')
    }

    if (password.value === 'password'){
        messages.push("Password can't be password.")
    }

    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
        errorElement.style.color = 'red'
        errorElement.style.marginBottom = '10px'
    }
})