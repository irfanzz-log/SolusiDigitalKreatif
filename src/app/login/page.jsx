'use client'

import Image from "next/image"
import { useState } from "react"

export default function Login() {
    const [isPageClick, setIsPageClick] = useState(false);

    return (
        <main className="relative min-h-screen">
            <div className="fixed z-100 top-5 w-full flex justify-center">
                <p className="bg-red-500 text-white rounded-full p-2 px-5 text-center text-xs">Mohon maaf kami masih menutup akses login/sign</p>
            </div>
            <section className="w-full flex justify-center px-10">
                <div className="lg:w-1/3 md:w-1/2 w-full shadow-md w-full flex flex-col items-center justify-center rounded-md my-20">
                    <div className="relative w-35 h-35 my-5">
                        <Image src="/logo/SDK_Logo.png" alt="" className="object-cover object-center" fill></Image>
                    </div>
                    <div className="w-3/4">
                        <div className="w-full flex justify-center">
                            <div className="w-full flex justify-around p-1 rounded-full bg-[#64748b]/10 text-neutral-600">
                                <button type="button" onClick={()=> setIsPageClick(!isPageClick)} className={`p-1 lg:px-11 md:px-10 px-6 rounded-full mx-1 ${isPageClick == true && "bg-white"}`}>Sign</button>
                                <button type="button" onClick={()=> setIsPageClick(!isPageClick)} className={`p-1 lg:px-11 md:px-10 px-6 rounded-full mx-1 ${isPageClick == false && "bg-white"}`}>Login</button>
                            </div>
                        </div>
                        <div className="w-full">
                            {isPageClick
                                ? <>

                                    <div className="my-4">
                                        <h1 className="text-xl font-bold">Buat Akun Baru</h1>
                                        <p className="text-sm text-neutral-500">Silahkan daftarkan akun anda</p>
                                    </div>
                                    <div className="w-full flex flex-col ">
                                        <label className="font-bold my-2" htmlFor="">Name</label>
                                        <input className="border-[0.5px] border-white/20 shadow-sm p-2 rounded-sm" type="text" name="" id="" />

                                        <label className="font-bold my-2" htmlFor="">Email</label>
                                        <input className="border-[0.5px] border-white/20 shadow-sm p-2 rounded-sm" type="email" name="" id="" />

                                        <label className="font-bold my-2" htmlFor="">No Whatsapp</label>
                                        <input className="border-[0.5px] border-white/20 shadow-sm p-2 rounded-sm" type="number" name="" id="" />

                                        <label className="font-bold my-2" htmlFor="Password">Password</label>
                                        <input className="border-[0.5px] border-white/20 shadow-sm p-2 rounded-sm" type="password" name="" id="" />

                                        <button className="w-full p-2 bg-[#2FA4D7] rounded-sm my-4 text-white">Login</button>
                                    </div>
                                </>
                                : <>



                                    <div className="my-4">
                                        <h1 className="text-xl font-bold">Selamat Datang</h1>
                                        <p className="text-sm text-neutral-500">Silahkan masuk ke akun anda</p>
                                    </div>
                                    <div className="w-full flex flex-col ">
                                        <label className="font-bold my-2" htmlFor="">Email</label>
                                        <input className="border-[0.5px] border-white/20 shadow-sm p-2 rounded-sm" type="email" name="" id="" />

                                        <label className="font-bold my-2" htmlFor="Password">Password</label>
                                        <input className="border-[0.5px] border-white/20 shadow-sm p-2 rounded-sm" type="password" name="" id="" />

                                        <button className="w-full p-2 bg-[#2FA4D7] rounded-sm my-4 text-white">Login</button>
                                    </div>
                                </>

                            }
                        </div>
                    </div>
                </div>
            </section>

            <footer className="absolute bottom-0 w-full flex justify-center p-2 bg-[#2FA4D7] text-white">
                <p className="text-xs">© 2026 Solusi Digital Kreatif. All rights reserved.</p>
            </footer>
        </main>
    )
}