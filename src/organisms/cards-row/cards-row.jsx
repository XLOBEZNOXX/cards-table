import { ACCard } from "../../molecules"
import "./cards-row.css"

function ACCardsRow({cardProperties}) {
  return (
    <div className="cards-row">
       {
        cardProperties.map((cp) =>
        <ACCard chipTitle={cp.chipTitle} title={cp.title} color={cp.color} price={cp.price} />
      )}
    </div>
  )
}

export default ACCardsRow