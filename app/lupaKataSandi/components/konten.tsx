"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Konten() {
  return (
    <div className="w-full p-6 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">Lupa Kata Sandi?</h2>
      <p className="text-sm md:text-base text-gray-600 mb-6">
        Masukkan email Anda untuk mendapatkan link reset password.
      </p>

      <form className="space-y-5">
        <Input type="email" label="Email" placeholder="Masukkan email Anda" />
        <Button
          label="Kirim Link Reset"
          styleButton="bg-[#333836] text-white font-bold py-2 px-6 rounded-lg w-full text-lg"
        />
      </form>

      <a href="/login" className="text-blue-500 text-sm mt-4 inline-block">
        Kembali ke Login
      </a>
    </div>
  );
}
