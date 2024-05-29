"use client";

import { PieChart } from "@/components/PieChart/PieChart";
import { Card } from "@/components/ui/card";
import { useGetMetaQuery } from "@/redux/api/metaApi";
import React from "react";

export default function AdminDashboardPage() {
  const { data, isLoading, error } = useGetMetaQuery(undefined);
  console.log(data);

  const mapDataToChartData = (data: any) => {
    if (!data) return [];

    return [
      {
        id: "totalUsers",
        label: "Total users",
        value: data.totalUsers,
        color: "hsl(312, 70%, 50%)",
      },
      {
        id: "totalActiveUsers",
        label: "Active users",
        value: data.totalActiveUsers,
        color: "hsl(358, 70%, 50%)",
      },
      {
        id: "totalDeActiveUsers",
        label: "DeActive users",
        value: data.totalDeActiveUsers,
        color: "hsl(34, 70%, 50%)",
      },
      {
        id: "totalFlats",
        label: "Total Flats",
        value: data.totalFlats,
        color: "hsl(14, 0%, 70%)",
      },
      {
        id: "totalRequestFlats",
        label: "Request Flats",
        value: data.totalRequestFlats,
        color: "hsl(14, 0%, 70%)",
      },
    ];
  };

  const chartData = mapDataToChartData(data);

  console.log(chartData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="md:flex gap-2 space-y-3 md:space-y-0 p-10">
      <div className="w-full md:max-w-[40%] md:w-full border rounded-sm p-5">
        <div className="h-[300px] w-auto">
          <PieChart data={chartData} />
        </div>
      </div>

      <div className="w-full md:max-w-[60%] md:w-full space-y-8">
        <Card className="flex items-center justify-center p-4 border bg-background rounded-sm">
          <div className="flex flex-col items-center">
            Total Users
            <p className="text-xl font-semibold text-foreground">
              {data?.totalUsers ?? "N/A"}
            </p>
          </div>
        </Card>
        <Card className="flex items-center justify-center p-4 border bg-background rounded-sm">
          <div className="flex flex-col items-center">
            <p>Active Users</p>
            <p className="text-xl font-semibold text-foreground">
              {data?.totalActiveUsers ?? "N/A"}
            </p>
          </div>
        </Card>
        <Card className="flex items-center justify-center p-4 border bg-background rounded-sm">
          <div className="flex flex-col items-center">
            <p>Total Flats</p>
            <p className="text-xl font-semibold text-foreground">
              {data?.totalFlats ?? "N/A"}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
