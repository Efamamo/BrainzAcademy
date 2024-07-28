import React from "react";
import Subject from "../Subject";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import maths from "../../../../images/G11-math.jpeg";
import Agri from "../../../../images/G11-Agri.jpeg";
import english from '../../../../images/G11-English.jpeg';
import Geography from '../../../../images/G11-Geo.jpeg';
import Biology from '../../../../images/G11-Biology.png';
import Chemistry from '../../../../images/G11-Chemistry.jpeg';
import History from '../../../../images/G11-History.jpeg';
import it from '../../../../images/G11-IT.jpeg';
import Physics from '../../../../images/G12-Physics.jpeg';
import Economics from '../../../../images/G11-Economics.jpeg';

const Grade11 = () => {
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
                Welcome to the Grade 11 Learning Materials page! Here, you'll find a comprehensive
                collection of essential textbooks designed to support your academic journey
                across various subjects. Whether you're studying in the classroom or at home, these
                resources will help you enhance your understanding and expand your knowledge. Dive
                into the diverse and challenging topics of Grade 11 and let these materials guide you
                towards achieving your academic goals and excelling in your studies.
            </p>

            <h2>Lists of Grade 11 Textbooks</h2>

            <Slider {...settings}>
                <Link to="/resources/highschool/grade11/agriculture">
                    <Subject number={1} title={"Agriculture"} image={Agri} grade={11} subject={"Agriculture"} />
                </Link>
                <Link to='/resources/highschool/grade11/english'>
                    <Subject number={2} title={"English"} image={english} grade={11} subject={"english"} />
                </Link>
                <Link to="/resources/highschool/grade11/maths">
                    <Subject number={3} title={"Mathematics"} image={maths} grade={11} subject={"maths"} />
                </Link>
                <Link to="/resources/highschool/grade11/Geography">
                    <Subject number={4} title={"Geography"} image={Geography} grade={11} subject={"geography"} />
                </Link>
                <Link to="/resources/highschool/grade11/Biology">
                    <Subject number={5} title={"Biology"} image={Biology} grade={11} subject={"biology"} />
                </Link>
                <Link to="/resources/highschool/grade11/History">
                    <Subject number={6} title={"History"} image={History} grade={11} subject={"history"} />
                </Link>
                <Link to="/resources/highschool/grade11/it">
                    <Subject number={7} title={"IT"} image={it} grade={11} subject={"it"} />
                </Link>
                
                <Link to="/resources/highschool/grade11/chemistry">
                    <Subject number={8} title={"Chemistry"} image={Chemistry} grade={11} subject={"chemistry"} />
                </Link>
                
                <Link to="/resources/highschool/grade11/Physics">
                    <Subject number={9} title={"Physics"} image={Physics} grade={11} subject={"physics"} />
                </Link>
                <Link to="/resources/highschool/grade11/economics">
                    <Subject number={10} title={"Economics"} image={Economics} grade={11} subject={"economics"} />
                </Link>
            </Slider>
        </div>
    );
}

export default Grade11;
