import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import CreativeSpeakers from "../../../../design-system/components/CreativeSpeakers/CreativeSpeakers";
import SpeakersData from "./../../../../design-system/components/CreativeSpeakers/SpeakersData";

// eslint-disable-next-line import/no-anonymous-default-export
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
