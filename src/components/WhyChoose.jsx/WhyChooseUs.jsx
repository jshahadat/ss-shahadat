import "./WhyChooseUs.css";
import happiness1 from "../../assets/choose/choose4.webp";
import happiness2 from "../../assets/choose/choose1.webp";
import happiness3 from "../../assets/choose/choose3.webp";
import happiness4 from "../../assets/choose/choosee4.webp";
import cupshape from "../../assets/images/howWorks/cupshape.jpeg";
import bagshape from "../../assets/images/howWorks/bagshape.jpeg";
import purseshape from "../../assets/images/howWorks/purseshape.jpeg";
import shape2 from "../../assets/images/howWorks/shape2.jpeg";
import Meal from "../../assets/choose/mealserved.jpg"
import Trees from "../../assets/choose/treesplanted.jpg"

const WhyChooseUs = () => {
    return (
        <div className="container">
            <div className="text-center mt-5">
                <h1 className="choose-title mt-5">
                    Why <span style={{ color: "#4AB421" }}>Choose</span> US?
                </h1>
                <p
                    className="mt-4 mb-16 choose-para">
                    We are authentic, down-to-earth, true to ourselves and honest to Ssebowa users. We say what we will accomplish and accomplish what we say.
                    Our team prioritises the earth and its people and that is why we aim at engaging everyone in restoring the environment, eliminating hunger
                    and keeping a girl child in school through Information Technology.
                </p>
            </div>

            <div
                className="lg:flex lg:justify-around d-flex
             justify-content-evenly align-items-center WhyChooseUsCards py-5"
            >

                <div className="d-flex groups-m">

                    <div className="flex flex-col text-center flex-sm-column my-5 me-5">
                        <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/s28Ffwr/a-Capture-fotor-bg-remover-20230320145139.png" alt=" " width="90px" height="90px" />

                        <h1 className=" text-3xl font-semibold mt-3">750+</h1>
                        <p className=" text-2xl font-medium mt-3" style={{ color: "#808080" }}>
                            trees planted
                        </p>
                        <img className="mt-6 rounded-xl  ml-6" style={{ borderRadius: "6px" }} src={Trees} alt="" />
                    </div>

                    <div className="flex flex-col justify-center justify-items-center text-center my-5">
                        {/* <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" /> */}
                        <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/tPdhzBq/b-Capture-fotor-bg-remover-20230320145533.png" alt="" width="90px" height="90px" />

                        <h1 className=" text-3xl font-semibold mt-3">1000+</h1>
                        <p className=" text-2xl font-medium mt-3" style={{ color: "#808080" }}>
                            Meals Served
                        </p>
                        <img className="mt-6 rounded-xl  ml-6" style={{ borderRadius: "6px" }} src={Meal} alt="" />
                    </div>
                </div>

                <div className="d-flex">
                    <div className="flex flex-col justify-center justify-items-center text-center my-5 me-5">
                        {/* <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" /> */}
                        <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/pfs7JC2/shape2-fotor-bg-remover-20230320145842.png" alt="" width="90px" height="90px" />

                        <h1 className=" text-3xl font-semibold mt-3">670+</h1>
                        <p className=" text-2xl font-medium mt-3" style={{ color: "#808080" }}>
                            pads provided
                        </p>
                        <img className="mt-6 rounded-xl ml-6" style={{ borderRadius: "6px" }} src={happiness2} alt="" />
                    </div>

                    <div className="flex flex-col justify-center justify-items-center text-center my-5">
                        {/* <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/0rkqqSf/Vector.png" alt="" width="250px" height="250px" /> */}
                        <img className="bg-blue ml-6 w-60 h-36" src="https://i.ibb.co/yXrDN1x/bagshape-fotor-bg-remover-2023032015423.png" alt="" width="90px" height="90px" />

                        <h1 className=" text-3xl font-semibold mt-3">458+</h1>
                        <p className=" text-2xl font-medium mt-3" style={{ color: "#808080" }}>
                            Projects
                        </p>
                        <img className="mt-6 rounded-xl  ml-6" style={{ borderRadius: "6px" }} src={happiness1} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;
