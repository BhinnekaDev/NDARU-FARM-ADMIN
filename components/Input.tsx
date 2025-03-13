import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { InputProps } from "@/interface/inputProps";

export default function Input({ type, placeholder, label }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="font-bold text-gray-600">{label}</label>
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          id={type}
          className="border-black border-2 rounded-lg p-2 pr-10 w-full"
        />
        <div className="absolute inset-y-1 right-3 flex items-center text-gray-500">
          {type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 focus:outline-none"
            >
              {showPassword ? (
                <FaRegEyeSlash className="w-5 h-5" />
              ) : (
                <FaRegEye className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
