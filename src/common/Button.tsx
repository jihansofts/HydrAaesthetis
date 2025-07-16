import React from "react";

export default function Button({ text }: { text: string }) {
  return (
    <div>
      <button className="gradient-border bg-gradient text-gradient px-8 py-4 rounded-lg">
        {text}
      </button>
    </div>
  );
}
