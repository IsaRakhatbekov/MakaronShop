let userhtml = document.querySelector('.username')

let nav = document.querySelector('.header__nav')

let user = JSON.parse(localStorage.getItem('user'))
let showUser = ()=>{
    user?userhtml.textContent = user.username:''
}
showUser()
        
let form = document.querySelector('form')
let  logout = document.querySelector('.btn__logout')
    logout.addEventListener('click',()=>{

    localStorage.removeItem('user')
    userhtml.textContent = ''
})
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    let newUser = {
        username:form[0].value,
        city:form[1].value,
        email:form[4].value,
        company:form[3].value,
        phone:form[2].value,
        password:form[5].value
    }
    
    fetch('https://macaron.onrender.com/api/users/reg/',{
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
            'Content-Type': 'application/json',
        }
    }).then((res)=>res.json())
    .then((data)=>localStorage.setItem('user',JSON.stringify(data)))
    showUser()

})