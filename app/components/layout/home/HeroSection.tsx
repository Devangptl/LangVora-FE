"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [category, setCategory] = useState("Kindergarten");

  return (
    <section className="relative ">
      <div className="mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-red-50 text-secondary font-semibold text-xs px-4 py-1 rounded-full mb-4">
            Never Stop Learning
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Grow up your skills <br /> by online courses <br /> with{" "}
            <span className="text-primary">LangVora</span>
          </h1>

          <p className="text-gray-500 mb-8 leading-relaxed max-w-lg">
            LangVora is a Global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the barriers to getting a degree.
          </p>

          {/* Search Bar */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-2 w-full max-w-lg">
            <select
              className="bg-transparent text-gray-600 text-sm outline-none px-3 py-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Kindergarten</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>University</option>
            </select>
            <input
              type="text"
              placeholder="Class/Course"
              className="flex-grow bg-transparent outline-none px-3 py-2 text-gray-700"
            />
            <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-1">
               Search
            </button>
          </div>
        </div>

        {/* Right Shape & Floating Icons */}
        <div className="relative flex justify-center items-center h-full pt-10">
          <div className="h-full to-secondary rounded-[200px] opacity-90"></div>
          <div className="absolute h-[400px] w-[400px]">

          <Image src="/images/manwithbook.png" alt="Hero Image" layout="fill" objectFit="cover" className="object-cover" />
          </div>
          {/* Floating icons */}
          <div className="absolute top-8 right-16 bg-white p-3 rounded-xl shadow-lg">
            <Image src="/icons/004   Genius.png" width={7} height={7} alt="icon" className="w-7 h-7" />
          </div>
          <div className="absolute top-20 left-16 bg-white p-3 rounded-xl shadow-lg">
            <Image src="/icons/blocks 1.png" width={7} height={7} alt="icon" className="w-7 h-7" />
          </div>
          <div className="absolute bottom-28 left-12 bg-white p-3 rounded-xl shadow-lg">
            <Image src="/icons/book 1.png" width={7} height={7} alt="icon" className="w-7 h-7" />
          </div>
          <div className="absolute bottom-8 right-24 bg-white p-3 rounded-xl shadow-lg">
            <Image src="/icons/presentation 1.png" width={7} height={7} alt="icon" className="w-7 h-7" />
          </div>
        </div>
      </div>
    </section>
  );
}
