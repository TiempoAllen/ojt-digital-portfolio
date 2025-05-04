import React from "react";
import TasksTable from "../tables/TasksTable";

const TasksSummary = () => {
  return (
    <section
      id="summary"
      className="py-8 px-6 xl:px-28 flex flex-col justify-center items-center gap-12 leading-tight tracking-tighter my-8"
    >
      <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:leading-[1.1]">
        IV. Summary of Activities
      </h1>
      <TasksTable />
    </section>
  );
};

export default TasksSummary;
