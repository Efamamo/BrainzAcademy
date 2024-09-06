import maths from '../../../../images/G12-math.jpeg';
import english from '../../../../images/G12-English.jpeg';
import Geography from '../../../../images/G12-Geo.jpeg';
import Biology from '../../../../images/G12-Biology.png';
import Chemistry from '../../../../images/G12-Chemistry.png';
import History from '../../../../images/G12-History.jpeg';
import it from '../../../../images/G12-IT.jpeg';
import Physics from '../../../../images/G12-Physics.jpeg';
import Economics from '../../../../images/G12-Economics.jpeg';
import agriculture from '../../../../images/G12-Agri.jpeg';

function saveGrade12Details() {
  localStorage.setItem(
    'grade12agriculture',
    JSON.stringify({
      title: 'Agriculture',
      image: agriculture,
      description:
        'Download Ethiopia New Curriculum Agriculture Student Textbook',
      chapters: [
        'Unit 1 : Vegetable Crops Production and Management',
        'Unit 2 : Fruit Crops Production and Management',
        'Unit 3 : Root and Tuber Crops Production and Management',
        'Unit 4 : Coffee, Tea And Spices Production and Management',
        'Unit 5 : Introduction to Plant Biotechnology',
        'Unit 6 : Beef Cattle Production and Management',
        'Unit 7 : Sheep and Goat Production and Management',
        'Unit 8 : Camel Production and Management',
        'Unit 9 : Poultry Production and Management',
        'Unit 10 : Fishery Production and Management',
        'Unit 11 : Apiculture',
        'Unit 12 : Nursery and Plantation Technology',
        'Unit 13 : Basics of Agro-Forestry Systems and Practices',
        'Unit 14 : Soil and Water Conservation',
        'Unit 15 : Gender and Human Nutrition',
        'Unit 16 : Safe Food Production and Postharvest Handling',
        'Unit 17 : Application of ICT in Agriculture',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Agriculture Textbook',
        grade: 12,
        curriculum: 'New',
        units: '17 units',
        pages: 270,
        size: '15MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade12/economics' },
        { name: 'English', link: '/resources/highschool/grade12/english' },
        { name: 'Maths', link: '/resources/highschool/grade12/maths' },
        { name: 'Geography', link: '/resources/highschool/grade12/geography' },
        { name: 'Biology', link: '/resources/highschool/grade12/biology' },
        { name: 'History', link: '/resources/highschool/grade12/history' },
        { name: 'IT', link: '/resources/highschool/grade12/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade12/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade12/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade12english',
    JSON.stringify({
      title: 'English',
      image: english,
      description:
        'Download Ethiopia New Curriculum English Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Sustainable Development',
        'Unit 2 : Time Management',
        'Unit 3 : Evidence on Traffic Accident',
        'Unit 4 : Natural Resource Management',
        'Unit 5 : Mechanized Agriculture',
        'Unit 6 : Green Economies',
        'Unit 7 : National Pride',
        'UNit 8 : Telemedicine',
        'Unit 9 : Conflict Management',
        'Unit 10 : Robotics',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'English Textbook',
        grade: 12,
        curriculum: 'New',
        units: '10 units',
        pages: 270,
        size: '15MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade12/economics' },
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade12/agriculture',
        },
        { name: 'Maths', link: '/resources/highschool/grade12/maths' },
        { name: 'Geography', link: '/resources/highschool/grade12/geography' },
        { name: 'Biology', link: '/resources/highschool/grade12/biology' },
        { name: 'History', link: '/resources/highschool/grade12/history' },
        { name: 'IT', link: '/resources/highschool/grade12/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade12/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade12/physics' },
      ],
    })
  );
  localStorage.setItem(
    'grade12maths',
    JSON.stringify({
      title: 'Mathematics',
      image: maths,
      description:
        'Download Ethiopia New Curriculum Mathematics Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Sequences and Series',
        'Unit 2 : Introductions To Calculus',
        'Unit 3 : Statistics',
        'Unit 4 : Introduction to Linear Programming',
        'Unit 5 : Mathemathical Applications is Business',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Mathematics Textbook',
        grade: 12,
        curriculum: 'New',
        units: '5 units',
        pages: 426,
        size: '119MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade12/economics' },
        { name: 'English', link: '/resources/highschool/grade12/english' },
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade12/agriculture',
        },
        { name: 'Geography', link: '/resources/highschool/grade12/geography' },
        { name: 'Biology', link: '/resources/highschool/grade12/biology' },
        { name: 'History', link: '/resources/highschool/grade12/history' },
        { name: 'IT', link: '/resources/highschool/grade12/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade12/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade12/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade12geography',
    JSON.stringify({
      title: 'Geography',
      image: Geography,
      description:
        'Download Ethiopia New Curriculum Geography Student Textbook For Grade 11',
      chapters: [
        'UNit 1 : MAJOR GEOLOGICAL PROCESSES ASSOCIATED WITH PLATE TECTONICS',
        'Unit 2 : CLIMATE CHANGE',
        'Unit 3 : MANAGEMENT OF CONFLICT OVER RESOURCES',
        'Unit 4 : POPULATION POLICIES PROGRAMS AND THE ENVIRONMENT',
        'Unit 5 : CHALLENGES OF ECONOMIC DEVELOPMENT',
        'Unit 6 : SOLUTIONS TO ENVIRONMENTAL AND SUSTAINABILITY PROBLEMS',
        'Unit 7 : CONTEMPORARY GLOBAL GEOGRAPHIC ISSUES AND PUBLIC CONCERNS',
        'Unit 8 : GEOGRAPHICAL ENQUIRY AND MAP MAKING',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Geography Textbook',
        grade: 12,
        curriculum: 'New',
        units: '8 units',
        pages: 266,
        size: '15MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade12/economics' },
        { name: 'English', link: '/resources/highschool/grade12/english' },
        { name: 'Maths', link: '/resources/highschool/grade12/maths' },
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade12/agriculture',
        },
        { name: 'Biology', link: '/resources/highschool/grade12/biology' },
        { name: 'History', link: '/resources/highschool/grade12/history' },
        { name: 'IT', link: '/resources/highschool/grade12/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade12/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade12/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade12biology',
    JSON.stringify({
      title: 'Biology',
      image: Biology,
      description: 'Download Ethiopia New Curriculum Biology Student Textbook',
      chapters: [
        'Unit 1 : Application of Biology',
        'Unit 2 : Microorganisms',
        'Unit 3 : Energy Tramsformation',
        'Unit 4 : Evolution',
        'Unit 5 : Human Body System',
        'Unit 6 : Climate Change',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Biology Textbook',
        grade: 12,
        curriculum: 'New',
        units: '6 units',
        pages: 358,
        size: '176MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade12/economics' },
        { name: 'English', link: '/resources/highschool/grade12/english' },
        { name: 'Maths', link: '/resources/highschool/grade12/maths' },
        { name: 'Geography', link: '/resources/highschool/grade12/geography' },
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade12/agriculture',
        },
        { name: 'History', link: '/resources/highschool/grade12/history' },
        { name: 'IT', link: '/resources/highschool/grade12/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade12/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade12/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade12history',
    JSON.stringify({
      title: 'History',
      image: History,
      description:
        'Download Ethiopia New Curriculum History Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Development of Capitalism and Nationalism from 1815 to 1914',
        'Unit 2 : Africa and the Colonial Experience (1880s - 1960s)',
        'Unit 3 : Social, Economic and Political Developments in Ethiopia, Mid, 19th C. to 1941',
        'Unit 4 : Society and Politics in the Age of World Wars, 1914 - 1945',
        'Unit 5 : Global and Regional Developments Since 1945',
        'Unit 6 : Ethiopia: Internal Developments and External Influences from 1941 to 1991',
        'Unit 7 : Africa since the 1960s',
        'Unit 8 : Post 1991 Developments in Ethiopia',
        'Unit 9 : Indigenous Knowledge Systems and Heritages of Ethiopia',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'History Textbook',
        grade: 12,
        curriculum: 'New',
        units: '9 units',
        pages: 290,
        size: '15MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade12/economics' },
        { name: 'English', link: '/resources/highschool/grade12/english' },
        { name: 'Maths', link: '/resources/highschool/grade12/maths' },
        { name: 'Geography', link: '/resources/highschool/grade12/geography' },
        { name: 'Biology', link: '/resources/highschool/grade12/biology' },
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade12/agriculture',
        },
        { name: 'IT', link: '/resources/highschool/grade12/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade12/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade12/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade12it',
    JSON.stringify({
      title: 'Information Technology',
      image: it,
      description:
        'Download Ethiopia New Curriculum IT Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Information Systems and Their Applications',
        'Unit 2 : Emerging Technologies',
        'Unit 3 : Database Management System',
        'Unit 4 : Web Authoring',
        'Unit 5 : Maintenance and Troubleshooting',
        'Unit 6 : Fundamentals of Programming',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'IT Textbook',
        grade: 12,
        curriculum: 'New',
        units: '6 units',
        pages: 210,
        size: '9.8MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade12/economics' },
        { name: 'English', link: '/resources/highschool/grade12/english' },
        { name: 'Maths', link: '/resources/highschool/grade12/maths' },
        { name: 'Geography', link: '/resources/highschool/grade12/geography' },
        { name: 'Biology', link: '/resources/highschool/grade12/biology' },
        { name: 'History', link: '/resources/highschool/grade12/history' },
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade12/agriculture',
        },
        { name: 'Chemistry', link: '/resources/highschool/grade12/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade12/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade12chemistry',
    JSON.stringify({
      title: 'Chemistry',
      image: Chemistry,
      description:
        'Download Ethiopia New Curriculum Chemistry Student Textbook',
      chapters: [
        'Unit 1 : ACID-BASE EQUILIBRIA',
        'Unit 2 : ELECTROCHEMISTRY',
        'Unit 3 : INDUSTRIAL CHEMISTRY',
        'Unit 4 : POLYMERS',
        'Unit 5 : INTRODUCTION TO ENVIRONMENTAL CHEMISTRY',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Chemistry Textbook',
        grade: 12,
        curriculum: 'New',
        units: '5 units',
        pages: 298,
        size: '8MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade12/economics' },
        { name: 'English', link: '/resources/highschool/grade12/english' },
        { name: 'Maths', link: '/resources/highschool/grade12/maths' },
        { name: 'Geography', link: '/resources/highschool/grade12/geography' },
        { name: 'Biology', link: '/resources/highschool/grade12/biology' },
        { name: 'History', link: '/resources/highschool/grade12/history' },
        { name: 'IT', link: '/resources/highschool/grade12/it' },
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade12/agriculture',
        },
        { name: 'Physics', link: '/resources/highschool/grade12/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade12physics',
    JSON.stringify({
      title: 'Physics',
      image: Physics,
      description:
        'Download Ethiopia New Curriculum Physics Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Application of physics in other fields',
        'Unit 2 : Two-dimensional motion',
        'Unit 3 : Fluid Mechanics',
        'Unit 4 : Electromagnetism',
        'Unit 5 : Basics of electronics',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Physics Textbook',
        grade: 12,
        curriculum: 'New',
        units: '5 units',
        pages: 186,
        size: '11MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade12/economics' },
        { name: 'English', link: '/resources/highschool/grade12/english' },
        { name: 'Maths', link: '/resources/highschool/grade12/maths' },
        { name: 'Geography', link: '/resources/highschool/grade12/geography' },
        { name: 'Biology', link: '/resources/highschool/grade12/biology' },
        { name: 'History', link: '/resources/highschool/grade12/history' },
        { name: 'IT', link: '/resources/highschool/grade12/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade12/chemistry' },
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade12/agriculture',
        },
      ],
    })
  );

  localStorage.setItem(
    'grade12economics',
    JSON.stringify({
      title: 'Economics',
      image: Economics,
      description:
        'Download Ethiopia New Curriculum Economics Student Textbook',
      chapters: [
        'Unit 1 : THE FUNDAMENTAL CONCEPTS OF MACROECONOMICS',
        'Unit 2 : AGGREGATE DEMAND AND AGGREGATE SUPPLY ANALYSIS',
        'Unit 3 : MARKET FAILURE AND CONSUMER PROTECTION',
        'Unit 4 : MACROECONOMIC POLICY INSTRUMENTS',
        'Unit 5 : TAX THEORY AND PRACTICE',
        'Unit 6 : POVERTY AND INEQUALITY',
        'Unit 7 : MACROECONOMIC REFORMS IN ETHIOPIA',
        'Unit 8 : ECONOMY, ENVIRONMENT AND CLIMATE CHANGE',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Economics Textbook',
        grade: 12,
        curriculum: 'New',
        units: '8 units',
        pages: 214,
        size: '5MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade12/agriculture',
        },
        { name: 'English', link: '/resources/highschool/grade12/english' },
        { name: 'Maths', link: '/resources/highschool/grade12/maths' },
        { name: 'Geography', link: '/resources/highschool/grade12/geography' },
        { name: 'Biology', link: '/resources/highschool/grade12/biology' },
        { name: 'History', link: '/resources/highschool/grade12/history' },
        { name: 'IT', link: '/resources/highschool/grade12/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade12/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade12/physics' },
      ],
    })
  );
}
export default saveGrade12Details;
