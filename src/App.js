import './App.css';
import { useState } from "react";
import RenderPage from './RenderPage';
import ToolBar from './toolBar';
import request_style from './api/requestStyle';

const request_url = 'http://127.0.0.1:4000/';
const api = {
  dark: ['color', 'dark'],
  color_weakness: ['color', 'color_weakness'],
  origin: ['color', 'original'],
  high_contrast: ['color', 'high_contrast'],
  text_sizing: ['text', 'text_size']
};

const overEvent = (e)=>{
  e.target.style.borderRadius = '8px';
  e.target.style.boxShadow = "0.5px 0.5px 10px 5px orange";
}

const outEvent = (e)=>{
  e.target.style.borderRadius = '';
  e.target.style.boxShadow = "";
}

let tempOrignPage = "";

function App() {
  const [textSize, setTextSize] = useState(100);
  const [renderHTML, setHTML] = useState("");

  const initOriginPage = (pageHTML) => {
    tempOrignPage = pageHTML;
    setHTML(pageHTML);
  }

  const requestAPI = async (api_event, current_url)=>{
    let res;
    if(api_event[2]){
      setTextSize(api_event[2]);
    }

    if(api_event[1] === 'original'){
      res = request_style(request_url, tempOrignPage, [...api.text_sizing, textSize])
    } else {
      res = request_style(request_url, renderHTML, api_event, current_url);
    }

    res.then((res)=>{
      return res.text();
    })
    .then((html)=>{
      setHTML(html);
    })
  }

  const focusTarget = (e) => {
    if(e.target.checked) {
      window.addEventListener("mouseover", overEvent)
      window.addEventListener("mouseout", outEvent)
    } else {
      window.removeEventListener("mouseover", overEvent);
      window.addEventListener("mouseout", outEvent);
    }
  }

  const render_page = <RenderPage server={request_url} render={initOriginPage} body={renderHTML}/>
  const tool_maneger = <ToolBar e={requestAPI} api={api} />;

  return (
    <div className="App-madebymermaid">
      <header className='header'>
        <a className='logo' href="/">
        <h1 className='title'>WAIS</h1>
        <img className='logo_img' src='./mermaid_pirate.png' alt="group_logo"></img>
        </a>
        <form className='service_form form_add_style' action="/searching">
          <input type="url" name="search" placeholder="Enter the Site..."></input>
          <input type="submit" value="search"></input>
        </form>

        <label className="toggle-focus-effect">
          <label style={{"visibility": "hidden", "position":"absolute"}}>??????????????????</label>
          <input type="checkbox" onClick={focusTarget} />
          <span className="slider round"></span>
        </label>
        
        <div tabIndex={0} id="tool-box">
          {tool_maneger}
        </div>
      </header>
      
      <div className='contents'>
        {render_page}
      </div>
    </div>
  );
}

export default App;
