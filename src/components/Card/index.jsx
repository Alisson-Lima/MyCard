import { Avatar } from "../Avatar/"
import { Text } from "../Text/"
import { Social } from "../Social/"
import "./style.css"
export function Card(){
    return(
        <div className="card">

            <Avatar />
            <Text />
            <Social />

        </div>
    )
}