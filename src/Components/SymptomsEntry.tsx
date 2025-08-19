import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Textarea } from "./ui/textarea";

const SymptomsEntry = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Symptom Entry</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4 pb-4">
            <Label htmlFor="Date">Date</Label>
            <Input type="date" name="Date" className="w-full mt-2 mb-4" />

            <Label htmlFor="Severity">Severity</Label>
            <Slider defaultValue={[5]} max={10} step={1} />

            <Label htmlFor="Notes" className="w-full mt-2 mb-4">
              Notes
            </Label>
            <Textarea placeholder="Type your description here" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SymptomsEntry;
