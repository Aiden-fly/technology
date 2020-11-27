import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Button onClick={() => {alert(111)}}>Call me!</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Big</Button>
      <Button disabled>Disabled</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}> Small </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}> Danger </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com"> href </Button>
      <Button btnType={ButtonType.Link} disabled href="https://www.baidu.com"> baidu </Button>
      <Menu defaultIndex={0}>
        <MenuItem>menu1</MenuItem>
        <MenuItem>menu2</MenuItem>
        <MenuItem>menu3</MenuItem>
        </Menu>
    </div>
  );
}

export default App;
