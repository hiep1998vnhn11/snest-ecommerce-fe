import Vue from 'vue'
//lazyload directive for vue using observer
export default Vue.directive('lazy', {
  bind(el) {
    el.classList.add('lazyload')
  },
  inserted: function (el, binding) {
    const nodeName = el.nodeName.toLowerCase()
    if (nodeName !== 'img') return
    const io = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = binding.value
            img.classList.remove('lazyload')
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '200px',
      }
    )
    io.observe(el)
  },
})
