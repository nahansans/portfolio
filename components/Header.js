import Image from "next/image";

export default function Header(props) {
    return (
        <div className="container">
            <div className="mt-[40px] flex md:align-baseline md:justify-between pb-[20px] md:pb-[40px] border-b border-black">
                <a className="text-normal flex-1 cursor-pointer" onClick={props.executeScroll}>
                    Naufal Hanif
                </a>

                <a href="" className="text-normal ml-[10px] md:ml-[40px]">
                    About
                </a>
                <a href="" className="text-normal ml-[10px] md:ml-[40px] mr-[10px] md:mr-[90px]">
                    Cases
                </a>
                <a href="" className="text-normal ml-[10px] md:ml-[40px]">
                    Contacts
                </a>
            </div>
        </div>
    )
}