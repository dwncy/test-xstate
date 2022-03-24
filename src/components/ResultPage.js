import { useActor } from "@xstate/react"
import React, { useContext, useRef } from "react"
import { GlobalStateContext } from "../providers/Provider"

export function ResultPage() {
  const { dummyService } = useContext(GlobalStateContext)
  const { send } = dummyService
  const [state] = useActor(dummyService)
  const inputRef = useRef()

  if (state.matches({ 'Result Page': 'origin hub Modal shown' })) {
    return (
      <>
        <div>Modal origin hub must be filled</div>
        <button onClick={() => send('noBtn')}>no</button>
        <button onClick={() => send('yesBtn')}>yes</button>
      </>
    )
  }

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
      <input name="originHub" ref={inputRef}></input>
      <button onClick={() => {
        if (!inputRef.current.value) {
          send('showOriginHubModal')
        } else {
          send('modify')
        }
      }}>
        Modify
      </button>
    </>
  )
}
