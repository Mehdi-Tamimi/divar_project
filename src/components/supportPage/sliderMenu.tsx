import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar } from "swiper/modules"
import { menuItems } from "@/cardsContent/supportPage";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function SliderMenu() {

    return (
        <Swiper
        modules={[Navigation, Scrollbar]}
        slidesPerView={2}
        navigation={true}
        pagination={{
            clickable: true
        }}
        scrollbar
        centeredSlides={false}

        >
            {
                menuItems.map((item) => <SwiperSlide><p className="slider-menu-item">{item}</p></SwiperSlide>)
            }

        </Swiper>
    )
}