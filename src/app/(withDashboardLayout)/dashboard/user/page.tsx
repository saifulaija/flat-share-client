"use client";


import { PieChart } from "@/components/PieChart/PieChart";
import { Card } from "@/components/ui/card";
import { useGetMetaQuery } from "@/redux/api/metaApi";
import { Album, AreaChart, BarChart, BarChart3, BarChartHorizontal, Dock } from "lucide-react";
import React from "react";

export default function UsrDashboardPage () {
  const { data, isLoading } = useGetMetaQuery(undefined);

  console.log(data)

  const mapDataToChartData = (data: any) => {
    if (!data) return [];

    return [
      {
        id: "sharedFlatCount",
        label: "AvailableFlat",
        value: data.sharedFlatCount,
        color: "hsl(312, 70%, 50%)",
      },
      {
        id: "bookedFlatCount",
        label: "Total request flat",
        value: data. bookedFlatCount,
        color: "hsl(358, 70%, 50%)",
      },
      {
        id: "sharedFlatAvailableCount",
        label: "Request Flat",
        value: data.sharedFlatAvailableCount,
        color: "hsl(34, 70%, 50%)",
      },
    ];
  };

  const chartData = mapDataToChartData(data);

  console.log(chartData)

  return (
    <div className="md:flex  gap-2 p-10">
      <div className="w-full md:max-w-[40%] md:w-full border p-5">
        <div className="h-[300px]  w-auto">
          <PieChart data={chartData} />
        </div>
      </div>

      <div className="w-full md:max-w-[60%] md:w-full space-y-4">
      <Card className="flex items-center justify-center p-4 shadow-lg bg-background rounded-lg">
    <div className="flex flex-col items-center">
      <AreaChart size={30} className="text-green mb-2" />
      <p className="text-xl font-semibold text-foreground">
        {data?.sharedFlatCount}
      </p>
    </div>
  </Card>
      <Card className="flex items-center justify-center p-4 shadow-lg bg-background rounded-lg">
    <div className="flex flex-col items-center">
      <BarChart3 size={30} className="text-primary mb-2" />
      <p className="text-xl font-semibold text-foreground">
        {data?.bookedFlatCount}
      </p>
    </div>
  </Card>
      <Card className="flex items-center justify-center p-4 shadow-lg bg-background rounded-lg">
    <div className="flex flex-col items-center">
      <BarChartHorizontal size={30} className="text-primary mb-2" />
      <p className="text-xl font-semibold text-foreground">
        {data?.sharedFlatAvailableCount}
      </p>
    </div>
  </Card>
        <div>

        </div>
      </div>
    </div>
  );
};

// export default UsrDashboardPage;
