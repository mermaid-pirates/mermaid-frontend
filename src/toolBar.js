import ToggleSwitch from './ToggleSwitch';
import RangeSlider from './RangeSlider';

function ToolBar(props){
    const toggles_list = [
        {label: "원본페이지보기", api: props.api.origin},
        {label: "다크모드", api: props.api.dark},
        {label: "색맹모드", api: props.api.color_weakness},
        {label: "고대비모드", api: props.api.high_contrast}
    ];

    const ranges_list = [
        {label: "글자크기", api: props.api.text_sizing},
    ]

    const toggles = toggles_list.map((el, idx)=>{
        return <ToggleSwitch key={idx} label={el.label} e={props.e} api={el.api}/>; 
    })

    const ranges = ranges_list.map((el, idx)=>{
        return <RangeSlider key={idx} label={el.label} e={props.e} api={el.api}/>;
    })


    return(
        <div className="tool-bar">
            {toggles}
            {ranges}
        </div>
    )
}

export default ToolBar;