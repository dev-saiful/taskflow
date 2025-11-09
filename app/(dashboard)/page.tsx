import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const DashboardPage = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Total Task</CardTitle>
        </CardHeader>
        <CardContent>12</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completed Tasks</CardTitle>
        </CardHeader>
        <CardContent>8</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pending Tasks</CardTitle>
        </CardHeader>
        <CardContent>4</CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
