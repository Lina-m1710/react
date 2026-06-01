import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import TaskBoard from './TaskBoard'

export default function TaskManager() {
  return (
    <>
      <ErrorBoundary fallback={<p>Something went wrong...</p>}>
        <Suspense fallback={<p>Loading tasks...</p>}>
          <TaskBoard />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
