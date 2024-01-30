import styles from "./Card.module.css";

export default function Card({ cardData }) {
  return (
    <div className={styles.countryCard}>
      <img
        src={cardData.flags.png}
        alt={cardData.flags.alt}
        className={styles.image}
      />
      <h4 className={styles.title}>{cardData.name.common}</h4>
    </div>
  );
}
