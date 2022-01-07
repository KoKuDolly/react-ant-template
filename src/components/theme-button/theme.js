import React from 'react'
import { ThemeContext, themes } from './theme-context'
import ThemedButton from './themed-button'
import Toolbar from './Toolbar'
import Content from './content'

class Theme extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
    }

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))
    }
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <>
        <ThemeContext.Provider value={this.state}>
          <Toolbar changeTheme={this.toggleTheme} />
          <Content />
        </ThemeContext.Provider>
        <ThemedButton>you zi</ThemedButton>
      </>
    )
  }
}
export default Theme
