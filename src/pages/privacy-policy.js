import React from "react";

import CausesPage from "../components/causes";
import PrivacyPolicyData from "../data/privacyPolicy.json";

import SEO from "../components/seo";

import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import StickyChatBot from "../components/stickyChatBot";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";

const PrivacyPolicy = () => {
    return (
        <div>
            <NavBarUpdated2></NavBarUpdated2>
            <div className="pt-5">
                <>
                    <SEO title="Ssebowa - Terms and Conditions" />
                    {/* <PageBanner className="text-center" title="Privacy Policies" excerpt="Our privacy policies" image="./images/service/privacy.png" /> */}

                    {/* <div className="pt-10 ">
                    <h4 className="h3 text-center">PRIVACY POLICY</h4>
                    <p className="mx-1"></p>
                </div> */}
                    <div>
                        <ul className="list-unstyled m-5 p-5 pt-5">
                            {PrivacyPolicyData &&
                                PrivacyPolicyData.map((policy) => {
                                    return (
                                        <li key={policy.key} className="py-3">
                                            <CausesPage key={policy.key} data={policy}></CausesPage>
                                        </li>
                                    );
                                })}
                            <h5>More about the policy</h5>
                            <p>This Privacy Policy only applies to our website and its related services, collectively the “Services”. If you proceed to other websites via our links, our privacy policy is void. Please note that we may from time to time update this Privacy Policy by posting a new version on <a href="https://ssebowa.org/">ssebowa.org</a>  . When we make any changes, we will notify you by posting a notice in the Services prior to the change becoming effective. Your continued use of the Services after the effective date will be subject to the new Privacy Policy.</p>
                            <p>If you have any further questions please contact us we'll be happy to answer any questions or concerns you may have.</p>
                        </ul>
                    </div>
                    <Footer></Footer>
                </>
                <StickyChatBot />
            </div>
        </div>
    );
};

export default PrivacyPolicy;
