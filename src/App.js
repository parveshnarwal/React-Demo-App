import React, { useReducer } from "react"
import HookCounter from "./component/Basics/HookCounter"
import HookCounterAdvance from "./component/Basics/HookCounterAdvance"
import HookCounterWithStateAsArray from "./component/Basics/HookCounterWithStateAsArray"
import HookCounterWithStateAsObject from "./component/Basics/HookCounterWithStateAsObject"
import ParentComponent from "./component/UseCallbackHookDemo/ParentComponent"
import HookMouse from "./component/useEffectHooks/HookMouse"
import IntervalHookCounter from "./component/useEffectHooks/IntervalHookCounter"
import MouseContainer from "./component/useEffectHooks/MouseContainer"
import CounterUseMemo from "./component/useMemoHookDemo/CounterUseMemo"
import ComponentC from "./component/useContextHooks/ComponentC"
import Counter from "./component/useReducer/Counter"
import CounterWithComplexState from "./component/useReducer/CounterWithComplexState"
import CounterWithComplexStateAndAction from "./component/useReducer/CounterWithComplexStateAndAction"
import DataFectchingWithUseReducer from "./component/useReducer/DataFectchingWithUseReducer"
import DataFecthingTwo from "./component/useReducer/DataFecthingTwo"
import MultipleCounters from "./component/useReducer/MultipleCounters"
import UsingMultipleUseReducers from "./component/useReducer/UsingMultipleUseReducers"
import ComponentA from './component/useReducerWithuseContext/ComponentA'
import ComponentB from "./component/useReducerWithuseContext/ComponentB"
import UseRefDemo from "./component/UseRefDemo"
import DocTitleOne from "./component/CustomHookDemo/DocTitleOne"
import DocTitleTwo from "./component/CustomHookDemo/DocTitleTwo"
import CounterOne from "./component/CustomHookDemo/CounterOne"
import CounterTwo from "./component/CustomHookDemo/CounterTwo"
import UserForm from "./component/CustomHookDemo/UserForm"
//import ComponentC from "./component/useReducerWithuseContext/ComponentC"

export const UserContext = React.createContext()

export const CounterContext = React.createContext()

const initialState = 0

const reducer = (state, action) => {

  switch (action) {
    case 'INCREMENT':
      return state + 1

    case 'DECREMENT':
      return state - 1

    case 'RESET':
      return initialState

    default:
      return state
  }
}



const App = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserForm/>
    </>

    // <>
    //   <CounterContext.Provider 
    //   value={{
    //     countState: count,
    //     countDispatch: dispatch
    //   }}>
    //     Counter : {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </CounterContext.Provider>
    // </>
  )
}

export default App