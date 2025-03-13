"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Konten() {
  return (
    <div className="w-full p-6 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">Reset Kata Sandi</h2>
      <p className="text-sm md:text-base text-gray-600 mb-6">
        Masukkan kata sandi baru Anda dan konfirmasi.
      </p>

      <form className="space-y-5">
        <Input type="password" placeholder="Masukkan kata sandi baru" />
        <Input type="password" placeholder="Masukkan kembali kata sandi" />
        <Button
          label="Reset Kata Sandi"
          styleButton="bg-[#333836] text-white font-bold py-2 px-6 rounded-lg w-full text-lg"
        />
      </form>

      <a href="/login" className="text-blue-500 text-sm mt-4 inline-block">
        Kembali ke Login
      </a>
    </div>
  );
}
