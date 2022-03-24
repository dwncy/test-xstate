import { useActor } from "@xstate/react"
import React, { useContext } from "react"
import { FilterPage } from "../components/FilterPage"
import { ResultPage } from "../components/ResultPage"
import { GlobalStateContext } from "../providers/Provider"

export function MovementPage() {
  const { dummyService } = useContext(GlobalStateContext)
  const [state] = useActor(dummyService)

  if (state.matches('Filter Page'))
    return <FilterPage />

  if (state.matches('Result Page'))
    return <ResultPage />

  return null
}
