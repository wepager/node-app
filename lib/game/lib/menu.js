function menu() {
    var pr = document.createElement('menu')
    pr.icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-right">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
`
    pr.id = 'pr'
    for (var val of arguments) {
        var wrap = document.createElement('menu')
        wrap.id = 'wrap'
        pr.appendChild(wrap);
        for (var obj of val) {
            var ch = document.createElement('menu')
            ch.id = 'ch'
          //  ch.classList.add('h')
            ch.innerHTML = obj.name || 'no value';
            ch.addEventListener('click', obj.action || new Function())
            ch.innerHTML += obj.icon || pr.icon
            wrap.appendChild(ch)
        }
    }

 return function(parent,conf) {
   
    if (!conf) {
        pr.classList.add('h')
    }else{
       
    }
    
    if (parent) {
        parent.appendChild(pr)
    }
    
    return new (function() {
        this.clear = function () {
            pr.remove()
        }
this.append = function () {
      arguments[0].appendChild(pr)
}
        this.element = pr;
    })()

 }
}