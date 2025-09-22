import { Slider } from "@radix-ui/react-slider";
import type { Label } from "recharts";
import type { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface SymptomsHistoryModalProps {
  children: React.ReactNode;
}

const SymptomsHistoryModal = ({ children }: SymptomsHistoryModalProps) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        {/* <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader> */}
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
      </DialogContent>
    </Dialog>
  );
};

export default SymptomsHistoryModal;
