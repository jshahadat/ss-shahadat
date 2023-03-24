import React from "react";

function index({ data }) {
    return (
        <div className="pt-5">
            <>
                <h5
                    style={{ textAlign: "justify" }}
                    className="h5 pt-5">{data.title}
                </h5>
                <p
                    style={{ textAlign: "justify" }}
                    className="px-3 text-justify"
                    dangerouslySetInnerHTML={{ __html: data.description1 }}
                ></p>
                {
                    data.description2 ?
                        <>
                            <p
                                style={{ textAlign: "justify" }}
                                className="px-3 text-justify"
                                dangerouslySetInnerHTML={{ __html: data.description2 }}
                            ></p>
                        </>
                        :
                        <>
                        </>

                }
                {
                    data.description3 ?
                        <>
                            <p
                                style={{ textAlign: "justify" }}
                                className="px-3"
                                dangerouslySetInnerHTML={{ __html: data.description3 }}
                            ></p>
                        </>
                        :
                        <>
                        </>

                }
                {
                    data.description4 ?
                        <>
                            <p
                                style={{ textAlign: "justify" }}
                                className="px-3"
                                dangerouslySetInnerHTML={{ __html: data.description4 }}
                            ></p>
                        </>
                        :
                        <>
                        </>

                }
            </>
        </div>
    );
}

export default index;
