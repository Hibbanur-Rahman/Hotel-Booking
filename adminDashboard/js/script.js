var profileToolPit=document.querySelector('.profileToolPit');
var profileImgLeft=document.querySelector('.profileImgLeft');

profileImgLeft.addEventListener('click',()=>{
    console.log('hello img')
    console.log(profileToolPit.classList.contains('d-none'))
    if(profileToolPit.classList.contains('d-none')){
        profileToolPit.classList.remove('d-none');
    }
    else{
        profileToolPit.classList.add('d-none');

    }
})