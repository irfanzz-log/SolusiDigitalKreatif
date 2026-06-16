'use client'

import Nav from "@/component/Nav";
import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import MiniCta from "@/component/MiniCta";
import CountAnimation from "@/component/CountAnimation";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function LandingPage() {
  return (
    <main className="relative w-full">

      <MiniCta />

      <Nav />
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <motion.section
        initial={{
          y: 120,
          opacity: 0,
          scale: 0.9
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1
        }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          type: "spring",
          bounce: 0.4
        }}
        className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Tentang Kami
            </span>

            <h2 className="mt-6 text-4xl font-bold text-neutral-800 leading-tight md:text-5xl">
              Desain Modern Untuk Bisnis Masa Kini
            </h2>

            <p className="mt-6 text-lg text-neutral-500">
              Kami membantu bisnis tampil lebih profesional melalui website yang cepat,
              modern, dan berorientasi pada konversi.
            </p>
          </div>

          <motion.div
            initial={{
              y: 120,
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.4
            }}

            className="rounded-[2rem] bg-red-800 p-10 text-neutral-200 backdrop-blur">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="rounded-2xl bg-white/10 md:p-6 p-4">
                <h3 className="md:text-4xl text-2xl  font-bold">{<CountAnimation target={4} />}+</h3>
                <p className="mt-2 text-gray-300">Project Selesai</p>
              </div>

              <div className="rounded-2xl bg-white/10 md:p-6 p-4">
                <h3 className="md:text-4xl text-2xl  font-bold">{<CountAnimation target={24} />}/{<CountAnimation target={7} />}</h3>
                <p className="mt-2 text-gray-300">Support</p>
              </div>

              <div className="rounded-2xl bg-white/10 md:p-6 p-4">
                <h3 className="md:text-4xl text-2xl  font-bold">{<CountAnimation target={93} />}%</h3>
                <p className="mt-2 text-gray-300">Client Puas</p>
              </div>

              <div className="rounded-2xl bg-white/10 md:p-6 p-4">
                <h3 className="md:text-4xl text-2xl  font-bold">SEO</h3>
                <p className="mt-2 text-gray-300">Optimized</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{
          y: 120,
          scale: 0.9,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          scale: 1,
          opacity: 1
        }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          type: "spring",
          bounce: 0.4
        }}
        className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-red-600 to-yellow-500 p-12 text-center text-black shadow-2xl">
          <h2 className="text-4xl text-white font-extrabold md:text-5xl">
            Siap Membuat Website Keren?
          </h2>

          <p className="mx-auto mt-4 text-neutral-200 max-w-2xl text-lg">
            Gunakan template ini sebagai dasar landing page bisnis, startup, atau portfolio.
          </p>

          <button onClick={() => {
            window.open(
              "https://wa.me/6285788513910?text=Hallo%20saya%20mau%20buat%20website!",
              "_blank",
              "noopener,noreferrer"
            );
          }} className="mt-8 cursor-pointer rounded-2xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:bg-neutral-900">
            Hubungi Sekarang
          </button>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
