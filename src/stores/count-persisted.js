import useStore from "@gadingnst/store-swr"

const useCountPersist = () => useStore({
  key: "@app/count-persisted", // (Required) state key
  initial: 0, // <- (Required) initial state
  persist: true // <- (Optional) if you want to persist the state to local storage, then set it to true.
})

export default useCountPersist
