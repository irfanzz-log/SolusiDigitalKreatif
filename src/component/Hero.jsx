'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    const text = ["Lebih Cepat & Profesional", "Keamanan Data dijamin", "Monitoring 24 jam!"];
    const [count, setCount] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= text.length - 1) {
                    return 0;
                }
                return prev + 1;
            })
        }, 3000);

        return () => clearInterval(interval)
    }, []);

    return (
        <section className="relative">
            <div className="absolute inset-0 bg-[url(/hero.png)] bg-no-repeat bg-cover" />

            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8">

                <span className="md:block hidden mb-6 text-white rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                    Solusi Digital Kreatif
                </span>

                <h1 className="relative flex flex-col max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
                    Bangun Website modern
                    <span className="relative inline-block h-[2.2em] w-full">
                        {text.map((data, idx) => {
                            return (
                                <span key={idx} className={`absolute transition-all duration-600 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] w-full ${idx == count ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} block bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent`}>{data}</span>
                            )
                        })}
                    </span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl">
                    Jasa pembuatan website custom untuk UMKM, perusahaan, dan personal dengan desain modern dan teknologi terkini.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <button
                        onClick={() => {
                            window.open(
                                "https://wa.me/6285788513910?text=Hallo%20saya%20mau%20buat%20website!",
                                "_blank",
                                "noopener,noreferrer"
                            );
                        }}
                        className="rounded-2xl text-white bg-red-600 px-8 py-4 text-lg font-semibold transition hover:bg-red-500">
                        Buat Web Sekarang
                    </button>

                    <Link href={'/demo'} className="rounded-2xl border border-white/20 bg-gray-300/40 px-8 py-4 text-lg text-neutral-600 font-semibold backdrop-blur transition hover:bg-gray-300/20">
                        Lihat Demo
                    </Link>
                </div>

                <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: "spring", bounce: 0.4 }} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                        <h3 className="text-2xl bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent font-bold">Super Cepat</h3>
                        <p className="mt-3 text-neutral-600">
                            Dibangun dengan Framework modern untuk performa maksimal.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: "spring", bounce: 0.4 }} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                        <h3 className="text-2xl bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent font-bold">SEO Friendly</h3>
                        <p className="mt-3 text-neutral-600">
                            Optimasi mesin pencari agar website lebih mudah ditemukan.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: "spring", bounce: 0.4 }} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                        <h3 className="text-2xl bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent font-bold">Responsive</h3>
                        <p className="mt-3 text-neutral-600">
                            Tampilan tetap elegan di desktop maupun smartphone.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}