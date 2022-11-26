console.log('script is running')

const burgerBtn = document.getElementById('burgerbtn')
const dropDown = document.getElementById('navbarBasicExample')





let drop = function(){

burgerBtn.addEventListener('click',function(){

    burgerBtn.classList.toggle('is-active')
    dropDown.classList.toggle('is-active')


})






console.log('drop is working')


} 


drop()
