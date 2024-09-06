import React from 'react';
import Subject from '../Subject';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from '../CustomArrow';

import maths from '../../../../images/G11-math.jpeg';
import Agri from '../../../../images/G11-Agri.jpeg';
import english from '../../../../images/G11-English.jpeg';
import Geography from '../../../../images/G11-Geo.jpeg';
import Biology from '../../../../images/G11-Biology.png';
import Chemistry from '../../../../images/G11-Chemistry.jpeg';
import History from '../../../../images/G11-History.jpeg';
import it from '../../../../images/G11-IT.jpeg';
import Physics from '../../../../images/G12-Physics.jpeg';
import Economics from '../../../../images/G11-Economics.jpeg';

const subjects = [
  {
    number: 1,
    title: 'Agriculture',
    image: Agri,
    subject: 'Agriculture',
    link: '/resources/highschool/grade11/agriculture',
  },
  {
    number: 2,
    title: 'English',
    image: english,
    subject: 'English',
    link: '/resources/highschool/grade11/english',
  },
  {
    number: 3,
    title: 'Mathematics',
    image: maths,
    subject: 'Mathematics',
    link: '/resources/highschool/grade11/maths',
  },
  {
    number: 4,
    title: 'Geography',
    image: Geography,
    subject: 'Geography',
    link: '/resources/highschool/grade11/geography',
  },
  {
    number: 5,
    title: 'Biology',
    image: Biology,
    subject: 'Biology',
    link: '/resources/highschool/grade11/biology',
  },
  {
    number: 6,
    title: 'History',
    image: History,
    subject: 'History',
    link: '/resources/highschool/grade11/history',
  },
  {
    number: 7,
    title: 'IT',
    image: it,
    subject: 'Information Technology',
    link: '/resources/highschool/grade11/it',
  },
  {
    number: 8,
    title: 'Chemistry',
    image: Chemistry,
    subject: 'Chemistry',
    link: '/resources/highschool/grade11/chemistry',
  },
  {
    number: 9,
    title: 'Physics',
    image: Physics,
    subject: 'Physics',
    link: '/resources/highschool/grade11/physics',
  },
  {
    number: 10,
    title: 'Economics',
    image: Economics,
    subject: 'Economics',
    link: '/resources/highschool/grade11/economics',
  },
];

const Grade11 = () => {
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
        Welcome to the Grade 11 Learning Materials page! Here, you'll find a
        comprehensive collection of essential textbooks designed to support your
        academic journey across various subjects. Whether you're studying in the
        classroom or at home, these resources will help you enhance your
        understanding and expand your knowledge. Dive into the diverse and
        challenging topics of Grade 11 and let these materials guide you towards
        achieving your academic goals.
      </p>

      <h2>List of Grade 11 Textbooks</h2>

      <Slider {...settings}>
        {subjects.map((subject) => (
          <Link key={subject.number} to={subject.link}>
            <Subject
              number={subject.number}
              title={subject.title}
              image={subject.image}
              grade={11}
              subject={subject.subject}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Grade11;
