"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Task = {
  title: string;
  status: string;
};

type AddTaskFormProps = {
  onAdd: (task: Task) => void;
};

const AddTaskForm = ({onAdd}: AddTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!title.trim()) return;
    setLoading(true);
    const newTask = { title, status: "pending" };
    onAdd(newTask);

    await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    setTitle("");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task..."
      />
      <Button type="submit">
        {loading ? "Adding..." : "Add Task"}
      </Button>
    </form>
  );
};

export { AddTaskForm };
