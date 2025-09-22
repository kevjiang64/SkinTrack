import { LineChart, CartesianGrid, XAxis, Line } from "recharts";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart";
import type { DateEntryDate, SymptomsEntryData } from "@/types/types";
import { useEffect, useState } from "react";
import { monthNames } from "@/types/constants";

interface SymptomsChartProps {
  symptomsEntries: SymptomsEntryData[];
}

const SymptomsChart = ({ symptomsEntries }: SymptomsChartProps) => {
  const [dates, setDates] = useState<DateEntryDate[]>([]);

  const formatDate = () => {
    symptomsEntries.map((entry: SymptomsEntryData) => {
      setDates([
        ...dates,
        {
          date: entry.date,
          month: monthNames[new Date(entry.date).getMonth()].slice(0, 3),
          severity: entry.severity,
        },
      ]);
    });
  };

  useEffect(() => {
    formatDate();
  }, [symptomsEntries]);

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skin Progression</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={dates}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="severity"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SymptomsChart;
