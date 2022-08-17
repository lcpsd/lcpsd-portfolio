import { SwiperSlide } from "swiper/react";
import { Container } from "../Container";
import { DefaultCarousel } from "../DefaultCarousel";
import { DefaultTitle } from "../DefaultTitle";
import { ProjectSlide } from "../ProjectSlide";

export function ProjectsSection() {

    const projects = [
        {
            id: 1,
            title: "Nome Projeto",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat earum enim rem, qui illo quisquam sequi suscipit, vero veniam eius, iste excepturi at harum quaerat accusamus officiis a voluptatum sint.",
            url: "http://google.com",
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
            url: "google.com",
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
        <Container h={{ sm: "100%", lg: "100vh" }}>
            <DefaultTitle title="Projetos" />
            <DefaultCarousel>
                {
                    projects.map(project => (
                        <SwiperSlide
                            key={project.id}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <ProjectSlide project={project} key={project.id} />
                        </SwiperSlide>
                    ))
                }
            </DefaultCarousel>
        </Container>
    )
}