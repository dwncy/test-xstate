import React, { useContext } from "react"
import { GlobalStateContext } from "../providers/Provider"

export function FilterPage() {
  const { dummyService } = useContext(GlobalStateContext)
  const { send } = dummyService

  return (
    <div>
      <h1>This is Filter page</h1>
      <button onClick={() => send('submit')}>
        Submit
      </button>
    </div>
  )
}
