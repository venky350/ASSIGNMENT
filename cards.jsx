import React from "react";
import styles from './sample1.module.css'
function Card(props){
    const {places}=props
    return(
        <div className={styles.cards}>
            <div className={styles.imge}>
                <img src={places.image} alt="placeimg" style={{height:"250px",width:"380px"}}></img>
                </div>
            <div>
            <p className={styles.name}>{places.name}</p>
            <p className={styles.loc}><span>Edyoda </span>|{places.website_date}</p>
            <p id={styles.descript}>{places.description}</p>
            </div>
           
        </div>
    );
}
export default Card;