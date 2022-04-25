import useCount from "../stores/count"

function GetCount() {
  const [count] = useCount()

  return (
    <div>
      <p>Current Count: {count}</p>
    </div>
  )
}

export default GetCount