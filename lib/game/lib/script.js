
function top4(elm) {
    console.log(elm);
}

function articleHeight() {
    var h = window.innerHeight - header.offsetHeight;
    // h = h - 80
    //h = h - 80
    h = h + "px"
    article.style.height = h;
}

articleHeight()
addEventListener('resize', articleHeight)
list.addEventListener('click',function() {
    //xmenu
//if (this.vis) {
  //  this.vis = false
    xmenu.clear()
//}else{
//this.vis = true
    xmenu.append(right)
    xmenu.element.$vis=true
//}
})

addEventListener('mousedown',function(e) {
e=e.target;
    e = e.localName;
e= e.toLowerCase()
if (e !== 'menu') {
    if (xmenu.element.$vis) {
        //animations here
        xmenu.clear();
}
}
})

//console.log(m1);