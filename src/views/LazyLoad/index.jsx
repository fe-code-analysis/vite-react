import React, {Suspense, lazy} from "react"

const List = lazy(() => import('./List'))

const LazyLoad = () => {
  return(
    <>
      <h3>LazyLoad</h3>
      <Suspense fallback={<div>Loading ...</div>}>
        <List />
      </Suspense>
    </>
  )
}

export default LazyLoad