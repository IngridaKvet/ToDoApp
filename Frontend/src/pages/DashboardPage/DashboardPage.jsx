import "./dashboardPage.css";
import Navigation from "../../components/Navigation/Navigation";

import Construction from "../../components/Construction/Construction";

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <Navigation />
      <Construction />
    </div>
  );
};

export default DashboardPage;
