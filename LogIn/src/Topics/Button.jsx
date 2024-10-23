
function  Button(props) {
return (
<>
<button onClick={props.onClick} className="button-topics">{props.content}</button>
{props.isselected}
</>
)
 
}

export default Button;