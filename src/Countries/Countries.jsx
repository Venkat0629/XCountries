import styles from "./Countries.module.css";
import Card from "./Card/Card";

export default function Countries({ data }) {
  if (!Array.isArray(data)) {
    return <div className={styles.wrapper}>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      {data.map((country) => (
        <Card key={country.cca3} cardData={country} />
      ))}
    </div>
  );
}
