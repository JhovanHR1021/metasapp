/* eslint-disable react/prop-types */
function Principal({children}) {

    return (
      <div>
        <sidenav>
            <a href="/lista">Lista</a>
            <a href="/crear">crear</a>
        </sidenav>
        <main> {children} </main>
      </div>
    )
  }
  
  export default Principal;