let $img = $('.slider img')
let $slider = $('.slider')
let current = 1
$slider.append($img.eq(0).clone(true))
    .prepend($img.eq($img.length - 1).clone(true))
$slider.css({ 'transform': 'translateX(-925px)' })
$($('ul li').eq(0)).addClass('active')
$('.slideBtn1').on('click', slide1)
$('.slideBtn2').on('click', slide2)




//下方滑动按钮
$('#nav1').on('click', () => {
    if (current === 3) {
        slideLeft()
        slideLeft()
    } else {
        slideLeft()
    }
})
$('#nav2').on('click', () => {
    if (current === 1) {
        slideRight()
    } else if (current === 3) {
        slideLeft()
    }
})
$('#nav3').on('click', () => {
    if (current === 1) {
        slideRight()
        slideRight()
    } else if (current === 2) {
        slideRight()
    }
})
//自动播放
let timer = setInterval(() => {
    slide2()
}, 2200)
$('.window').on('mouseenter', () => {
    window.clearInterval(timer)
})
    .on('mouseleave', () => {
        timer = setInterval(() => {
            slide2()
        }, 2200)
    })













//////////////////函数封装
function active(n) {
    if(n===3){
        $($(`ul li`).eq(0)).addClass('active').siblings().removeClass('active')
    }else{
        $($(`ul li`).eq(n)).addClass('active').siblings().removeClass('active')

    }
}

function slideLeft() {
    $slider.css({ 'transform': `translateX(-${(current - 1) * 925}px)` })
    active(current)
    current--
}
function slideRight() {
    $slider.css({ 'transform': `translateX(-${(current + 1) * 925}px)` })
    active(current)
    current++
}

//左右滑动按钮
function slide1() {
    if (current === 1) {
        active($img.length)
        $slider.css({ 'transform': 'translateX(0)' })
            .one('transitionend', () => {
                $slider.hide().offset()
                $slider.css({ 'transform': `translateX(-${($img.length - 1) * 925 + 925}px)` }).show()
                current = 3
            })
    }
    else { slideLeft() }
}
function slide2() {
    if (current === 3) {
        active(current)
        $slider.css({ 'transform': `translateX(-${($img.length + 1) * 925}px)` })
            .one('transitionend', () => {
                $slider.hide().offset()
                $slider.css({ 'transform': 'translateX(-925px)' }).show()
                current = 1
            })
    }
    else { slideRight() }
}