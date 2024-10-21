
function  Button(props) {
    let onclick = props.onClick
    let content = props.content
    let isselected = props.isSelected

return (
<>
<button onClick={onclick} className="button-topics">{content}</button>
{isselected}
</>
)
 
}

export default Button;