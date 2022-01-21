import { ref } from '@nuxtjs/composition-api'
export default function useArray<T>(initialValue: T[]) {
  const array = ref<T[]>(initialValue)
  const push = (value: any) => {
    array.value.push(value)
  }
  const pop = () => {
    array.value.pop()
  }
  const shift = () => {
    array.value.shift()
  }

  const unshift = (value: any) => {
    array.value.unshift(value)
  }

  return {
    array,
    push,
  }
}
