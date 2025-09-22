import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Textarea } from "./ui/textarea";

interface SymptomsEntryProps {
  setSymptomsEntry: React.Dispatch<React.SetStateAction<any[]>>;
}

const SymptomsEntry = ({ setSymptomsEntry }: SymptomsEntryProps) => {
  const [date, setDate] = useState<string>("");
  const [severity, setSeverity] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSymptomsEntry((prev) => [...prev, { date, severity, notes }]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Symptom Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 pb-4">
            <Label htmlFor="Date">Date</Label>
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDate(e.target.value);
              }}
              type="date"
              name="Date"
              className="w-full mt-2 mb-4"
            />
            <Label htmlFor="Severity">Severity</Label>
            <Slider
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSeverity(parseInt(e.target.value));
              }}
              defaultValue={[severity]}
              max={10}
              step={1}
            />

            <Label htmlFor="Notes" className="w-full mt-2 mb-4">
              Notes
            </Label>
            <Textarea
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setNotes(e.target.value);
              }}
              placeholder="Type your description here"
            />

            <Button type="submit" value="submit" className="w-full">
              Add
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SymptomsEntry;
