import React from "react";
import Subject from "../Subject";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import maths from "../../../../images/G10-math.png";
import amharic from "../../../../images/G10-Amharic.png";
import english from '../../../../images/G10-English.png';
import Geography from '../../../../images/G10-Geo.jpeg';
import Biology from '../../../../images/G10-Biology.jpeg';
import Chemistry from '../../../../images/G10-Chemistry.jpeg';
import History from '../../../../images/G10History.jpeg';
import it from '../../../../images/G10-IT.png';
import citizen from '../../../../images/G10-citizen.jpeg';
import HPE from '../../../../images/G10-HPE.jpeg';
import Physics from '../../../../images/G10-Physics.jpeg';
import Economics from '../../../../images/G10-Economics.jpeg';

const Grade10 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        gap: 5,
    };

    return (
        <div className="grade">
            <p>
                Welcome to the Grade 10 Learning Materials page! Here, you'll find a comprehensive
                collection of essential textbooks designed to support your academic journey
                across various subjects. Whether you're studying in the classroom or at home, these
                resources will help you enhance your understanding and expand your knowledge. Dive
                into the diverse and challenging topics of Grade 10 and let these materials guide you
                towards achieving your academic goals and excelling in your studies.
            </p>

            <h2 >Lists of Grade 10 Textbooks</h2>

            <Slider {...settings}>
                <Link to="/resources/highschool/grade10/amharic">
                    <Subject number={1} title={"Amharic"} image={amharic} grade={10} subject={"amharic"} />
                </Link>
                <Link to='/resources/highschool/grade10/english'>
                    <Subject number={2} title={"English"} image={english} grade={10} subject={"english"} />
                </Link>
                <Link to="/resources/highschool/grade10/maths">
                    <Subject number={3} title={"Mathematics"} image={maths} grade={10} subject={"maths"} />
                </Link>
                <Link to="/resources/highschool/grade10/Geography">
                    <Subject number={4} title={"Geography"} image={Geography} grade={10} subject={"geography"} />
                </Link>
                <Link to="/resources/highschool/grade10/Biology">
                    <Subject number={5} title={"Biology"} image={Biology} grade={10} subject={"biology"} />
                </Link>
                <Link to="/resources/highschool/grade10/History">
                    <Subject number={6} title={"History"} image={History} grade={10} subject={"history"} />
                </Link>
                <Link to="/resources/highschool/grade10/it">
                    <Subject number={7} title={"IT"} image={it} grade={10} subject={"it"} />
                </Link>
                <Link to="/resources/highschool/grade10/citizen">
                    <Subject number={8} title={"Citizenship Education"} image={citizen} grade={10} subject={"citizen"} />
                </Link>
                <Link to="/resources/highschool/grade10/chemistry">
                    <Subject number={9} title={"Chemistry"} image={Chemistry} grade={10} subject={"chemistry"} />
                </Link>
                <Link to="/resources/highschool/grade10/HPE">
                    <Subject number={10} title={"HPE"} image={HPE} grade={10} subject={"hpe"} />
                </Link>
                <Link to="/resources/highschool/grade10/Physics">
                    <Subject number={11} title={"Physics"} image={Physics} grade={10} subject={"physics"} />
                </Link>
                <Link to="/resources/highschool/grade10/economics">
                    <Subject number={12} title={"Economics"} image={Economics} grade={10} subject={"economics"} />
                </Link>
            </Slider>
        </div>
    );
}

export default Grade10;
