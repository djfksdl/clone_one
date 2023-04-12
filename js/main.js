const header = document.querySelector('header'), 
mainMenuList = document.querySelectorAll('.mainmenu'),
subMenu = document.querySelectorAll('.submenu')
// console.log(header, mainMenuList, subMenu)
let headerHeight = header.offsetHeight;
// console.log(headerHeight)
let subMenuHeight = 0;
console.log(subMenu.length)
for(let i = 0; i < subMenu.length; i++){
    if(subMenu[i].offsetHeight > subMenuHeight){
        subMenuHeight = subMenu[i].offsetHeight
    }
}
for(let i = 0; i < mainMenuList.length; i++){
    mainMenuList[i].addEventListener('mouseover',function(){
        header.style.height=headerHeight + subMenuHeight + 22 +'px'
    })
    mainMenuList[i].addEventListener('mouseout',function(){
        header.style.height=headerHeight +'px'
    })
}
// 고탑버튼
$(function () {
    $(window).scroll(function(){
        if($(this).scrollTop()>=300){
            $('.gotop_btn').fadeIn(300)
        }else{
            $('.gotop_btn').fadeOut(300)
        }
        
    })
    $('.gotop_btn').click(function(e){
        e.preventDefault()
        $('html, body').stop().animate({scrollTop:0},500)
    })
});
