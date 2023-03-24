import React, { useRef } from "react";
import { useEffect, useState } from "react";
// import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { EffectCoverflow, FreeMode } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function SearchResultsImages({ query }) {
    const [imageUrls, setImageUrls] = useState([]);

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
        fetch(`https://chatapi.ssebowa.org/image/?keyword=${query}`, {
            method: "post",
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("images data", data)
                setImageUrls(data.images);
            })
            .catch((error) => console.error(error));
    }, [query]);

    return (
        <div className="search-result-images w-100 px-2 px-lg-3">
            {/*{imageUrls && (
                <ImageList sx={{ width: "100%", height: 450}} cols={6} variant="quilted" rowHeight={130}>

                </ImageList>
            )}*/}

            {!!imageUrls.length && (
                <div className="py-3">
                    {/*<h5 className="px-2 px-lg-4 mb-2 mb-lg-4 text-center font-weight-bold">
                        <FontAwesomeIcon icon={faCaretRight} className="pe-2 text-primary" />
                        Image Results
                        <FontAwesomeIcon icon={faCaretLeft} className="ps-2 text-primary" />
                    </h5>*/}
                    <div className="result-slider" style={{ marginY: "10px" }}>
                        <div style={{ margin: "0 -15px" }}>
                            <Swiper
                                // effect={"coverflow"}
                                ref={sliderRef}
                                grabCursor={true}
                                // loop={true}
                                cssMode={false}
                                height={250}
                                // loopedSlides={2}
                                // initialSlide={2}
                                freeMode={{ sticky: false, enabled: true }}
                                // centeredSlides={true}
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
                                {imageUrls.map((string, index) => (
                                    <SwiperSlide key={index}>
                                        <ImageListItem key={index} classes="result-image-wrapper">
                                            <a href={string} className="result-image-link">
                                                <p className="image-text">Some title here</p>
                                                <img src={string} className="result-image-item" loading="lazy"
                                                     alt="img" />
                                            </a>
                                        </ImageListItem>
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
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchResultsImages;
