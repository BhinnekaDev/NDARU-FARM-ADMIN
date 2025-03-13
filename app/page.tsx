"use client";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Input from "@/components/Input";
import Button from "@/components/Button";
import Image from "next/image";
import Foto1 from "@/components/assets/image/Foto1.jpg";
import { FaRegEyeSlash } from "react-icons/fa";

export default function Home() {
  return (
    <section className="h-screen flex justify-center items-center bg-green-900 px-6">
      <div className="w-full max-w-[1200px] p-10 bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Bagian Kiri - Form Login */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Welcome back 👋
          </h2>
          <p className="text-sm md:text-base text-gray-600 text-center mb-6">
            Silahkan Masukan Email Dan Password Anda .
          </p>

          <form className="space-y-5">
            <Input type="email" label="Email" placeholder="Email" />
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              icon={<FaRegEyeSlash />}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-3">
              <a href="#" className="text-blue-500">
                Lupa Kata Sandi?
              </a>
            </div>
            <Button
              label="Masuk"
              styleButton="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg w-full text-lg hover:bg-orange-600"
              onClick={() => console.log("Tombol Ditekan")}
            />
          </form>
        </div>

        {/* Bagian Kanan - Gambar dengan Animasi yang Diperbaiki */}
        <motion.div
          className="hidden md:flex w-1/2 justify-center items-center"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: [0, -5, 0] }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            opacity: { duration: 1 },
            scale: { duration: 1 },
            y: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src={Foto1}
            alt="Gambar"
            className="w-[90%] h-auto object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
