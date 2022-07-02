import './App.css';
import { useState } from "react";
import Navbar from './nav';
import RenderPage from './RenderPage';

function App(props) {
  const page_url = "https://www.oidc.co.kr/home";
  const [styleSheet, setStyle] = useState({});


  const event_controller = (e, func)=>{
    if(func === "show_origin_page"){
      console.log("show_origin_page");
      setStyle({
        "background":"red",
      })
    } else if(func === "restrict_blick"){
      console.log("restrict_blick");
    } else if(func === "contrast_color_up"){
      console.log("contrast_color_up");
    } else if(func === "contrast_color_down"){
      console.log("contrast_color_down");
    } else if(func === "contrast_brightness_up"){
      console.log("contrast_brightness_up");
    } else if(func === "contrast_brightness_down"){
      console.log("contrast_brightness_down");
    } else if(func === "font_sizing_up"){
      console.log("font_sizing_up");
    } else if(func === "font_sizing_down"){
      console.log("font_sizing_down");
    }
  }

  const nav = <Navbar e={event_controller}/>
  const render_page = <RenderPage src={page_url} sheet={styleSheet}/>

  return (
    <div className="App">
      {nav}
      {render_page}
    </div>
  );
}

export default App;
