import Data from "../../data/socialMedia.json";

export default function Footer() {
  const icons = Data.map((item) => (
    <li key={item.id}>
      <a href={item.href} target="_blank">
        <img
          src={require(`../../assets/images/social media/${item.image}`)}
          alt={item.altText}
        />
      </a>
    </li>
  ));
  return (
    <footer>
      <h3>Follow us</h3>
      <ul className="icons">{icons}</ul>
      <span className="copyright">&copy; 2023 - Vegan Foods</span>
    </footer>
  );
}
