"use client";
import { TaskCard } from "@/components/task-card";
import { useEffect, useState } from "react";
import { AddTaskForm } from "./add-task-form";

type TaskItem = {
  id: number;
  title: string;
  status: string;
};

const TasksPage = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadTasks = async () => {
      try {
        const res = await fetch("/api/tasks");
        const data = await res.json();
        if (isMounted) {
          setTasks(data);
        }
      } catch (err) {
        // Optional: handle fetch error
        console.error("Failed to load tasks:", err);
      }
    };

    loadTasks();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      <AddTaskForm
        onAdd={(task) =>
          setTasks((prev) => [
            ...prev,
            { id: Date.now(), ...(task as Omit<TaskItem, "id">) },
          ])
        }
      />

      <div className="grid gap-4 mt-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
