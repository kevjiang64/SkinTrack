import SymptomsChart from "./SymptomsChart";
import SymptomsEntry from "./SymptomsEntry";
import SymptomsHistory from "./SymptomsHistory";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-4 justify-content gap-10">
        <SymptomsEntry />
        <SymptomsHistory />
      </div>
      <div className="grid grid-cols-1 p-4 justify-end gap-10">
        <SymptomsChart />
      </div>
    </>
  );
};

export default Dashboard;
