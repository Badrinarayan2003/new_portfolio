import { FaLocationArrow } from "react-icons/fa6";


const Button = ({ name }) => {
    return (
        <button className="multi-btn">{name}<span><FaLocationArrow /></span></button>
    )
}
export default Button;