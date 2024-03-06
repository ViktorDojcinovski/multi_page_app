import { useState, createContext } from "react";

/**
 *
 * <Provider prop1={} prop2={} ... children={}>
 *  <div>
 *    <h1>...</h1>
 *    <p>...</p>
 *  </div>
 * </Provider>
 *
 * const Provider = ({ children }) => {
 *  // component logic
 *
 *  return (
 *    <>
 *      { implement logic }
 *      { children }
 *    </>
 *  )
 * }
 *
 */

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [someValue, setSomevalue] = useState("something");

  return (
    <AppContext.Provider value={[someValue, setSomevalue]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
