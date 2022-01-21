import { ref } from '@nuxtjs/composition-api'
export default function useToggle(defaultValue: boolean = false) {
  const value = ref(defaultValue)
  const toggle = (toggleValue?: any) => {
    if (typeof toggleValue !== 'boolean') value.value = !value.value
    else value.value = toggleValue
  }

  return [value, toggle] as const
}
