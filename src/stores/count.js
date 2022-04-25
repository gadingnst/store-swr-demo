import useStore from "@gadingnst/store-swr"

const useCount = (initial = 0) => useStore({
  key: "@app/count", // (Required) state key
  initial, // <- (Required) initial state
  persist: false // <- (Optional) if you want to persist the state to local storage, then set it to true.
})

export default useCount
