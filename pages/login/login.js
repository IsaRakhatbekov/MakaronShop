let form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let user = {
        username:form[0].value,
        password:form[1].value
    }

    fetch('https://macaron.onrender.com/api/users/login/',{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json',
        }
    }).then((res)=>res.json())
    .then((data)=>console.log(data))

})