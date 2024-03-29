import Image from "next/image";
import Link from 'next/link'


export default function Header(props) {
    return (
        <div className="container">
            <div className="mt-[40px] flex md:align-baseline md:justify-between pb-[20px] md:pb-[40px] border-b border-black">
                {
                    props.currentMenu ?
                    <>
                        <Link href="/">
                            <a className="text-normal flex-1 cursor-pointer">
                                Naufal Hanif
                            </a>
                        </Link>

                        <Link href="/">
                            <a className="text-normal ml-[10px] md:ml-[40px] cursor-pointer">
                                About
                            </a>
                        </Link>

                        <Link href="/">
                            <a h className="text-normal ml-[10px] md:ml-[40px] mr-[10px] md:mr-[90px] cursor-pointer">
                                Cases
                            </a>
                        </Link>

                        <a href="" className="text-normal ml-[10px] md:ml-[40px]">
                            Contacts
                        </a>
                    </>
                    :
                    <>
                        <a className="text-normal flex-1 cursor-pointer" onClick={props.executeScroll}>
                            Naufal Hanif
                        </a>

                        <a className="text-normal ml-[10px] md:ml-[40px] cursor-pointer" onClick={props.scrollAbout}>
                            About
                        </a>
                        <a h className="text-normal ml-[10px] md:ml-[40px] mr-[10px] md:mr-[90px] cursor-pointer" onClick={props.scrollCases}>
                            Cases
                        </a>
                        <Link href="/contacts">
                            <a className="text-normal ml-[10px] md:ml-[40px]">
                                Contacts
                            </a>
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}