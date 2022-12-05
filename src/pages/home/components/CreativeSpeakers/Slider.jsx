import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SpeakersData from "./../../../../design-system/components/CreativeSpeakers/SpeakersData";
import CreativeSpeakers from "../../../../design-system/components/CreativeSpeakers/CreativeSpeakers";

export default () => {
    return (
        <Swiper
            autoplay={{ delay: 2000,
            disableOnInteraction:false,
            }}
            
            loop={true}
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
        >
            {SpeakersData.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <CreativeSpeakers
                            name={item.name}
                            img={item.img}
                            job={item.job}
                            alt={item.alt}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
