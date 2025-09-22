import { useState } from "react";
import SymptomsEntry from "./SymptomsEntry";
import type { SymptomsEntryData } from "@/types/types";
import SymptomsHistory from "./SymptomsHistory";
import SymptomsChart from "./SymptomsChart";
import SymptomsHistoryModal from "./SymptomsHistoryModal";

const Dashboard = () => {
  const [symptomsEntry, setSymptomsEntry] = useState<SymptomsEntryData[]>([]);

  return (
    <>
      <div className="grid grid-cols-2 justify-content gap-10 p-4">
        <SymptomsEntry setSymptomsEntry={setSymptomsEntry} />
        <SymptomsHistoryModal>
          <SymptomsHistory symptomsEntries={symptomsEntry} />
        </SymptomsHistoryModal>
      </div>
      <div className="grid grid-cols-1 p-4 justify-end gap-10">
        <SymptomsChart symptomsEntries={symptomsEntry} />
      </div>
    </>
  );
};

export default Dashboard;
