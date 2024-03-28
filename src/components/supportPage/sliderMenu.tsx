import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import { menuItems } from "@/cardsContent/supportPage";
import { useRef, useEffect } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MenuItem from "./menuItem";



export default function SliderMenu({topic, setTopic}: {
    topic:string,
    setTopic: Function
}) {
    const sliderRef = useRef<HTMLDivElement>(null)
    const onButtonClick = (scroll:number) => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += scroll
        }
        
    }
    useEffect(() => {
        
    })
    return (
        <div className="relative">
            <button onClick={() => onButtonClick(-300)} className="support-slider-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 7l-5 5m0 0l5 5"/></svg>
            </button>
            <button onClick={() => onButtonClick(300)} className="support-slider-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 6l6 6l-6 6"/></svg>
            </button>
            <div ref={sliderRef} className="support-slider-container">
                {
                    menuItems.map((item,index) => <MenuItem
                    key={index}
                    topic={topic}
                    setTopic={setTopic}
                    state={item.state}
                    title={item.title}
                    />)
                }
            </div>
            <div></div>
            <hr className="w-[1px] bg-slate-600"/>
        </div>
    )
}