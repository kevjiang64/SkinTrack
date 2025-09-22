import type { SymptomsEntryData } from "@/types/types";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

interface SymptomsHistoryProps {
  symptomsEntries: SymptomsEntryData[];
}

const SymptomsHistory = ({ symptomsEntries }: SymptomsHistoryProps) => {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb">
          <CardTitle className="font-medium">Symptoms History Log</CardTitle>
        </CardHeader>
        {symptomsEntries.map((entry: SymptomsEntryData) => (
          <Card className="mx-4">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-medium">
                Severity: {entry.severity}
              </CardTitle>
              <CardDescription>{entry.date}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default SymptomsHistory;
