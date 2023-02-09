import {ACButton, ACChip, ACColor, ACTypography} from "../../atoms";
import "./card.css"

function ACCard({chipTitle, title, price, color}) {
  return (
    <div className="jc-card-container">
        <div className="color">
            <ACColor color={color}/>
            </div>
        <div className="group">
            <div>
                <ACChip text={chipTitle}/>
            </div>
            <div>
                <ACTypography text={title} variant="h2"/>
            </div>
            <div>
                <ACTypography text={"$" + price} variant="p"/>
            </div>
            <div>
                <ACButton text="Add to Cart" color="rgb(250, 204, 21)"/>
            </div>
        </div>
    </div>
  )
}

export default ACCard