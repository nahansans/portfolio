import Image from "next/image";

export default function Header(props) {
    return (
        <div className="container">
            <div className="mt-[40px] flex md:align-baseline md:justify-between pb-[20px] md:pb-[40px] border-b border-black">
                {
                    props.currentMenu ?
                    <>
                        <a className="text-normal flex-1 cursor-pointer" href="/">
                            Naufal Hanif
                        </a>

                        <a className="text-normal ml-[10px] md:ml-[40px] cursor-pointer" href="/">
                            About
                        </a>
                        <a h className="text-normal ml-[10px] md:ml-[40px] mr-[10px] md:mr-[90px] cursor-pointer" href="/">
                            Cases
                        </a>
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
                        <a href="/contacts" className="text-normal ml-[10px] md:ml-[40px]">
                            Contacts
                        </a>
                    </>
                }
            </div>
        </div>
    )
}