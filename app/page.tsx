"use client";
import React from "react";
//COMPONENTS KAMI
import Input from "@/components/Input";
import Button from "@/components/Button";
import Image from "next/image";
import Foto1 from "@/components/assets/image/Foto1.jpg";

export default function Home() {
  return (
    <section className="h-screen flex justify-center items-center bg-green-900">
      <div className="p-8 y-10 bg-white shadow-lg rounded-2xl flex overflow-hidden">
        {/* Bagian Kiri - Form Login */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          {/* Judul */}
          <h2 className="text-2xl font-bold text-center">Welcome back 👋</h2>
          {/* Sub Judul */}
          <p className="text-gray-600 text-center mb-6">
            Silahkan Masukan Data Diri Anda.
          </p>

          {/* Form */}
          <form className="space-y-4">
            {/* Email*/}
            <Input type="email" label="Email" placeholder="Email" />

            {/* Password */}
            <Input type="password" label="Password" placeholder="Password" />

            {/* Button */}
            <Button
              label="Masuk"
              styleButton="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg w-full"
              onClick={() => console.log("Tombol Ditekan")}
            />
          </form>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            {/* Lupa Kata Sandi */}
            <a href="#" className="text-blue-500">
              Lupa Kata Sandi?
            </a>
          </div>
        </div>

        {/* Bagian Kanan - Gambar */}
        <div className="w-1/2 relative">
          <Image
            src={Foto1}
            alt="Gambar"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
