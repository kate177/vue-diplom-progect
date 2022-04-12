export default {
    mounted(el){
        const delay = 150
        const {top, height} = el.getBoundingClientRect()
        let value = 0
        let coord = window.scrollY + top
        window.addEventListener('scroll', getScroll)
        function getScroll () {
            let now = Date.now()
            if(window.scrollY >= coord){
                if(now > value + delay){
                    document.body.style.marginTop = `${height}px`
                    el.classList.add('fixed')
                    value = now
                }
            } else {
                el.classList.remove('fixed')
                document.body.style.marginTop = null
            }
        }
    },
}