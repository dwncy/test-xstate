import { useActor } from "@xstate/react"
import React, { useContext } from "react"
import { GlobalStateContext } from "../providers/Provider"

export function ResultPage() {
  const { dummyService } = useContext(GlobalStateContext)
  const { send } = dummyService
  const [state] = useActor(dummyService)

  if (state.matches({ 'Result Page': 'edit Mode' })) {
    return (
      <>
        <h1>This is Result page [in edit mode]</h1>
        <button onClick={() => send('backFilter')}>
          Back to Filter page
        </button>
        <button onClick={() => send('close')}>
          Close
        </button>
      </>
    )
  }

  return (
    <>
      <h1>This is Result page [in view mode]</h1>
      <button onClick={() => send('backFilter')}>
        Back to Filter page
      </button>
      <button onClick={() => send('modify')}>
        Modify
      </button>
    </>
  )
}
