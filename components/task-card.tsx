import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Task = {
    id: number;
  title: string;
  status: string;
};

const TaskCard = ({ task }: { task: Task }) => {
  return (
    <Card key={task.id} className="hover:shadow-md transition">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span
          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
            task.status === "completed"
              ? "bg-green-100 text-green-700"
              : task.status === "in-progress"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {task.status}
        </span>
      </CardContent>
    </Card>
  );
};

export { TaskCard };
