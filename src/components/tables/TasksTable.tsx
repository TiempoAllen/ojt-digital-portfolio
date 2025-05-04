"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { tasksSummaryData } from "@/model/tasks-summary";

const ITEMS_PER_PAGE = 5;

const TasksTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tasksSummaryData.length / ITEMS_PER_PAGE);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return tasksSummaryData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="w-full bg-white rounded-lg shadow-md border p-4">
      <h2 className="text-xl font-bold">Tasks</h2>
      <p className="text-muted-foreground text-md">
        A list of tasks during my OJT.
      </p>
      <div className="border rounded-lg mt-4">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className="border-b">
              <TableHead className="w-[100px] p-4 text-muted-foreground">
                Task No.
              </TableHead>
              <TableHead className="p-4 text-muted-foreground">
                Tasks Name
              </TableHead>
              <TableHead className="text-left p-4 text-muted-foreground">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((task) => (
              <TableRow key={task.id} className="border-b">
                <TableCell className="font-medium p-4">{task.id}</TableCell>
                <TableCell className="p-4">{task.name}</TableCell>
                <TableCell className="text-left p-4">{task.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button
          className="cursor-pointer"
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="cursor-pointer"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TasksTable;
