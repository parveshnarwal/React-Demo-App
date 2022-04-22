import React from "react"
import HookCounter from "./component/Basics/HookCounter"
import HookCounterAdvance from "./component/Basics/HookCounterAdvance"
import HookCounterWithStateAsArray from "./component/Basics/HookCounterWithStateAsArray"
import HookCounterWithStateAsObject from "./component/Basics/HookCounterWithStateAsObject"
import HookMouse from "./component/useEffectHooks/HookMouse"
import IntervalHookCounter from "./component/useEffectHooks/IntervalHookCounter"
import MouseContainer from "./component/useEffectHooks/MouseContainer"
import ComponentC from "./component/useContextHooks/ComponentC"
import Counter from "./component/useReducer/Counter"
import CounterWithComplexState from "./component/useReducer/CounterWithComplexState"
import CounterWithComplexStateAndAction from "./component/useReducer/CounterWithComplexStateAndAction"
import MultipleCounters from "./component/useReducer/MultipleCounters"
import UsingMultipleUseReducers from "./component/useReducer/UsingMultipleUseReducers"

export const UserContext = React.createContext()


const App = () => {
  return (
    <>
      {/* <UserContext.Provider value={'Parvesh'}>
        <ComponentC />
      </UserContext.Provider> */}
      <UsingMultipleUseReducers/>
    </>
  )
}

export default App