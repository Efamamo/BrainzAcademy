import React from "react";
import Subject from "../Subject";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
import maths from "../../../../images/G9-math.png";
import amharic from "../../../../images/G9-Amharic.png";
import english from '../../../../images/G9-english.png';
import Geography from '../../../../images/G9-geo.png';
import Biology from '../../../../images/G9-biology.png';
import Chemistry from '../../../../images/G9-chemistry.webp';
import History from '../../../../images/G9-history.png';
import it from '../../../../images/G9-it.png';
import citizen from '../../../../images/G9-citizenship.jpeg';
import HPE from '../../../../images/G9-HPE.png';
import Physics from '../../../../images/G9-physics.jpeg';
import Economics from '../../../../images/G9-economics.png';

const Grade9 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        gap:5,
        
    };

    return (
        <div className="grade">
            <p>
                Welcome to the Grade 9 Learning Materials page! Here, you'll find a comprehensive
                collection of essential textbooks designed to support your academic journey
                across various subjects. Whether you're studying in the classroom or at home, these
                resources will help you enhance your understanding and expand your knowledge. Dive
                into the diverse and challenging topics of Grade 9 and let these materials guide you
                towards achieving your academic goals and excelling in your studies.
            </p>

            <h2 className="text-xl font-semibold mb-20">Lists of Grade 9 Textbooks</h2>

            <Slider {...settings}className="mb-20 ">
                <Link to="/resources/highschool/grade9/amharic">
                    <Subject number={1} title={"Amharic"} image={amharic} grade={9} subject={"amharic"} />
                </Link>
                <Link to='/resources/highschool/grade9/english'>
                    <Subject number={2} title={"English"} image={english} grade={9} subject={"english"} />
                </Link>
                <Link to="/resources/highschool/grade9/maths">
                    <Subject number={3} title={"Mathematics"} image={maths} grade={9} subject={"maths"} />
                </Link>
                <Link to="/resources/highschool/grade9/Geography">
                    <Subject number={4} title={"Geography"} image={Geography} grade={9} subject={"geography"} />
                </Link>
                <Link to="/resources/highschool/grade9/Biology">
                    <Subject number={5} title={"Biology"} image={Biology} grade={9} subject={"biology"} />
                </Link>
                <Link to="/resources/highschool/grade9/History">
                    <Subject number={6} title={"History"} image={History} grade={9} subject={"history"} />
                </Link>
                <Link to="/resources/highschool/grade9/it">
                    <Subject number={7} title={"IT"} image={it} grade={9} subject={"it"} />
                </Link>
                <Link to="/resources/highschool/grade9/citizen">
                    <Subject number={8} title={"Citizenship Education"} image={citizen} grade={9} subject={"citizen"} />
                </Link>
                <Link to="/resources/highschool/grade9/chemistry">
                    <Subject number={9} title={"Chemistry"} image={Chemistry} grade={9} subject={"chemistry"} />
                </Link>
                <Link to="/resources/highschool/grade9/HPE">
                    <Subject number={10} title={"HPE"} image={HPE} grade={9} subject={"hpe"} />
                </Link>
                <Link to="/resources/highschool/grade9/Physics">
                    <Subject number={11} title={"Physics"} image={Physics} grade={9} subject={"physics"} />
                </Link>
                <Link to="/resources/highschool/grade9/economics">
                    <Subject number={12} title={"Economics"} image={Economics} grade={9} subject={"economics"} />
                </Link>
            </Slider>
        </div>
    );
}

export default Grade9;
