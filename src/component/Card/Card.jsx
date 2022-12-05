import "./Card.css";
import CardInner from "./CardInner";


function Card(props) {
  return (
    <div className="block">
      {props.Card.map((item) => {
        return (
          <CardInner item={item}  key={item.id}/>
        );
      })}
    </div>
  );
}

export default Card;