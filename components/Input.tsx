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
      <label htmlFor="email" className={styleInput}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border-black border-2 rounded-lg p-2"
      />
    </div>
  );
}
