const Props = {
    addContent: () => {},
    content: '',
    selected: false
}

const Button = ({addContent, content, selected}) => {
return (
<>
<button className="button-topics" onClick={()=>addContent(content)} selected={selected}>{content}</button></>
)
 
}

export default Button;