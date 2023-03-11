// <!-- Phần chạy slide ảnh 
var index = 0;
changeImage = function(){
    var imgs = ["https://www.w3schools.com/w3images/ny.jpg", "https://www.w3schools.com/w3images/la.jpg", "https://www.w3schools.com/w3images/chicago.jpg"]; 
    var title1 = ['New York', 'Los Angeles', 'Chicago']
    var title2 = ['The atmostphere in New York is prolem ipon', 'We has the best time playing at Venice Beach', 'Thank you, Chicago - A night we wont forget']
    let imgId = document.querySelector('#img')
    const imgParent = img.parentElement
    const textHeading = imgParent.querySelector('.text-heading')
    const textDesc = imgParent.querySelector('.text-description')

    document.getElementById('img').src = imgs[index];
    index++

    if(index == 1) {
        textHeading.innerHTML = title1[0]
        textDesc.innerHTML = title2[0]
    } else if(index == 2) {
        textHeading.innerHTML = title1[1]
        textDesc.innerHTML = title2[1]
    } else {
        textHeading.innerHTML = title1[2]
        textDesc.innerHTML = title2[2]
    }

    if(index == 3){
        index = 0;
    }

}
setInterval(changeImage,2000);


// Phần ẩn hiện buy ticket
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal')
const modalHeader = document.querySelector('.js-modal-header')
const modalClose = document.querySelector('.js-modal-close')
// hàm hiển thị modal mua vé(thêm class open vào modal)
function showBuyTickets(){
    modal.classList.add('open')
}
// hàm ẩn modal mua vé(gỡ bỏ  class open vào modal)
function hideBuyTickets(){
    modal.classList.remove('open')
}
// Lặp qua từng thẻ button và nghee hành vi click
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets )
    
}
// nghe hành vi click vào button close
modalClose.addEventListener('click',hideBuyTickets)

// click bên ngoài thì đóng lại
modal.addEventListener('click',hideBuyTickets)

// click vô trong kh bi out ra 
modalHeader.addEventListener('click', function(event){
    event.stopPropagation()
})