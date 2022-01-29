import { useEffect } from "react/cjs/react.development"

const PageUnload = () => {
  useEffect(() => {
    window.addEventListener('beforeunload', (event) => {
      console.log(2);
      // Cancel the event as stated by the standard.
      event.preventDefault();
      // Chrome requires returnValue to be set.
      event.returnValue = '3232323';
    });

    window.addEventListener('visibilitychange', (event) => {
      console.log(document.visibilityState);
      // Cancel the event as stated by the standard.
    });
  }, [])
  return(
    <>
      <h3>PageUnload</h3>
    </>
  )
}

export default PageUnload