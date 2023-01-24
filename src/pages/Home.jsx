import Hero from "../components/Hero";
import CategoriesList from "../components/CategoriesList";

// nothing to critize, but i think you could fit the whole home content here without need to break it into components
export default function Home() {
  return (
    <div id="home">
      <Hero />
      <CategoriesList />
    </div>
  );
}
