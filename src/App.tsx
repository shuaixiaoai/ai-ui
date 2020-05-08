import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button autoFocus btnType={ButtonType.Default} className="hahah">Hello</Button>
      <Button btnType={ButtonType.Primary}>Hello</Button>
      <Button btnType={ButtonType.Danger}>Hello</Button>
      <hr />
      <Button btnType={ButtonType.Default} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}> Hello</Button>
      <hr />
      <Button btnType={ButtonType.Default} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Hello</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Hello</Button>
      <hr />
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled>Hello</Button>
      <hr />
      <Button btnType={ButtonType.Link} href="www.baidu.com">BaiDu Link</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com" disabled>BaiDu Link</Button>
      <h2>Hello World!</h2>
      <h3>Hello World!</h3>
      <hr />
      <code>
        const a = 'b'
      </code>
    </div>
  )
}

export default App
