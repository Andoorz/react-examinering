import { ErrorBoundary } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import ErrorFallback from './Components/ErrorFallback'
import AppRoutes from './AppRoutes'

function App() {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App