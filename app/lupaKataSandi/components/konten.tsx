"use client";
import React from "react";
import Lottie from "lottie-react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import AnimasiEmail from "@/components/assets/AnimasiEmail.json";

export default function Konten() {
  return (
    <div className="w-full p-6 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">Lupa Kata Sandi?</h2>
      <p className="text-sm md:text-base text-gray-600 mb-6">
        Masukkan email Anda untuk mendapatkan link reset password.
      </p>

      {/* Tambahkan Animasi */}
      <div className="flex justify-center mb-4">
        <Lottie
          animationData={AnimasiEmail}
          className="w-48 h-48"
          loop={true}
        />
      </div>

      <form className="space-y-5">
        <Input type="email" placeholder="Masukkan email Anda" />
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
