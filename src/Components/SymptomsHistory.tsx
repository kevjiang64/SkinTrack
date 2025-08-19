import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

const SymptomsHistory = () => {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb">
          <CardTitle className="font-medium">Symptoms History Log</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <Card className="mx-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-medium">Severity: 10</CardTitle>
            <CardDescription>2020:12:@3</CardDescription>
          </CardHeader>
        </Card>
      </Card>
    </>
  );
};

export default SymptomsHistory;
