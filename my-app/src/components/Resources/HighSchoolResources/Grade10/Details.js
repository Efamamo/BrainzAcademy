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

function saveGrade10Details() {
  localStorage.setItem(
    'grade10amharic',
    JSON.stringify({
      title: 'Amharic',
      image: amharic,
      description: 'የ10ኛ ክፍል አማርኛ እንደመጀመሪያ ቋንቋ የተማሪ መጽሐፍ',
      chapters: [
        'ምዕራፍ 1 : ቋንቋ',
        'ምዕራፍ 2 : ግብር',
        'ምዕራፍ 3 : ማዕድን ማውጣት',
        'ምዕራፍ 4 : ልቦለድ',
        'ምዕራፍ 5 : ቃላዊ ስነፅሑፍ',
        'ምዕራፍ 6 : ግጥም',
        'ምዕራፍ 7 : ኮቪድ -19 (ኮሮና)',
        'ምዕራፍ 8 : ተውኔት',
        'ምዕራፍ 9 : ማህበራዊ መገናኛ ብዙኃን እና ተግባቦት',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Amharic Textbook',
        grade: 10,
        curriculum: 'New',
        units: '9 units',
        pages: 175,
        size: '17.4MB',
      },
      relatedSubjects: [
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade10english',
    JSON.stringify({
      title: 'English',
      image: english,
      description: 'Download Ethiopia New Curriculum English Student Textbook',
      chapters: [
        'Unit 1: Living in Urban Areas',
        'Unit 2: Study Skills',
        'Unit 3: Traffic Accident',
        'Unit 4: National Parks',
        'Unit 5: Horticulture',
        'Unit 6: Poverty in Ethiopia',
        'Unit 7: Community Services',
        'Unit 8: Communicable Diseases',
        'Unit 9: Fairness and Equity',
        'Unit 10: The Internet',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'English Textbook',
        grade: 10,
        curriculum: 'New',
        units: '10 units',
        pages: 237,
        size: '80.6MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );
  localStorage.setItem(
    'grade10maths',
    JSON.stringify({
      title: 'Mathematics',
      image: maths,
      description:
        'Download Ethiopia New Curriculum Mathematics Student Textbook',
      chapters: [
        'Unit 1: Basic Concept of Sets',
        'Unit 2: Integers',
        'Unit 3: Linear Equations',
        'Unit 4: Ratio, Proportions, and Percentage',
        'Unit 5: Perimeter and Area of Plane Figure',
        'Unit 6: Concurrency of Plane Figure',
        'Unit 7: Data Handling',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Mathematics Textbook',
        grade: 10,
        curriculum: 'New',
        units: '7 units',
        pages: 252,
        size: '127MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade10geography',
    JSON.stringify({
      title: 'Geography',
      image: Geography,
      description:
        'Download Ethiopia New Curriculum Geography Student Textbook',
      chapters: [
        'Unit 1: Physical Characteristics of the Earth',
        'Unit 2: Human Evolution and World Population',
        'Unit 3: Human and Natural Resources',
        'Unit 4: Ancient Civilizations and Medieval',
        'Unit 5: Ancient History of Africa',
        'Unit 6: States and Peoples of Ancient and Medieval Ethiopia',
        'Unit 7: Contemporary Global Issues',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Geography Textbook',
        grade: 10,
        curriculum: 'New',
        units: '7 units',
        pages: 211,
        size: '11MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade10biology',
    JSON.stringify({
      title: 'Biology',
      image: Biology,
      description: 'Download Ethiopia New Curriculum Biology Student Textbook',
      chapters: [
        'Unit 1: The Science of Biology',
        'Unit 2: Classification of Living Things',
        'Unit 3: Cell Biology',
        'Unit 4: Genetics',
        'Unit 5: Evolution',
        'Unit 6: Ecology',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Biology Textbook',
        grade: 10,
        curriculum: 'New',
        units: '6 units',
        pages: 230,
        size: '27.7MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade10chemistry',
    JSON.stringify({
      title: 'Chemistry',
      image: Chemistry,
      description:
        'Download Ethiopia New Curriculum Chemistry Student Textbook',
      chapters: [
        'Unit 1: Fundamental Concepts of Chemistry',
        'Unit 2: Atoms and Atomic Structure',
        'Unit 3: The Periodic Table',
        'Unit 4: Chemical Bonding',
        'Unit 5: States of Matter',
        'Unit 6: Chemical Reactions',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Chemistry Textbook',
        grade: 10,
        curriculum: 'New',
        units: '6 units',
        pages: 284,
        size: '63MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade10history',
    JSON.stringify({
      title: 'History',
      image: History,
      description: 'Download Ethiopia New Curriculum History Student Textbook',
      chapters: [
        'Unit 1: The Ancient World',
        'Unit 2: The Medieval World',
        'Unit 3: Early Modern World',
        'Unit 4: Modern World',
        'Unit 5: The Contemporary World',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'History Textbook',
        grade: 10,
        curriculum: 'New',
        units: '5 units',
        pages: 289,
        size: '71MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade10it',
    JSON.stringify({
      title: 'IT',
      image: it,
      description: 'Download Ethiopia New Curriculum IT Student Textbook',
      chapters: [
        'Unit 1: Fundamentals of Information Technology',
        'Unit 2: Computer Hardware',
        'Unit 3: Computer Software',
        'Unit 4: Using the Internet',
        'Unit 5: Spreadsheets',
        'Unit 6: Databases',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'IT Textbook',
        grade: 10,
        curriculum: 'New',
        units: '6 units',
        pages: 216,
        size: '46.3MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade10citizen',
    JSON.stringify({
      title: 'Citizenship Education',
      image: citizen,
      description:
        'Download Ethiopia New Curriculum Citizenship Education Student Textbook',
      chapters: [
        'Unit 1: Civic Awareness',
        'Unit 2: Democracy',
        'Unit 3: Justice',
        'Unit 4: Peace',
        'Unit 5: Rights and Responsibilities',
        'Unit 6: Nationalism',
        'Unit 7: Globalization',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Citizenship Education Textbook',
        grade: 10,
        curriculum: 'New',
        units: '7 units',
        pages: 183,
        size: '23MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade10hpe',
    JSON.stringify({
      title: 'Health and Physical Education (HPE)',
      image: HPE,
      description:
        'Download Ethiopia New Curriculum Health and Physical Education Student Textbook',
      chapters: [
        'Unit 1: Introduction to Health and Physical Education',
        'Unit 2: Personal Hygiene',
        'Unit 3: Nutrition',
        'Unit 4: Substance Abuse',
        'Unit 5: Physical Fitness',
        'Unit 6: Sports and Games',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'HPE Textbook',
        grade: 10,
        curriculum: 'New',
        units: '6 units',
        pages: 198,
        size: '29.4MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade10economics',
    JSON.stringify({
      title: 'Economics',
      image: Economics,
      description:
        'Download Ethiopia New Curriculum Economics Student Textbook',
      chapters: [
        'Unit 1: Introduction to Economics',
        'Unit 2: Economic Systems',
        'Unit 3: Demand and Supply',
        'Unit 4: Market Structures',
        'Unit 5: National Income',
        'Unit 6: Money and Banking',
        'Unit 7: International Trade',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Economics Textbook',
        grade: 10,
        curriculum: 'New',
        units: '7 units',
        pages: 254,
        size: '58.3MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Physics', link: '/resources/highschool/grade10/physics' },
      ],
    })
  );
  localStorage.setItem(
    'grade10physics',
    JSON.stringify({
      title: 'Physics',
      image: Physics,
      description: 'Download Ethiopia New Curriculum Physics Student Textbook',
      chapters: [
        'Unit 1: Introduction to Physics',
        'Unit 2: Mechanics',
        'Unit 3: Waves',
        'Unit 4: Thermodynamics',
        'Unit 5: Electricity and Magnetism',
        'Unit 6: Modern Physics',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Physics Textbook',
        grade: 9,
        curriculum: 'New',
        units: '6 units',
        pages: 220,
        size: '19MB',
      },
      relatedSubjects: [
        { name: 'Amharic', link: '/resources/highschool/grade10/amharic' },
        { name: 'English', link: '/resources/highschool/grade10/english' },
        { name: 'Mathematics', link: '/resources/highschool/grade10/maths' },
        { name: 'Geography', link: '/resources/highschool/grade10/geography' },
        { name: 'Biology', link: '/resources/highschool/grade10/biology' },
        { name: 'History', link: '/resources/highschool/grade10/history' },
        { name: 'IT', link: '/resources/highschool/grade10/it' },
        {
          name: 'Citizenship Education',
          link: '/resources/highschool/grade10/citizen',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade10/chemistry' },
        { name: 'HPE', link: '/resources/highschool/grade10/hpe' },
        { name: 'Economics', link: '/resources/highschool/grade10/economics' },
      ],
    })
  );
}

export default saveGrade10Details;
