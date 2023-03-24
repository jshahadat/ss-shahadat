import "./RecentBlog.css";
import bowbridgecentral from "../../assets/images/bowbridgecentral.webp";

const RecentBlog = () => {
    return (
        <div>
            <div className="container w-100">
                <div className="RecentBlogTop pt-5 pb-5 mt-5 text-center">
                    <h2 className="recent-title">
                        Recent Blogs and <span>Articles</span>
                    </h2>
                    <p className="font-normal mt-4 mb-16 recent-para">
                        Discover the latest information about forestry, climate change, hunger, the underprivileged girl child and so much more on a global level as you learn and examine solutions that may fit and work towards a future with sustainable methods set for preventing climate change disasters, a future with no poor souls going to bed unfed, a future with the last girl having a chance and a voice for her rights to be earned and so many others.
                    </p>
                </div>
            </div>

            <div className="container wrap w-100 d-flex justify-content-center gap-5">
                <div className="">
                    <img src={bowbridgecentral} className="blog_img img-fluid" alt="" />
                </div>

                <div className="rounded-2 card-possition  gap-4">
                    <div className="inner-box p-4 bg-light shadow">
                        <button
                            className="d-flex  justify-content-cente ps-1  pb-1 text-white"
                            style={{ backgroundColor: "#77C54E", width: "109.48px", borderRadius: "6px", height: "26px" }}
                        >
                            Popular Tour
                        </button>
                        <h4 className="text-blogTitle my-2">Why Global Warming Keeps On Increasing?</h4>
                        <p className="text-blog">
                            Since the Industrial Revolution, human activities have increased greenhouse gases in the atmosphere resulting in more heat retention
                            and increased surface temperatures.
                        </p>
                    </div>{" "}

                    <div className="inner-box p-4 bg-light rounded-2 shadow">
                        <button
                            className="d-flex justify-content-center justify-items-center text-white"
                            style={{ backgroundColor: "#77C54E", width: "52px", borderRadius: "6px", height: "26px" }}
                        >
                            New
                        </button>

                        <h4 className="text-blogTitle my-2">Why Do People Suffer From Hunger Crisis?</h4>
                        <p className="text-blog">
                            Climate change linked with poverty, gender discrimination, conflicts, inequity, weak government and poor health systems all play a
                            role in keeping nutritious food out of reach for millions of people around the world. The most vulnerable group to this crisis are
                            the children.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;
