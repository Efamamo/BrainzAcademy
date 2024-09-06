// CustomArrows.js
import React from 'react';
import Subject from '../Subject';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import '../Grades.css';
import maths from '../../../../images/G9-math.png';
import amharic from '../../../../images/G9-Amharic.png';
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
import { PrevArrow, NextArrow } from '../CustomArrow';

const subjects = [
  {
    number: 1,
    title: 'Amharic',
    image: amharic,
    subject: 'Amharic',
    link: '/resources/highschool/grade9/amharic',
  },
  {
    number: 2,
    title: 'English',
    image: english,
    subject: 'English',
    link: '/resources/highschool/grade9/english',
  },
  {
    number: 3,
    title: 'Mathematics',
    image: maths,
    subject: 'Mathematics',
    link: '/resources/highschool/grade9/maths',
  },
  {
    number: 4,
    title: 'Geography',
    image: Geography,
    subject: 'Geography',
    link: '/resources/highschool/grade9/geography',
  },
  {
    number: 5,
    title: 'Biology',
    image: Biology,
    subject: 'Biology',
    link: '/resources/highschool/grade9/biology',
  },
  {
    number: 6,
    title: 'History',
    image: History,
    subject: 'History',
    link: '/resources/highschool/grade9/history',
  },
  {
    number: 7,
    title: 'IT',
    image: it,
    subject: 'Information Technology',
    link: '/resources/highschool/grade9/it',
  },
  {
    number: 8,
    title: 'Citizenship Education',
    image: citizen,
    subject: 'Citizenship Education',
    link: '/resources/highschool/grade9/citizen',
  },
  {
    number: 9,
    title: 'Chemistry',
    image: Chemistry,
    subject: 'Chemistry',
    link: '/resources/highschool/grade9/chemistry',
  },
  {
    number: 10,
    title: 'HPE',
    image: HPE,
    subject: 'HPE',
    link: '/resources/highschool/grade9/hpe',
  },
  {
    number: 11,
    title: 'Physics',
    image: Physics,
    subject: 'Physics',
    link: '/resources/highschool/grade9/physics',
  },
  {
    number: 12,
    title: 'Economics',
    image: Economics,
    subject: 'Economics',
    link: '/resources/highschool/grade9/economics',
  },
];

const Grade9 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="grade">
      <p>
        Welcome to the Grade 9 Learning Materials page! Here, you'll find a
        comprehensive collection of essential textbooks designed to support your
        academic journey across various subjects. Whether you're studying in the
        classroom or at home, these resources will help you enhance your
        understanding and expand your knowledge. Dive into the diverse and
        challenging topics of Grade 9 and let these materials guide you towards
        achieving your academic goals and excelling in your studies.
      </p>

      <h2>Lists of Grade 9 Textbooks</h2>

      <Slider {...settings}>
        {subjects.map((subject) => (
          <Link
            style={{ display: 'flex', justifyContent: 'center' }}
            key={subject.number}
            to={subject.link}
          >
            <Subject
              number={subject.number}
              title={subject.title}
              image={subject.image}
              grade={9}
              subject={subject.subject}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Grade9;
