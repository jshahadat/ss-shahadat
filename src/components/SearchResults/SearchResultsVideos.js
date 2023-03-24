import React, { useState, useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { EffectCoverflow, FreeMode } from "swiper";

import List from "@mui/material/List";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function SearchResultsVideos({ query }) {

    const [videoUrls, setVideoUrls] = useState([]);

    const sliderRef = useRef(null);

    const handlePrev = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    useEffect(() => {
        fetch(`https://chatapi.ssebowa.org/get_video?keyword=${query}`, {
            method: "post",
        })
            .then((response) => response.json())
            .then((data) => setVideoUrls(data.video))
            .catch((error) => console.error(error));
    }, [query]);


    return (
        <div className="my-4 w-100 px-2 px-lg-3">
            <div className="position-relative">
                {!!videoUrls.length && (
                    <div className="">
                        {/*<h5 className="px-2 px-lg-4 mb-2 mb-lg-4 text-center font-weight-bold">
                            <FontAwesomeIcon icon={faCaretRight} className="pe-2 text-primary" />
                            Video Results
                            <FontAwesomeIcon icon={faCaretLeft} className="ps-2 text-primary" />
                        </h5>*/}
                        <Swiper
                            // effect={"coverflow"}
                            ref={sliderRef}
                            grabCursor={true}
                            // loop={true}
                            // loopedSlides={2}
                            // initialSlide={2}
                            // centeredSlides={true}
                            height={325}
                            cssMode={false}
                            freeMode={{ sticky: false, enabled: true }}
                            spaceBetween={15}
                            slidesPerView={"auto"}
                            breakpoints={{
                                300: {
                                    /*coverflowEffect: {
                                        stretch: 100,
                                    },*/
                                    // initialSlide: 0,
                                    cssMode: true,
                                },
                                700: {
                                    slidesPerView: 5,
                                    spaceBetween: 10
                                    /*coverflowEffect: {
                                        stretch: -5,
                                    },*/
                                },
                            }}
                            /*coverflowEffect={{
                                rotate: 5,
                                stretch: 20.5,
                                depth: 150,
                                modifier: 3,
                                slideShadows: false,
                            }}*/
                            pagination={false}
                            modules={[FreeMode]}
                            className="mySwiper"
                        >
                            {videoUrls.map((videoInfo, index) => (
                                <SwiperSlide key={index}>
                                    {" "}
                                    <Card
                                        key={index}
                                        className="result-video-card"
                                    >
                                        <a href={videoInfo.link} style={{ textDecoration: "none" }}>
                                            <CardMedia component="img" image={videoInfo.tump_img} className="video-ele"
                                                       sx={{ width: "200px" }} />
                                        </a>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                width: "100%",
                                            }}
                                        >
                                            <CardContent
                                                sx={{
                                                    flex: "flex",
                                                    textAlign: "left",
                                                }}
                                            >
                                                <a href={videoInfo.link} style={{ textDecoration: "none" }}>
                                                    <Typography component="div" variant="h5" sx={{ color: "blue" }}
                                                                className="video-title">
                                                        {videoInfo.title}
                                                    </Typography>
                                                </a>
                                                <Typography component="h6" variant="h6" sx={{ color: "text.secondary" }}
                                                            className="channel-name">
                                                    {videoInfo.channel_name}
                                                </Typography>

                                                <Typography component="span" variant="h6" className="channel-platform">
                                                    {videoInfo.video_platform}
                                                    <span> </span>
                                                </Typography>
                                                <Typography component="span" variant="small" sx={{ color: "info.main" }}
                                                            className="video-date">
                                                    <span> </span> {videoInfo.date}
                                                </Typography>
                                                <Typography component="div" variant="h6"
                                                            sx={{ color: "text.secondary" }} className="video-views">
                                                    <span>views:</span> {videoInfo.views}
                                                </Typography>
                                            </CardContent>
                                            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                                                <Typography></Typography>
                                            </Box>
                                        </Box>
                                    </Card>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/*<button className="prev-arrow" onClick={handlePrev}>
                            <FontAwesomeIcon icon={faCaretLeft} className={`icon`} />
                        </button>
                        <button className="next-arrow" onClick={handleNext}>
                            <FontAwesomeIcon icon={faCaretRight} className={`icon`} />
                        </button>*/}
                    </div>
                )}

            </div>
        </div>
    );
}

export default SearchResultsVideos;
