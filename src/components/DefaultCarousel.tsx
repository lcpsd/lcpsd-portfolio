import { A11y, Pagination } from "swiper";
import { Swiper } from "swiper/react";

interface DefaultCarousel {
    children: JSX.Element | JSX.Element[];
}

export function DefaultCarousel({ children }: DefaultCarousel) {

    return (
        <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            style={{
                width: "100%",
                height: "100%",
            }}

        >
            {children}
        </Swiper>
    )
}