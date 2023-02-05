import Header from "@/components/Header"
import Top from "@/components/Top"
import Image from "next/future/image"
import { useRef } from "react"

export default function Contact() {
    const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop,   behavior: 'smooth'})
    const contentRef = useRef(null)
    const casesRef = useRef(null)

    const executeScroll = () => scrollToRef(contentRef)
    const scrollAbout = () => scrollToRef(contentRef)
    const scrollCases = () => scrollToRef(casesRef)
    return (
        <>
            <Top />
            <Header currentMenu = "contacts" />

            <div className="container py-[100px] bg-round h-[88vh] flex flex-col justify-between">
                <div>
                    <h1 className="title-custom max-w-[760px] text-start 2xl:text-[100px] 2xl:leading-[80px]">
                        WITH LOVE
                        <br />
                        FROM INDONESIA
                    </h1>
                </div>

                <div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nahanifg@gmail.com" className="text-[40px] md:text-[60px] underline decoration-2 underline-offset-[18px]" target="_blank" rel="noreferrer">
                        nahanifg@gmail.com
                    </a>
                    <div className="grid grid-cols-5 gap-0 pb-[10px] ">
                        <a href="" className="text-end text-[20px] md:text-[40px]">
                            Tw
                        </a>
                        <a href="https://linkedin.com/in/nahansans" className="text-end text-[20px] md:text-[40px]">
                            Li
                        </a>
                        <a href="https://instagram.com/naufalhanif__" className="text-end text-[20px] md:text-[40px]">
                            Ig
                        </a>
                        <a href="" className="text-end text-[20px] md:text-[40px]">
                            Fb
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}