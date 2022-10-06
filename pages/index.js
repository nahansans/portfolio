import { useRef } from "react"
import Header from "@/components/Header"
import Top from "@/components/Top"
import Image from "next/image"
import ArrowBottom from "@/public/icons/arrow-bottom.png"
import ImageMe from "@/public/images/me.png"


export default function Home() {
  const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop,   behavior: 'smooth'})
  const contentRef = useRef(null)
  const executeScroll = () => scrollToRef(contentRef)


  return (
    <>
      <Top />
      <Header executeScroll={executeScroll} />
      <div className="container py-[100px] bg-round">
        <div>
          <h1 className="uppercase fs-monument text-[40px] leading-[35px] md:text-[160px] md:leading-[130px]">
            WEB DEVELOPER & TECH ENTHUSIAST
          </h1>
        </div>
        <div className="flex justify-between items-end">
          <img
            onClick={executeScroll}
            src={ArrowBottom.src} alt="" className="w-[48px] md:w-[118px] mt-[22px] md:mt-[22px] cursor-pointer" />
          <a href="" className="text-normal">
            About Hanif
          </a>
          <a href="" className="text-normal">
            Some Facts
          </a>
        </div>


        <h2 
          ref={contentRef}
          className="uppercase fs-monument text-[40px] leading-[35px] md:text-[160px] md:leading-[130px] mt-[80px] md:mt-[170px] text-center mb-[30px] md:mb-[60px]">HANIF</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="text-[14px] md:text-[16px] text-justify">
                After 10+ years of experience in the digital field as former Lead Art Director at Uplabico, Hyper Island Alumni. I decided to dedicate myself to the wonderful world of freelancing.
              </p>
              <div className="">
                <img src={ImageMe.src} alt="" className="w-[273px] mx-auto" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[20px] md:text-[40px]">
              Follow me
            </p>
            <p className="text-[14px] md:text-[16px] mb-[40px]">
              I’m available on the following social media platforms.
            </p>
            <div className="grid grid-cols-5 gap-0 pb-[10px] border-b border-black">
              <a href="" className="text-[20px] md:text-[40px]">
                Tw
              </a>
              <a href="" className="text-[20px] md:text-[40px]">
                Li
              </a>
              <a href="" className="text-[20px] md:text-[40px]">
                Ig
              </a>
              <a href="" className="text-[20px] md:text-[40px]">
                Fb
              </a>
            </div>
            <div className="pb-[10px] border-b border-black mt-[40px] md:mt-[60px]">
              <span className="text-[20px] md:text-[40px]">
                Curriculum
              </span>
            </div>
            <div className="mt-[20px]">
              <div className="flex justify-between items-center">
                <p className="text-[14px] md:text-[16px]">
                  2xxx - 2xxx
                </p>
                <p className="text-[14px] md:text-[16px]">
                  Unknown
                </p>
                <p className="text-[14px] md:text-[16px]">
                  Position ??
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[14px] md:text-[16px]">
                  2xxx - 2xxx
                </p>
                <p className="text-[14px] md:text-[16px]">
                  Unknown
                </p>
                <p className="text-[14px] md:text-[16px]">
                  Position ??
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[14px] md:text-[16px]">
                  2xxx - 2xxx
                </p>
                <p className="text-[14px] md:text-[16px]">
                  Unknown
                </p>
                <p className="text-[14px] md:text-[16px]">
                  Position ??
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[14px] md:text-[16px]">
                  2xxx - 2xxx
                </p>
                <p className="text-[14px] md:text-[16px]">
                  Unknown
                </p>
                <p className="text-[14px] md:text-[16px]">
                  Position ??
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
