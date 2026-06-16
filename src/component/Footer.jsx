export default function Footer() {
    return (
        <footer className="relative overflow-hidden text-neutral-700">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/footer.png')] bg-cover md:bg-bottom bg-no-repeat opacity-90" />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20">
                <div className="flex flex-col md:flex-row justify-between gap-14">

                    {/* Left */}
                    <div className="md:w-[45%]">
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                            Solusi Digital Kreatif
                        </h2>

                        <p className="mt-5 leading-relaxed text-neutral-600">
                            Partner terbaik untuk solusi bisnis digital,
                            pengembangan website, sistem informasi,
                            branding, dan transformasi teknologi modern.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="md:w-[40%] space-y-5">

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z" />
                                    <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
                                </svg>
                            </div>

                            <p className="text-sm leading-relaxed text-neutral-600">
                                Jl. Kp. Onyam, Sukabakti, Kec. Curug, Kabupaten Tangerang Banten 15810
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telephone-inbound" viewBox="0 0 16 16">
                                    <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                </svg>
                            </div>

                            <p className="text-sm text-neutral-700 font-medium">
                                0857-8851-3910
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 pt-6 border-t border-neutral-200/70 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-neutral-500">
                        © 2026 Solusi Digital Kreatif. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-neutral-500">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/irfanzzs.id/" className="hover:text-blue-600 transition">
                            Instagram
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=085788513910&text=Hallo%20saya%20mau%20buat%20website!&type=phone_number&app_absent=0" className="hover:text-blue-600 transition">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}