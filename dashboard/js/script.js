// new DataTable('#example', {
//   columnDefs: [
//       {
//           targets: [0],
//           orderData: [0, 1]
//       },
//       {
//           targets: [1],
//           orderData: [1, 0]
//       },
//       {
//           targets: [4],
//           orderData: [4, 0]
//       }
//   ]
// });
// let table = new DataTable('#example');
 
// table.on('click', 'tbody tr', function () {
//     let data = table.row(this).data();
 
//     alert('You clicked on ' + data[0] + "'s row");
// });

// $(":input").inputmask();
// $("#phone").inputmask({"mask": "(999) 999-9999"});


// var profilePhotoUpload=document.querySelector('#profilePhotoUpload');
// profilePhotoUpload.addEventListener('focus',()=>{
//     profilePhotoUpload.type='file';
// })

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