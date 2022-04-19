import HookCounter from "./component/Basics/HookCounter"
import HookCounterAdvance from "./component/Basics/HookCounterAdvance"
import HookCounterWithStateAsArray from "./component/Basics/HookCounterWithStateAsArray"
import HookCounterWithStateAsObject from "./component/Basics/HookCounterWithStateAsObject"
import HookMouse from "./component/useEffectHooks/HookMouse"
import IntervalHookCounter from "./component/useEffectHooks/IntervalHookCounter"
import MouseContainer from "./component/useEffectHooks/MouseContainer"

const App = () => {
  return (
    <>
      <IntervalHookCounter/>
    </>
  )
}

export default App