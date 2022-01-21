import Vue from 'vue'

const validateDirective = (binding: any) => {
  if (typeof binding.value !== 'function') {
    console.warn('[vue-click-outside] provided expression must be a function')
    return false
  }
  return true
}
function isPopup(popupItem: any, elements: any) {
  if (!popupItem || !elements) return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch (e) {
      return false
    }
  }

  return false
}

function isServer(vNode: any) {
  return (
    typeof vNode.componentInstance !== 'undefined' &&
    vNode.componentInstance.$isServer
  )
}

export default Vue.directive('clickOutside', {
  bind: function (el: any, binding: any, vnode) {
    if (!validateDirective(binding)) return

    const handler = (event: any) => {
      if (!vnode.context) return

      const elements =
        event.path || (event.composedPath && event.composedPath())
      elements && elements.length > 0 && elements.unshift(event.target)
      if (
        el.contains(event.target) ||
        isPopup((vnode.context as any).popupItem, elements)
      ) {
        return
      }

      el.__vueClickOutside__.callback(event)
    }
    el.__vueClickOutside__ = {
      handler,
      callback: binding.value,
    }

    const clickHandler =
      'ontouchstart' in document.documentElement ? 'touchstart' : 'click'
    !isServer(vnode) && document.addEventListener(clickHandler, handler)
  },
  update: function (el: any, binding) {
    if (validateDirective(binding)) {
      el.__vueClickOutside__.callback = binding.value
    }
  },
  unbind: function (el: any, _, vnode) {
    const clickHandler =
      'ontouchstart' in document.documentElement ? 'touchstart' : 'click'
    !isServer(vnode) &&
      document.removeEventListener(clickHandler, el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  },
})
