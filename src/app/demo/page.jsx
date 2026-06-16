'use client';

import Nav from "@/component/Nav";
import Footer from "@/component/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function page() {
    return (
        <main className="relative min-h-screen">
            <Nav />
            <div className="">
                <section
                    className="w-full flex flex-col bg-[url('/hero.webp')] bg-no-repeat bg-cover bg-bottom">
                    <div className="p-5">
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, type: "spring", bounce: 0.2 }}
                            className="w-full flex flex-col justfiy-center items-center">
                            <div className="md:w-1/2 w-full text-center mt-30">
                                <h1 className="my-3 md:text-5xl text-3xl bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent font-bold">Pilihan Website</h1>
                                <p className="text-neutral-600">Kami menyediakan berbagai jenis website yang bisa disesuaikan dengan kebutuhan Anda.</p>
                            </div>
                        </motion.div>
                        <div className="w-full">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, }}
                                className="w-full flex justify-center my-5 mt-10 text-center">
                                <h2 className="md:text-xl text-md bg-red-600 text-white rounded-full p-2 px-6 font-bold shadow-md">Website Undangan Pernikahan</h2>
                            </motion.div>
                            <div className="w-full flex md:flex-row flex-col justify-center items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="relative md:w-1/3 w-full flex flex-col rounded-xl overflow-hidden bg-gray-200/40 m-5">
                                    <Image src={'/PortoJawa.webp'} alt="" width={800} height={600}></Image>
                                    <div className="p-5 m-2">
                                        <p className="text-xl mb-5 font-bold">Tema Jawa</p>
                                        <p>Paket termasuk :</p>
                                        <ul>
                                            <li> - Animasi</li>
                                            <li> - Custom Nama Tamu</li>
                                            <li> - Web Tampil Selamanya</li>
                                        </ul>

                                        <p className="text-lg font-bold mt-5">Harga : <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-2xl">Rp96.000</span> <span className="line-through text-sm">Rp170.000</span></p>
                                        <div className="w-full flex items-center">
                                            <button onClick={() => {
                                            window.open(
                                                "https://wedd.solusidigitalkreatif.my.id/jawa/noval-latifah",
                                                "_blank",
                                                "noopener,noreferrer"
                                            );
                                        }} className="mt-4 p-2 px-6 rounded-full bg-red-600 inline-block text-lg font-bold text-white cursor-pointer hover:scale-105 hover:shadow-lg">Preview</button>
                                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=085788513910&text=Hallo%20saya%20mau%20buat%20website%20undangan%20digital%20tema%20jawa&type=phone_number&app_absent=0" className="mt-4 mx-3 p-2 px-3 text-sm text-red-600 rounded-full border-[1px] border-red-600">Buat Penawaran</a>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="relative md:w-1/3 w-full flex flex-col rounded-xl overflow-hidden bg-gray-200/40 m-5">
                                    <Image src={'/PortoLight.webp'} alt="" width={800} height={600}></Image>
                                    <div className="p-5 m-2">
                                        <p className="text-xl mb-5 font-bold">Tema Light</p>
                                        <p>Paket termasuk :</p>
                                        <ul>
                                            <li> - Animasi</li>
                                            <li> - Custom Nama Tamu</li>
                                            <li> - Web Tampil Selamanya</li>
                                        </ul>

                                        <p className="text-lg font-bold mt-5">Harga : <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-2xl">Rp96.000</span> <span className="line-through text-sm">Rp170.000</span></p>
                                        <div className="w-full flex items-center">
                                            <button onClick={() => {
                                            window.open(
                                                "https://wedd.solusidigitalkreatif.my.id/jawa/noval-latifah",
                                                "_blank",
                                                "noopener,noreferrer"
                                            );
                                        }} className="mt-4 p-2 px-6 rounded-full bg-red-600 inline-block text-lg font-bold text-white cursor-pointer hover:scale-105 hover:shadow-lg">Preview</button>
                                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=085788513910&text=Hallo%20saya%20mau%20buat%20website%20undangan%20digital%20tema%20light&type=phone_number&app_absent=0" className="mt-4 mx-3 p-2 px-3 text-sm text-red-600 rounded-full border-[1px] border-red-600">Buat Penawaran</a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}