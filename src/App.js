import './App.css';
import Title from './components/Title';
import Div from './components/Div';
import Link from './components/Link';
import Image from './components/Image';
import Para from './components/Para';

function App() {
  return (
    <div className="App">
         <Title title = "First React App" description= "This is the first React Lab"/>
         <Div uname="User Name" pwd="Password" btntitle = "Submit"/>
         <Link alink="https://react-tutorial.app/" title="Learn Here" /><br/><br/>
         <Image isrc="https://daviseford.com/blog/public/img/thumbnails/misc/react-logo.png"/>
         <Para desc="React is an open source, JavaScript library for developing user interface (UI) in web application. React is developed and released by Facebook. Facebook is continuously working on the React library and enhancing it by fixing bugs and introducing new features. This tutorial starts with the architecture of React, how-to guide to setup projects, creating components, JSX and then walks through advanced concepts like state management, form programming, routing and finally conclude with step by step working example"/>
    </div>
  );
}

export default App;
