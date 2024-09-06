import maths from '../../../../images/G11-math.jpeg';
import english from '../../../../images/G11-English.jpeg';
import Geography from '../../../../images/G11-Geo.jpeg';
import Biology from '../../../../images/G11-Biology.png';
import Chemistry from '../../../../images/G11-Chemistry.jpeg';
import History from '../../../../images/G11-History.jpeg';
import it from '../../../../images/G11-IT.jpeg';
import Physics from '../../../../images/G11-physics.jpeg';
import Economics from '../../../../images/G11-Economics.jpeg';
import agriculture from '../../../../images/G11-Agri.jpeg';
function saveGrade11Details() {
  localStorage.setItem(
    'grade11agriculture',
    JSON.stringify({
      title: 'Agriculture',
      image: agriculture,
      description:
        'Download Ethiopia New Curriculum Agriculture Student Textbook',
      chapters: [
        'Unit 1 : Introduction to Crop Production',
        'Unit 2 : Field Crops Production and Management',
        'UNit 3 : Industrial Crops Production and Management',
        'Unit 4 : Introduction to Farm Animals',
        'Unit 5 : Animal Feeds and Feeding Practices',
        'Unit 6 : Animal Genetics and Breeding Practices',
        'Unit 7 : Farm Animals Housing',
        'Unit 8 : Basic Animal Health and Disease Control',
        'Unit 9 : Dairy Cattle Production and Management',
        'Unit 10 : Introduction to Natural Resources',
        'Unit 11 : Management of Natural Resources',
        'Unit 12 : Concepts of Biodiversity',
        'Unit 13 : Climate Change Adaptation and Mitigation',
        'Unit 14 : Mechanized Farming',
        'Unit 15 : Introduction to Human Nutrition',
        'Unit 16 : Diversified Food Production and Consumption',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Agriculture Textbook',
        grade: 11,
        curriculum: 'New',
        units: '16 units',
        pages: 270,
        size: '22MB',
      },
      relatedSubjects: [
        { name: 'Economics', link: '/resources/highschool/grade11/economics' },
        { name: 'English', link: '/resources/highschool/grade11/english' },
        { name: 'Maths', link: '/resources/highschool/grade11/maths' },
        { name: 'Geography', link: '/resources/highschool/grade11/geography' },
        { name: 'Biology', link: '/resources/highschool/grade11/biology' },
        { name: 'History', link: '/resources/highschool/grade11/history' },
        { name: 'IT', link: '/resources/highschool/grade11/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade11/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade11/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade11english',
    JSON.stringify({
      title: 'English',
      image: english,
      description:
        'Download Ethiopia New Curriculum English Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Environmental Hazards',
        'Unit 2 : Civilization',
        'Unit 3 : Causes of Road Traffic Accidents',
        'Unit 4 : People and Natural Resources',
        'Unit 5 : Irrigation',
        'Unit 6 : Global Warming',
        'Unit 7 : Patriotism',
        'Unit 8 : Efficiency of Health Services',
        'Unit 9 : Indigenous Conflict Resolution',
        'Unit 10 : Artificial Intelligence',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'English Textbook',
        grade: 11,
        curriculum: 'New',
        units: '10 units',
        pages: 290,
        size: '142MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade11/agriculture',
        },
        { name: 'Economics', link: '/resources/highschool/grade11/economics' },
        { name: 'Maths', link: '/resources/highschool/grade11/maths' },
        { name: 'Geography', link: '/resources/highschool/grade11/geography' },
        { name: 'Biology', link: '/resources/highschool/grade11/biology' },
        { name: 'History', link: '/resources/highschool/grade11/history' },
        { name: 'IT', link: '/resources/highschool/grade11/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade11/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade11/physics' },
      ],
    })
  );
  localStorage.setItem(
    'grade11maths',
    JSON.stringify({
      title: 'Mathematics',
      image: maths,
      description:
        'Download Ethiopia New Curriculum Mathematics Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Relations and functions',
        'Unit 2 : Rational Expression and Rational Functions',
        'Unit 3 : Matrices',
        'Unit 4 : Determinants and their properties',
        'Unit 5 : Vectors',
        'Unit 6 : Transformations of the plane',
        'Unit 7 : Statistics',
        'Unit 8 : Probability',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Mathematics Textbook',
        grade: 11,
        curriculum: 'New',
        units: '8 units',
        pages: 494,
        size: '141MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade11/agriculture',
        },
        { name: 'English', link: '/resources/highschool/grade11/english' },
        { name: 'Economics', link: '/resources/highschool/grade11/economics' },
        { name: 'Geography', link: '/resources/highschool/grade11/geography' },
        { name: 'Biology', link: '/resources/highschool/grade11/biology' },
        { name: 'History', link: '/resources/highschool/grade11/history' },
        { name: 'IT', link: '/resources/highschool/grade11/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade11/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade11/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade11geography',
    JSON.stringify({
      title: 'Geography',
      image: Geography,
      description:
        'Download Ethiopia New Curriculum Geography Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Formation of the Continents',
        'Unit 2 : Climate Classification and Climate Regions of Our World',
        'Unit 3 : Natural Resources and Conflicts Over Resources',
        'Unit 4 : Global Population Dynamics and Challenges',
        'Unit 5 : Geography and Economic Development',
        'Unit 6 : Major Global Environmental Changes',
        'Unit 7 : Geographic Issues and Public Concerns',
        'Unit 8 : Geo-spatial Information and Data Processing',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Geography Textbook',
        grade: 11,
        curriculum: 'New',
        units: '8 units',
        pages: 254,
        size: '10.8MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade11/agriculture',
        },
        { name: 'English', link: '/resources/highschool/grade11/english' },
        { name: 'Maths', link: '/resources/highschool/grade11/maths' },
        { name: 'Economics', link: '/resources/highschool/grade11/economics' },
        { name: 'Biology', link: '/resources/highschool/grade11/biology' },
        { name: 'History', link: '/resources/highschool/grade11/history' },
        { name: 'IT', link: '/resources/highschool/grade11/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade11/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade11/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade11biology',
    JSON.stringify({
      title: 'Biology',
      image: Biology,
      description: 'Download Ethiopia New Curriculum Biology Student Textbook',
      chapters: [
        'Unit 1 : Biology and Technology',
        'Unit 2 : Characteristics of animals',
        'Unit 3 : Enzymes',
        'Unit 4 : Genetics',
        'Unit 5 : The human body systems',
        'Unit 6 : Population and natural resources',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Biology Textbook',
        grade: 11,
        curriculum: 'New',
        units: '6 units',
        pages: 294,
        size: '36.9MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade11/agriculture',
        },
        { name: 'English', link: '/resources/highschool/grade11/english' },
        { name: 'Maths', link: '/resources/highschool/grade11/maths' },
        { name: 'Geography', link: '/resources/highschool/grade11/geography' },
        { name: 'Economics', link: '/resources/highschool/grade11/economics' },
        { name: 'History', link: '/resources/highschool/grade11/history' },
        { name: 'IT', link: '/resources/highschool/grade11/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade11/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade11/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade11history',
    JSON.stringify({
      title: 'History',
      image: History,
      description:
        'Download Ethiopia New Curriculum History Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : HISTORY, HISTORIOGRAPHY, AND HUMAN EVOLUTION',
        'Unit 2 : MAJOR SPOTS OF ANCIENT WORLD CIVILIZATIONS UP TO c.500 A.D',
        'Unit 3 : PEOPLES, STATES AND HISTORICAL PROCESSES IN ETHIOPIA AND THE HORN TO THE END OF THE 13th Century',
        'Unit 4 : THE MIDDLE AGES AND EARLY MODERN WORLD, C. 500 AD-1789',
        'Unit 5 : PEOPLES AND STATES OF AFRICA TO 1500',
        'Unit 6 : AFRICA AND THE OUTSIDE WORLD: 1500-1880',
        'Unit 7 : STATES, PRINCIPALITIES, POPULATION MOVEMENTS AND INTERACTIONS IN ETHIOPIA',
        'Unit 8 : POLITICAL, SOCIAL, AND ECONOMIC PROCESSES IN ETHIOPIA, MID 16TH TO MID-19TH CENTURY',
        'Unit 9 : THE AGE OF REVOLUTIONS, 1789 TO 1815',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'History Textbook',
        grade: 11,
        curriculum: 'New',
        units: '9 units',
        pages: 270,
        size: '11 MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade11/agriculture',
        },
        { name: 'English', link: '/resources/highschool/grade11/english' },
        { name: 'Maths', link: '/resources/highschool/grade11/maths' },
        { name: 'Geography', link: '/resources/highschool/grade11/geography' },
        { name: 'Biology', link: '/resources/highschool/grade11/biology' },
        { name: 'Economics', link: '/resources/highschool/grade11/economics' },
        { name: 'IT', link: '/resources/highschool/grade11/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade11/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade11/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade11it',
    JSON.stringify({
      title: 'Information Technology',
      image: it,
      description:
        'Download Ethiopia New Curriculum IT Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Information Systems and Its Applications',
        'Unit 2 : Emerging Technologies',
        'Unit 3 : Database Management',
        'Unit 4 : Web Development',
        'Unit 5 : Hardware Troubleshooting and Preventive Maintenance',
        'Unit 6 : Fundamentals of Programming',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'IT Textbook',
        grade: 11,
        curriculum: 'New',
        units: '6 units',
        pages: 170,
        size: '5MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade11/agriculture',
        },
        { name: 'English', link: '/resources/highschool/grade11/english' },
        { name: 'Maths', link: '/resources/highschool/grade11/maths' },
        { name: 'Geography', link: '/resources/highschool/grade11/geography' },
        { name: 'Biology', link: '/resources/highschool/grade11/biology' },
        { name: 'History', link: '/resources/highschool/grade11/history' },
        { name: 'Economics', link: '/resources/highschool/grade11/economics' },
        { name: 'Chemistry', link: '/resources/highschool/grade11/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade11/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade11chemistry',
    JSON.stringify({
      title: 'Chemistry',
      image: Chemistry,
      description:
        'Download Ethiopia New Curriculum Chemistry Student Textbook',
      chapters: [
        'Unit 1 : Atomic Structure And Periodic Properties Of The Elements',
        'Unit 2 : Chemical Bonding',
        'Unit 3 : Physical State Of Matter',
        'Unit 4 : Chemical Kinetics',
        'Unit 5 : Chemical Equilibrium',
        'Unit 6 : Some Important Oxygen-containing Organic Compounds',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Chemistry Textbook',
        grade: 11,
        curriculum: 'New',
        units: '6 units',
        pages: 342,
        size: '9.5MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade11/agriculture',
        },
        { name: 'English', link: '/resources/highschool/grade11/english' },
        { name: 'Maths', link: '/resources/highschool/grade11/maths' },
        { name: 'Geography', link: '/resources/highschool/grade11/geography' },
        { name: 'Biology', link: '/resources/highschool/grade11/biology' },
        { name: 'History', link: '/resources/highschool/grade11/history' },
        { name: 'IT', link: '/resources/highschool/grade11/it' },
        { name: 'Economics', link: '/resources/highschool/grade11/economics' },
        { name: 'Physics', link: '/resources/highschool/grade11/physics' },
      ],
    })
  );

  localStorage.setItem(
    'grade11physics',
    JSON.stringify({
      title: 'Physics',
      image: Physics,
      description:
        'Download Ethiopia New Curriculum Physics Student Textbook For Grade 11',
      chapters: [
        'Unit 1 : Physics and Human Society',
        'Unit 2 : Vectors',
        'Unit 3 : Motion in one and two dimensions',
        'Unit 4 : Dynamics',
        'Unit 5 : Heat Conduction and Calorimetry',
        'Unit 6 : Electrostatics and Electric Circuit',
        'Unit 7 : Nuclear Physic',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Physics Textbook',
        grade: 11,
        curriculum: 'New',
        units: '7 units',
        pages: 338,
        size: '10MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade11/agriculture',
        },
        { name: 'English', link: '/resources/highschool/grade11/english' },
        { name: 'Maths', link: '/resources/highschool/grade11/maths' },
        { name: 'Geography', link: '/resources/highschool/grade11/geography' },
        { name: 'Biology', link: '/resources/highschool/grade11/biology' },
        { name: 'History', link: '/resources/highschool/grade11/history' },
        { name: 'IT', link: '/resources/highschool/grade11/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade11/chemistry' },
        { name: 'Economics', link: '/resources/highschool/grade11/economics' },
      ],
    })
  );

  localStorage.setItem(
    'grade11economics',
    JSON.stringify({
      title: 'Economics',
      image: Economics,
      description:
        'Download Ethiopia New Curriculum Economics Student Textbook',
      chapters: [
        'Unit 1 : THEORY OF CONSUMER BEHAVIOR AND DEMAND',
        'Unit 2 : MARKET STRUCTURE AND THE DECISION OF FIRMS',
        'Unit 3 : NATIONAL INCOME ACCOUNTING',
        'Unit 4 : CONSUMPTION, SAVING AND INVESTMENT',
        'Unit 5 : TRADE AND FINANCE',
        'Unit 6 : ECONOMIC DEVELOPMENT',
        'Unit 7 : MAIN SECTORS, SECTORIAL POLICIES AND STRATEGIES OF ETHIOPIA',
      ],
      summery: {
        country: 'Ethiopia',
        publisher: 'MOE, Ethiopia',
        subject: 'Economics Textbook',
        grade: 11,
        curriculum: 'New',
        units: '7 units',
        pages: 202,
        size: '6.5 MB',
      },
      relatedSubjects: [
        {
          name: 'Agriculture',
          link: '/resources/highschool/grade11/agriculture',
        },
        { name: 'English', link: '/resources/highschool/grade11/english' },
        { name: 'Maths', link: '/resources/highschool/grade11/maths' },
        { name: 'Geography', link: '/resources/highschool/grade11/geography' },
        { name: 'Biology', link: '/resources/highschool/grade11/biology' },
        { name: 'History', link: '/resources/highschool/grade11/history' },
        { name: 'IT', link: '/resources/highschool/grade11/it' },
        { name: 'Chemistry', link: '/resources/highschool/grade11/chemistry' },
        { name: 'Physics', link: '/resources/highschool/grade11/physics' },
      ],
    })
  );
}
export default saveGrade11Details;
