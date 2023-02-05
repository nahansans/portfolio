import Image from 'next/future/image'
import ArrowRight from "@/public/icons/icon.svg"


export default function Case(props) {
    return (
        <div className="mt-[40px] md:mt-[60px] border-t border-black grid grid-cols-1 md:grid-cols-2 gap-4 pt-[40px]">
            <div>
                <p className="number-case">
                    {props.number}
                </p>
                <div className="flex justify-between items-center mt-[40px] md:mt-[250px]">
                    <span>
                        Develop at {props.type}
                    </span>
                    <a href={props.url} target="_blank" rel="noreferrer">
                        <Image
                        src={ArrowRight} />
                    </a>
                </div>
            </div>
            <div>
                <div className="w-full h-[300px] bg-gray-400 bg-cover overflow-hidden">
                    {
                        props.image ?
                        (
                            <Image
                                src={props.image} className="w-full h-full object-cover" alt={props.title}
                            />
                        )
                        : null
                    }
                </div>
                <p className="cases-title">
                    {props.title}
                </p>
                <p className="cases-desc">
                    {props.desc}
                </p>
            </div>
        </div>
    )
}