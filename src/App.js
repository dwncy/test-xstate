import React from 'react'
import { GlobalStateProvider } from './providers/Provider'
import { MovementPage } from './containers/MovementPage'

function App() {
  return (
    <GlobalStateProvider>
      <MovementPage />
    </GlobalStateProvider>
  )
}

export default App
