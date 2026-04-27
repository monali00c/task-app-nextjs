"use client"; // Required for interactivity (hooks)

import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
  };

  return (
    <main className="flex flex-col items-center p-24 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <h1 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">Simple Task Tracker</h1>

      <form onSubmit={addTask} className="flex gap-2 mb-8">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="p-2 border border-gray-300 dark:border-gray-600 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>

      <ul className="w-full max-w-md">
        {taskList.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 mb-2 rounded shadow-sm border border-gray-100 dark:border-gray-700 text-gray-900 dark:text-gray-100"
          >
            <span>{item}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700 dark:hover:text-red-400 font-medium"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}