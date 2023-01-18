import React from "react";
import { Command } from "@tauri-apps/api/shell";

export function App() {
  const [output, setOutput] = React.useState("");

  async function handleOnClick() {
    const command = await new Command("pw-dump").execute();
    setOutput(command.stdout);
  }

  return (
    <div className="h-full p-4">
      <div className="h-full flex flex-col gap-2">
        <button
          className="bg-gray-200 hover:bg-gray-300 px-2"
          onClick={() => handleOnClick()}
        >
          run pw-dump
        </button>
        <pre className="flex-1 border p-2 bg-gray-50 overflow-auto text-sm font-mono">
          {output}
        </pre>
      </div>
    </div>
  );
}
