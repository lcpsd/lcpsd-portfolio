import { A11y, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectSlide } from "./ProjectSlide";

export function ProjectsCarousel() {

    const projects = [
        {
            id: 1,
            title: "Nome Projeto",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum enim rem, qui illo quisquam sequi suscipit, vero veniam eius, iste excepturi at harum quaerat accusamus officiis a voluptatum sint.",
            techs: [
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                },
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                },
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                }
            ],
            screenshots: [
                "https://i.imgur.com/hhQnIUl.png",
                "https://i.imgur.com/hhQnIUl.png"
            ]
        },

        {
            id: 2,
            title: "Nome Projeto",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum enim rem, qui illo quisquam sequi suscipit, vero veniam eius, iste excepturi at harum quaerat accusamus officiis a voluptatum sint.",
            techs: [
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                },
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                },
                {
                    logo: "https://i.imgur.com/eCD0M12.png",
                    title: "tech"
                }
            ],
            screenshots: [
                "https://i.imgur.com/hhQnIUl.png",
                "https://i.imgur.com/hhQnIUl.png"
            ]
        }
    ]

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
            {
                projects.map(project => (
                    <SwiperSlide
                        key={project.id}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <ProjectSlide project={project} key={project.id} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}