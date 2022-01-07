import React from 'react'
import ThemedButton from './themed-button'
function Toolbar(props) {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>
}
export default Toolbar
