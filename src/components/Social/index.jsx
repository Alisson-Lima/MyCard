import { IconsSOcial } from "../IconsSocial/"
import "./style.css"
export function Social(){
    return(
        <div className="socialContainer">
            <a href="https://github.com/Alisson-Lima" target='_blank'><IconsSOcial icon={2} /></a>
            <a href="https://www.instagram.com/alissonb.lima/" target='_blank'><IconsSOcial icon={3} /></a>
            <a href="https://www.linkedin.com/in/alisson-renan-537712234/" target='_blank'><IconsSOcial icon={4} /></a>
        </div>
    )
}