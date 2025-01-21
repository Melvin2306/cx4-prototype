import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "./tasks/data/schema";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/tasks/data/tasks.json"),
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-2 pt-3 pl-3 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div className="gap-3 my-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Welcome back, Alex!
            </h2>
            <p className="text-muted-foreground">
              There are 5 new tickets assigned to you!
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
