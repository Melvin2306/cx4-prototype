"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import {
  assignees,
  editors,
  labels,
  priorities,
  statuses,
} from "@/app/tasks/data/data";
import { Task } from "@/app/tasks/data/schema";
import { LucideUserRound, Percent } from "lucide-react";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {label && (
            <Badge
              // @ts-expect-error - `variant` is not a valid prop
              variant={
                {
                  eCharging: "outline",
                  billing: "destructive",
                  documents: "secondary",
                }[label.value] ?? "default"
              }
            >
              {label.label}
            </Badge>
          )}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status"),
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "urgency",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Urgency" />
    ),
    cell: ({ row }) => {
      const urgency = priorities.find(
        (urgency) => urgency.value === row.getValue("urgency"),
      );

      if (!urgency) {
        return null;
      }

      return (
        <div className="flex items-center">
          {urgency.icon && (
            <urgency.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{urgency.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "editor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Team" />
    ),
    cell: ({ row }) => {
      const editor = editors.find(
        (editor) => editor.value === row.getValue("editor"),
      );

      if (!editor) {
        return null;
      }

      return (
        <div className="flex items-center">
          {editor.icon && (
            <editor.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{editor.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "assignee",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Assigned to" />
    ),
    cell: ({ row }) => {
      const assignee = assignees.find(
        (assignee) => assignee.value === row.getValue("assignee"),
      );

      if (!assignee) {
        return null;
      }

      return (
        <div className="flex flex-row items-center text-sm">
          <LucideUserRound className="mr-2 h-5 w-5 text-muted-foreground" />
          <p className="text-sm">{assignee.label}</p>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "confidence",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Confidence" />
    ),
    cell: ({ row }) => {
      const confidence = row.getValue("confidence");

      if (!confidence) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{confidence as string} </span>
          <Percent className="ml-2 h-4 w-4 text-muted-foreground" />
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
