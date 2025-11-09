import { NextResponse } from "next/server";

const tasks = [
  { id: 1, title: "Design dashboard layout", status: "pending" },
  { id: 2, title: "Fix authentication flow", status: "completed" },
  { id: 3, title: "Write API integration", status: "in-progress" },
];

// GET all tasks
export async function GET() {
  return NextResponse.json(tasks);
}

// POST new task
export async function POST(req: Request) {
  const newTask = await req.json();
  const id = tasks.length + 1;
  tasks.push({ id, ...newTask });
  return NextResponse.json({ message: "Task added", id }, { status: 201 });
}
