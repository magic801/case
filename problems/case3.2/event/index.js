const EVENT_TYPE = {
  click: 'click',
  contextmenu: 'contextmenu'
}

const $btn = document.getElementById('btn')

function patchEvent(el, key, preValue, curValue) {
  const invokers = el._invoker || (el._invoker = {})
  let invoker = invokers[key]

  if (curValue) {
    if (!invoker) {
      invoker = el._invoker[key] = {
        fn: (e) => {
          invoker.value(e)
        },
        value: null
      }

      invoker.value = curValue
      el.addEventListener(key, invoker.fn)
    } else {
      invoker.value = curValue
    }
  } else {
    el.removeEventListener(key)
  }
}

function registerEvent(type, fn) {
  patchEvent($btn, type, null, fn)
}

registerEvent(EVENT_TYPE.click, function(e) {
  console.log(`${EVENT_TYPE.click}  out`)
})

registerEvent(EVENT_TYPE.contextmenu, function(e) {
  console.log(`${EVENT_TYPE.contextmenu}  out`)
  e.preventDefault()
})
