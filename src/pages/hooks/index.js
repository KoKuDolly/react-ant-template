import React, { useReducer, useState } from 'react'

// 1. useState 的理解 hooks 的 useState 方法是 替换
// 2. useEffect 的理解 useLayoutEffect
// 3. useReducer 的理解
export default function Hooks() {
  //   const [k, dispatchK] = useReducer()
  const [state, setState] = useState({ s: { a: 1, b: 2, c: 3 }, t: 1 })
  console.log(state)

  return (
    <>
      <p>{JSON.stringify(state)}</p>
      <button onClick={() => setState({ ...state, s: { a: 4 } })}>
        setState
      </button>
    </>
  )
}

// setState(updater, [callback]) callback === componentDidUpdate 但是 callback没有参数。这里的setState是 浅合并
// [state, setState] = useState 的 setState 方法只有一个参数，可以是函数!!!，这里的setState是 替换
