import "./categoriesPage.css";
import Navigation from "../../components/Navigation/Navigation";

import CategoriesSection from "../../components/CategorySection/CategoriesSection";

const CategoriesPage = () => {
  return (
    <div className="categoriesPage">
      <Navigation />
      <CategoriesSection />
    </div>
  );
};

export default CategoriesPage;
