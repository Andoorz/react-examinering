import type { FallbackProps } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error instanceof Error ? error.message : 'Ett okänt fel inträffade.'

  return (
    <main className="error-screen" role="alert">
      <div className="error-symbol">!</div>
      <p className="eyebrow">NÅGOT GICK FEL</p>
      <h1>Det blev ett litet avbrott.</h1>
      <p className="error-message">{message}</p>
      <button className="primary-button" onClick={resetErrorBoundary}>
        Försök igen <span aria-hidden="true">↻</span>
      </button>
    </main>
  )
}

export default ErrorFallback