import { useEffect, useRef } from "react"
import Image from 'next/future/image'
import { cases } from '@/data/cases.js';


import Header from "@/components/Header"
import Top from "@/components/Top"
import ArrowBottom from "@/public/icons/arrow-bottom.png"
import ImageMe from "@/public/images/me.png"
import LaravelImage from "@/public/images/laravel.png"
import ReactImage from "@/public/images/react-js.png"
import VueImage from "@/public/images/vue-js.png"
import NextImage from "@/public/images/next-js.png"
import JSImage from "@/public/images/js.png"
import PhpImage from "@/public/images/php.png"
import PsqlImage from "@/public/images/psql.png"
import MysqlImage from "@/public/images/mysql.png"
import Case from "@/components/Case"


export default function Home() {
  const scrollToRef = (ref) => window.scrollTo({top: ref.current.offsetTop,   behavior: 'smooth'})
  const contentRef = useRef(null)
  const casesRef = useRef(null)

  const executeScroll = () => scrollToRef(contentRef)
  const scrollAbout = () => scrollToRef(contentRef)
  const scrollCases = () => scrollToRef(casesRef)


  return (
    <>
      <Top />
      <Header executeScroll={executeScroll} scrollAbout={scrollAbout} scrollCases={scrollCases} />
      <div className="container py-[100px] bg-round">
        <div>
          <h1 className="title-custom max-w-[760px] 2xl:max-w-full">
            WEB DEVELOPER & TECH ENTHUSIAST
          </h1>
        </div>
        <div className="flex justify-between items-end">
          <Image
            onClick={executeScroll}
            src={ArrowBottom} alt="" className="w-[48px] md:w-[80px] 2xl:w-[118px] mt-[22px] md:mt-[22px] cursor-pointer" />
          <a href="" className="text-normal">
            About Hanif
          </a>
          <a href="" className="text-normal">
            Some Facts
          </a>
        </div>


        <h2 
          ref={contentRef}
          className="title-custom pt-[80px] md:pt-[170px] text-center mb-[30px] md:mb-[60px]">
            NAUFAL<br />HANIF
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <p className="text-[14px] md:text-[16px] text-justify">
                {`Hi, I’m Hanif, Naufal Hanif. I am an IT Professional who has experience in technology and web application development. I am also very interested in learning new things related to the development of the IT world. I’m also good at @Laravel @JavaScript @Nextjs @VueJs @PHP @ ReactNative`}
              </p>
              <div className="">
                <Image src={ImageMe} alt="" className="w-[273px] mx-auto" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-[20px] md:text-[40px]">
              Follow me
            </p>
            <p className="text-[14px] md:text-[16px] mb-[40px]">
              {`I’m available on the following social media platforms.`}
            </p>
            <div className="grid grid-cols-5 gap-0 pb-[10px] border-b border-black">
              <a href="" className="text-[20px] md:text-[40px]">
                Tw
              </a>
              <a href="https://linkedin.com/in/nahansans" className="text-[20px] md:text-[40px]">
                Li
              </a>
              <a href="https://instagram.com/naufalhanif__" className="text-[20px] md:text-[40px]">
                Ig
              </a>
              <a href="" className="text-[20px] md:text-[40px]">
                Fb
              </a>
            </div>
            <div className="pb-[10px] border-b border-black mt-[40px] md:mt-[60px]">
              <span className="text-[20px] md:text-[40px]">
                Education
              </span>
            </div>
            <div className="mt-[20px]">
              <div className="flex justify-between items-center">
                <p className="text-[14px] md:text-[16px]">
                  2022 - Present
                </p>
                <p className="text-[14px] md:text-[16px]">
                  S1 Information Systems
                </p>
                <p className="text-[14px] md:text-[16px]">
                  Universitas Terbuka
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[40px] md:mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="order-last md:order-first grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
                <Image src={LaravelImage} alt="" className="image-skills mx-auto" />
            </div>
            <div className="text-center">
                <Image src={VueImage} alt="" className="image-skills mx-auto" />
            </div>
            <div className="text-center">
                <Image src={ReactImage} alt="" className="image-skills mx-auto" />
            </div>
            <div className="text-center">
                <Image src={NextImage} alt="" className="image-skills mx-auto" />
            </div>
            <div className="text-center">
                <Image src={JSImage} alt="" className="image-skills mx-auto" />
            </div>
            <div className="text-center">
                <Image src={PhpImage} alt="" className="image-skills mx-auto" />
            </div>
            <div className="text-center">
                <Image src={PsqlImage} alt="" className="image-skills mx-auto" />
            </div>
            <div className="text-center">
                <Image src={MysqlImage} alt="" className="image-skills mx-auto" />
            </div>
          </div>
          <div>
            <div className="pb-[10px] border-b border-black">
                <span className="text-[20px] md:text-[40px]">
                  Skills
                </span>
            </div>
            <div className="mt-[20px]">
              <div className="flex justify-between mb-2">
                <p className="text-[14px] md:text-[16px]">
                  PHP
                </p>
                <p className="text-[14px] md:text-[16px] text-right">
                  Laravel
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-[14px] md:text-[16px]">
                  Javascript
                </p>
                <p className="text-[14px] md:text-[16px] text-right">
                  Vue JS
                  <br />
                  Next JS
                  <br />
                  React JS
                  <br />
                  React Native
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <p className="text-[14px] md:text-[16px]">
                  SQL
                </p>
                <p className="text-[14px] md:text-[16px] text-right">
                  MySQL
                  <br />
                  PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>

        <section
          ref = {casesRef}
        >
          {
            cases.map((item) => {
              return (
                <Case
                  number = {item.number}
                  type = {item.type}
                  url = {item.url}
                  image = {item.image}
                  title = {item.title}
                  desc = {item.desc}
                />
              )
            })
          }
        </section>
      </div>
    </>
  )
}
