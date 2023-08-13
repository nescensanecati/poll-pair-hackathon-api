import "./ResultsPage.scss";
import { Chart as ChartJS } from "chart.js/auto";
import Header from "../Header/Header";
import DataLoop from "../../components/DataLoop/DataLoop";

function ResultsPage() {
  return (
    <>
      <div className="results">
        <DataLoop />
      </div>
    </>
  );
}

export default ResultsPage;
