import React, { useState, useEffect } from "react";
import styles from "./WhatWeContributeNumbers.module.css";
import Lottie from "lottie-react";
import trees from "../../assets/images/lottie/107005-energyshares-tree1.json";
import meals from "../../assets/images/lottie/food.json";
import pads from "../../assets/images/lottie/Pads.json"
import AnimatedNumbers from "react-animated-numbers";
import { TreesIncrementRate, PadsIncrementRate, MealsIncrementRate } from "../../connection/BaseUrl";
import CountUp from "react-countup";

function WhatWeContributeNumbers() {
    const [NumTrees, setNumTrees] = React.useState(27833);
    const [NumMeal, setNumMeal] = React.useState(3223);
    const [NumPads, setNumPads] = React.useState(123232);

    return (
        <div className={styles.WhatWeContributeNumbersWrapper}>
            <div className={styles.WhatWeContributeNumbers}>
                <WWXNInner IncrementRate={TreesIncrementRate} num={NumTrees} text={"Trees Planted"} an={trees} />
                <WWXNInner IncrementRate={PadsIncrementRate} num={NumPads} text={"Pads Given"} an={pads} />
                <WWXNInner IncrementRate={MealsIncrementRate} num={NumMeal} text={"Meals Served"} an={meals} />
            </div>
        </div>
    );
}

export default WhatWeContributeNumbers;

const WWXNInner = ({ text, an, num, IncrementRate }) => {
    const [Number, SetNumber] = useState(0);
    useEffect(() => {
        SetNumber(num);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            SetNumber((prevState) => prevState + 1);
        }, IncrementRate*1000);
        return () => clearInterval(interval);
    });
    return (
        <div className={styles.WWCNInner}>
            <Lottie animationData={an} loop={false} style={{ width: 30 }} />
            <h6>{text}</h6>
            <p>
                <CountUp
                    start={Number}
                    end={Number + 1}
                    duration={IncrementRate}
                />
            </p>
        </div>
    );
};
