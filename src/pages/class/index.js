import React from 'react'
// class 的 setState 是 浅合并
export default class Class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      s: {
        a: 1,
        b: 2,
        c: 3,
      },
      t: 1,
    }
  }
  componentDidMount() {
    console.log(this.state)
  }
  componentDidUpdate(a, b, c) {
    console.log(a, b, c, this.state)
  }
  render() {
    return (
      <>
        <p>{JSON.stringify(this.state)}</p>
        <button
          onClick={() =>
            this.setState(
              (state, props) => {
                console.log(state, props)
                return { s: { a: 4 } }
              },
              (a, b, c) => {
                console.log(a, b, c, this.state.s)
              }
            )
          }
        >
          setState(function)
        </button>
        <button
          onClick={() =>
            this.setState({ s: { a: 4 } }, (a, b, c) => {
              console.log(a, b, c, this.state.s)
            })
          }
        >
          setState(object)
        </button>
      </>
    )
  }
}
