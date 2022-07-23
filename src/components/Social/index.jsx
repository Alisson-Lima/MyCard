import { IconsSOcial } from "../IconsSocial/"
import "./style.css"
export function Social(){
    return(
        <div className="socialContainer">
            <IconsSOcial icon={1} />
            <IconsSOcial icon={2} />
            <IconsSOcial icon={3} />
            <IconsSOcial icon={4} />
        </div>
    )
}