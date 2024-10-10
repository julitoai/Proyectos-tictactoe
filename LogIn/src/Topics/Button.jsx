
function  Button(props) {
return (
<>
<button className="button-topics">{props.content}</button>
{props.isSelected}
</>
)
 
}

export default Button;