import React, { useEffect, useRef } from "react";
// import InfoBoxes from "./InfoBoxes";
import ResultMain, { SearchSuggestions } from "./ResultMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { BASEURL } from "../../connection/BaseUrl";
// import Pagination from "./Pagination";
// import Newapi from "./Newapi";
// import BotResult from "./BotResult";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Grid } from "@mui/material";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import SliderImage from "./SliderImage";
import "./Carousel.css";

const styles = {
    container: {
        height: "100%",
        overflowY: "scroll",
        padding: "12px",
        // width: "450px",
    },
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { EffectCoverflow, FreeMode } from "swiper";

function SearchResults({ query }) {
    const [search_results, SetSearch_Results] = React.useState([]);
    const [array_search_results, SetArraySearch_Results] = React.useState([]);
    const [Results_State, SetResults_State] = React.useState(false);
    const [Results_Error, SetResults_Error] = React.useState(false);

    const [SsebowaResults, SetSsebowaResults] = React.useState([]);

    const [NewSearch, SetNewSearch] = React.useState([]);

    const [Combine_Results, SetCombineResults] = React.useState([]);

    const [CahtbotResults, SetChatbotResults] = React.useState("");

    const [ImageResult, SetImageResult] = React.useState([]);

    const [currentPage, setcurrentPage] = React.useState(1);
    const [postPerPage, setPostPerPage] = React.useState(5);
    const [swiperLoopFixed, setSwiperLoopFixed] = React.useState(false);

    const sliderRef = useRef(null);

    const handlePrev = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = React.useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const FetchSearchQuery = () => {
        console.log("Fetching...");
        SetResults_State(false);
        SetResults_Error(false);
        var f_url = BASEURL + "search";
        try {
            fetch(f_url, {
                method: "GET",
                mode: "cors",
                headers: {
                    query: query,
                },
            })
                .then((r) => r.json())
                .then((r) => {
                    console.log(r);
                    SetSearch_Results(r);
                    SetArraySearch_Results(r.results);
                    // console.log("🚀 ~ file: SearchResults.js:36 ~ .then ~ r.results:", r.results);
                    // console.log(search_results);
                    const timer = setTimeout(() => {
                        SetResults_State(true);
                    }, 1000);
                    return () => clearTimeout(timer);
                })
                .catch((e) => {
                    console.log("Fetch Error", e);
                    SetResults_Error(true);
                });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (query) {
            FetchSearchQuery();
        }
    }, [query]);

    let x;

    useEffect(() => {
        fetch(`https://chatapi.ssebowa.org/in_search/?keyword=${query}`, {
            method: "post",
        })
            .then((response) => response.json())
            .then((data) => SetNewSearch(data))
            .catch((error) => console.error(error));
    }, [query]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await axios.get(`https://api.mwmbl.org/search?s=${query}`);
    //             // console.log(response.data);
    //             SetSsebowaResults(response.data);
    //         } catch (error) {
    //             console.log(`Error in fetching data: ${error.message}`);
    //         }
    //     }

    //     fetchData();

    //     return () => {
    //         // Clean up function
    //     };
    // }, [query]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://chatapi.ssebowa.org/chatbot/${query}`);
                console.log(response.data);

                SetChatbotResults(response.data.generated_text);
            } catch (error) {
                console.log(`Error in fetching data: ${error.message}`);
            }
        }

        fetchData();

        return () => {
            // Clean up function
        };
    }, [query]);

    // useEffect(() => {
    //     fetch(`https://chatapi.ssebowa.org/image/?keyword=${query}`, {
    //         method: "post",
    //     })
    //         .then((response) => response.json())
    //         .then((data) => SetImageResult(data.images))
    //         .catch((error) => console.error(error));
    // }, [query]);

    var zain;
    zain = CahtbotResults.split(`\\`);
    // console.log("zain:", zain);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPage = indexOfLastPost - postPerPage;
    const currentPosts = SsebowaResults.slice(indexOfFirstPage, indexOfLastPost);

    // change page
    const paginate = (pageNumber) => setcurrentPage(pageNumber);

    if (Results_State) {
        return (
            <div style={{}}>
                <div className="SearchResultsMain pt-3">
                    <div className="SearchResultsInnerLeft ">
                        {/*<p className="text-dark mb-0">
                            About {search_results != undefined ? <>{Math.round(Math.random() * 27300000000)}</> : <> {search_results?.number_of_results}</>}{" "}
                            results
                        </p>*/}

                        <div className="chatbot-result">
                            {zain.map((res, index) => {
                                return (
                                    <>
                                        <div key={index} className="chatbot-result-row">{res}</div>
                                    </>
                                );
                            })}
                        </div>

                        {/*<Card
                            className="chatbot-result"
                            // style={{ width: "480px", marginLeft: "20px" }}
                            sx={{
                                width: {
                                    lg: "100%",
                                    md: "90vw",
                                    xs: "90vw",
                                },
                                marginLeft: {
                                    lg: "0",
                                    xs: "15px",
                                },
                            }}
                        >
                            <CardContent className="chatbot-result-card">
                                <div style={styles.container}>
                                    {zain.map((res, index) => {
                                        return (
                                            <>
                                                <div key={index}> {res}</div>
                                                <br />
                                            </>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>*/}

                        {/* <small>Swipe right to see more...</small> */}

                        {/* <Grid container>

                            <Grid md={12} lg={12} sm={12} xs={12}>
                                {" "}
                                <div className="mb-5 slider__conatiner">
                                    <div className="img-slider" style={{ marginY: "10px" }}>
                                        <div style={{ margin: "0 -15px" }}>
                                            <Slider {...cards}>
                                                {ImageResult.map((string, index) => {
                                                    return <SliderImage key={index} string={string} style={{ borderRadius: "10px" }} />;
                                                })}


    {ImageResult && (
        <ImageList className="d-flex">
            {ImageResult.map((string, index) => (
                <ImageListItem key={index}>
                    <a href={string} className="d-flex">
                        <img src={string} alt="img" style={{borderRadius:"10px"}}/> />
                    </a>
                </ImageListItem>
            ))}
        </ImageList>
    )}

                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid> */}

                        {search_results && (
                            <div style={{ marginTop: "2rem" }}>
                                {/*<h5 className="px-2 px-lg-4 mb-2 mb-lg-4 text-center font-weight-bold">
                                    <FontAwesomeIcon icon={faCaretRight} className="pe-2 text-primary" />
                                    General Results
                                    <FontAwesomeIcon icon={faCaretLeft} className="ps-2 text-primary" />
                                </h5>*/}
                                <div className="result-slider">
                                    <div style={{ margin: "0 -15px" }}>
                                        <Swiper
                                            ref={sliderRef}
                                            // effect={"coverflow"}
                                            // initialSlide={2}
                                            // loop={true}
                                            // loopedSlides={2}
                                            height={190}
                                            grabCursor={true}
                                            cssMode={false}
                                            // centeredSlides={true}
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
                                                    spaceBetween: 10,
                                                    /*coverflowEffect: {
                                                        stretch: -5,
                                                    },*/
                                                    height: 250,
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
                                            {search_results?.results?.map((item, i) => {
                                                return (
                                                    <SwiperSlide key={i}>
                                                        <ResultMain key={i} data={item} />
                                                    </SwiperSlide>
                                                );
                                            })}
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

                </div>
            </div>
        );
    } else if (!Results_State) {
        return !Results_Error ? (
            <>
                {/*<div className="w-100 d-flex align-items-center justify-content-center" style={{ height: "70vh" }}>
                   <ColorRing
                       visible={true}
                       height="80"
                       width="80"
                       ariaLabel="blocks-loading"
                       wrapperStyle={{}}
                       wrapperClass="blocks-wrapper"
                       colors={["#59e3a7", "#118442", "#181C51", "#59e3a7", "#118442"]}
                   />
               </div>*/}
            </>
        ) : (
            <div className="w-100 d-flex align-items-center justify-content-center flex-column"
                 style={{ height: "70vh" }}>
                <h6 className="text-danger fw-bold mb-5"> An Error Occured </h6>
                <button onClick={() => FetchSearchQuery()} type="button" className="btn btn-primary">
                    Retry
                </button>
            </div>
        );
    }
}

export default SearchResults;

SearchResults.propTypes = {
    query: PropTypes.string,
};
