// CustomArrows.js
import React from 'react';
import Subject from '../Subject';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import maths from '../../../../images/G10-math.png';
import amharic from '../../../../images/G10-Amharic.png';
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
import { PrevArrow, NextArrow } from '../CustomArrow';

const subjects = [
  {
    number: 1,
    title: 'Amharic',
    image: amharic,
    subject: 'Amharic',
    link: '/resources/highschool/grade10/amharic',
  },
  {
    number: 2,
    title: 'English',
    image: english,
    subject: 'English',
    link: '/resources/highschool/grade10/english',
  },
  {
    number: 3,
    title: 'Mathematics',
    image: maths,
    subject: 'Mathematics',
    link: '/resources/highschool/grade10/maths',
  },
  {
    number: 4,
    title: 'Geography',
    image: Geography,
    subject: 'Geography',
    link: '/resources/highschool/grade10/geography',
  },
  {
    number: 5,
    title: 'Biology',
    image: Biology,
    subject: 'Biology',
    link: '/resources/highschool/grade10/biology',
  },
  {
    number: 6,
    title: 'History',
    image: History,
    subject: 'History',
    link: '/resources/highschool/grade10/history',
  },
  {
    number: 7,
    title: 'IT',
    image: it,
    subject: 'Information Technology',
    link: '/resources/highschool/grade10/it',
  },
  {
    number: 8,
    title: 'Citizenship Education',
    image: citizen,
    subject: 'Citizenship Education',
    link: '/resources/highschool/grade10/citizen',
  },
  {
    number: 9,
    title: 'Chemistry',
    image: Chemistry,
    subject: 'Chemistry',
    link: '/resources/highschool/grade10/chemistry',
  },
  {
    number: 10,
    title: 'HPE',
    image: HPE,
    subject: 'HPE',
    link: '/resources/highschool/grade10/hpe',
  },
  {
    number: 11,
    title: 'Physics',
    image: Physics,
    subject: 'Physics',
    link: '/resources/highschool/grade10/physics',
  },
  {
    number: 12,
    title: 'Economics',
    image: Economics,
    subject: 'Economics',
    link: '/resources/highschool/grade10/economics',
  },
];

const Grade10 = () => {
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
        Welcome to the Grade 10 Learning Materials page! Here, you'll find a
        comprehensive collection of essential textbooks designed to support your
        academic journey across various subjects. Whether you're studying in the
        classroom or at home, these resources will help you enhance your
        understanding and expand your knowledge. Dive into the diverse and
        challenging topics of Grade 10 and let these materials guide you towards
        achieving your academic goals.
      </p>

      <h2>List of Grade 10 Textbooks</h2>

      <Slider {...settings}>
        {subjects.map((subject) => (
          <Link key={subject.number} to={subject.link}>
            <Subject
              number={subject.number}
              title={subject.title}
              image={subject.image}
              grade={10}
              subject={subject.subject}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Grade10;
