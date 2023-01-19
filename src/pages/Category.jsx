import CategoryDetails from "../components/CategoryDetails";
import ProductsList from "../components/ProductsList";

export default function Catergory({ categoryId }) {
  return (
    <div>
      <CategoryDetails categoryId={categoryId} />
      <ProductsList categoryId={categoryId} />
    </div>
  );
}
