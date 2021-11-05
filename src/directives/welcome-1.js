const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('enter-show-1')
                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
);

export default {
    bind(el) {
        el.classList.add('before-enter-show-1')
        animatedScrollObserver.observe(el)
    }
}
