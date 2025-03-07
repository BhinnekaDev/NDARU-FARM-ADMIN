"use client";
import React from "react";
import { InputProps } from "@/interface/inputProps";

export default function Input({
  type,
  label,
  placeholder,
  styleInput,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {/* Label untuk input */}
      <label htmlFor={type} className={styleInput}>
        {label}
      </label>

      {/* Input field dengan border dan padding */}
      <input
        type={type}
        placeholder={placeholder}
        id={type}
        className="border-black border-2 rounded-lg p-2"
      />
    </div>
  );
}
