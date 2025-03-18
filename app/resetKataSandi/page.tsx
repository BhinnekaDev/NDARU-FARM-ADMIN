"use client";
import React from "react";
import Konten from "@/app/resetKataSandi/components/konten";

export default function ResetKataSandiPage() {
  return (
    <section className="h-screen flex justify-center items-center bg-green-950 px-6">
      <div className="w-full max-w-4xl p-10 bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="w-full">
          <Konten />
        </div>
      </div>
    </section>
  );
}
