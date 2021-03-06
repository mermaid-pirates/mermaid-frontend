import RangeSlider from './RangeSlider';
import ToggleButtons from './ToggleButtons';


function ToolBar(props){
    const toggles_list = [
        {label: "원본모드", api: props.api.origin},
        {label: "다크모드", api: props.api.dark},
        {label: "색맹모드", api: props.api.color_weakness},
        {label: "고대비모드", api: props.api.high_contrast}
    ];

    const ranges_list = [
        {label: "글자크기", api: props.api.text_sizing},
    ]

    const ranges = ranges_list.map((el, idx)=>{
        return <RangeSlider 
            key={idx}
            label={el.label}
            e={props.e}
            api={el.api}
        />;
    })


    return(
        <div className="tool-bar">
            <div className='burger'>
                <img src='./burger.png' alt='도움메뉴'></img>
            </div>
            <div className='burger-list'>
                <ToggleButtons e={props.e} list={toggles_list}></ToggleButtons>
                {ranges}
            </div>
            
        </div>
    )
}

export default ToolBar;