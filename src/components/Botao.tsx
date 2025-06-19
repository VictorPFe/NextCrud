import React from "react";

interface BotaoProps {
  cor?: "green" | "blue" | "gray";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  return (
    <div className="flex justify-end">
      <button
        onClick={props.onClick}
        className={`bg-gradient-to-r from-purple-800 to-purple-500 px-4 py-2 rounded-md mb-4 text-white ${props.className}`}
      >
        {props.children}
      </button>
    </div>
  );
}
