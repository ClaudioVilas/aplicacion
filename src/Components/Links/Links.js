import './Links.css'

const Links = (props) => {
   return <div onClick = {props.func}>{props.children}</div>
}

export default Links 