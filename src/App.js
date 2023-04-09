// import { createContext } from 'react'
// import CompA from './components/context-API/CompA'

// const firstName = createContext();
// const lastName = createContext();
// const App = () => {

//   return (
//     <div>
//       <h1>Context-API</h1>
//       <firstName.Provider value={"Dhananjay"}>
//         <lastName.Provider value={"Buraspatte"}>
//           <CompA />
//         </lastName.Provider>
//       </firstName.Provider>

//     </div>
//   )
// }

// export default App;
// export { firstName, lastName }


import React, { createContext } from 'react'
import CompA from './components/context-API/CompA';

const firstName=createContext();
const lastName=createContext();
const App = () => {

  return (
    <div>
      <h1>Context-API in React-Js</h1>
      <firstName.Provider value={'Dhananjay'}>
        <lastName.Provider value={'Buraspatte'}>
          <CompA/>
        </lastName.Provider>
      </firstName.Provider>
    </div>
  )
}

export default App
export {firstName,lastName}