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
function saveGrade9Details(){
  localStorage.setItem(
    "grade9amharic", 
    JSON.stringify({
      title: "Amharic",
      image: amharic,
      description: "የ9ኛ ክፍል አማርኛ እንደመጀመሪያ ቋንቋ የተማሪ መጽሐፍ",
      chapters: [
        "ምዕራፍ 1 : ቋንቋ",
        "ምዕራፍ 2 : ግብር",
        "ምዕራፍ 3 : ማዕድን ማውጣት",
        "ምዕራፍ 4 : ልቦለድ",
        "ምዕራፍ 5 : ቃላዊ ስነፅሑፍ",
        "ምዕራፍ 6 : ግጥም",
        "ምዕራፍ 7 : ኮቪድ -19 (ኮሮና)",
        "ምዕራፍ 8 : ተውኔት",
        "ምዕራፍ 9 : ማህበራዊ መገናኛ ብዙኃን እና ተግባቦት",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Amharic Textbook",
        grade: 9,
        curriculum: "New",
        units: "9 units",
        pages: 175,
        size: "17.4MB",
      },
      relatedSubjects: [
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9english",
    JSON.stringify({
      title: "English",
      image: english,
      description: "Download Ethiopia New Curriculum English Student Textbook",
      chapters: [
        "Unit 1: Living in Urban Areas",
        "Unit 2: Study Skills",
        "Unit 3: Traffic Accident",
        "Unit 4: National Parks",
        "Unit 5: Horticulture",
        "Unit 6: Poverty in Ethiopia",
        "Unit 7: Community Services",
        "Unit 8: Communicable Diseases",
        "Unit 9: Fairness and Equity",
        "Unit 10: The Internet",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "English Textbook",
        grade: 9,
        curriculum: "New",
        units: "10 units",
        pages: 237,
        size: "80.6MB",
      },
      relatedSubjects: [
        { name: "Amharic", link:"/resources/highschool/grade9/amharic"}, 
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );
  localStorage.setItem(
    "grade9maths",
    JSON.stringify({
      title: "Mathematics",
      image: maths,
      description: "Download Ethiopia New Curriculum Mathematics Student Textbook",
      chapters: [
        "Unit 1: Basic Concept of Sets",
        "Unit 2: Integers",
        "Unit 3: Linear Equations",
        "Unit 4: Ratio, Proportions, and Percentage",
        "Unit 5: Perimeter and Area of Plane Figure",
        "Unit 6: Concurrency of Plane Figure",
        "Unit 7: Data Handling",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Mathematics Textbook",
        grade: 9,
        curriculum: "New",
        units: "7 units",
        pages: 252,
        size: "127MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9geography",
    JSON.stringify({
      title: "Geography",
      image: Geography,
      description: "Download Ethiopia New Curriculum Geography Student Textbook",
      chapters: [
        "Unit 1: Physical Characteristics of the Earth",
        "Unit 2: Human Evolution and World Population",
        "Unit 3: Human and Natural Resources",
        "Unit 4: Ancient Civilizations and Medieval",
        "Unit 5: Ancient History of Africa",
        "Unit 6: States and Peoples of Ancient and Medieval Ethiopia",
        "Unit 7: Contemporary Global Issues",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Geography Textbook",
        grade: 9,
        curriculum: "New",
        units: "7 units",
        pages: 211,
        size: "11MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9biology",
    JSON.stringify({
      title: "Biology",
      image: Biology,
      description: "Download Ethiopia New Curriculum Biology Student Textbook",
      chapters: [
        "Unit 1: Living Things and Their Environment",
        "Unit 2: Diversity of Living Things",
        "Unit 3: Human Body Systems",
        "Unit 4: Plants and Their Economic Importance",
        "Unit 5: Health and Environment",
        "Unit 6: Genetics and Evolution",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Biology Textbook",
        grade: 9,
        curriculum: "New",
        units: "6 units",
        pages: 195,
        size: "15MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9history",
    JSON.stringify({
      title: "History",
      image: History,
      description: "Download Ethiopia New Curriculum History Student Textbook",
      chapters: [
        "Unit 1: Ancient Civilizations",
        "Unit 2: Medieval History",
        "Unit 3: Modern History",
        "Unit 4: History of Ethiopia",
        "Unit 5: African History",
        "Unit 6: World Wars",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "History Textbook",
        grade: 9,
        curriculum: "New",
        units: "6 units",
        pages: 201,
        size: "12MB",
      },
      relatedSubjects: [
        { name: "Amharic", link:"/resources/highschool/grade9/amharic"},
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9it",
    JSON.stringify({
      title: "Information Technology",
      image: it,
      description: "Download Ethiopia New Curriculum Information Technology Student Textbook",
      chapters: [
        "Unit 1: Introduction to Computers",
        "Unit 2: Operating Systems",
        "Unit 3: Word Processing",
        "Unit 4: Spreadsheet Applications",
        "Unit 5: Database Management",
        "Unit 6: Internet and Email",
        "Unit 7: IT and Society",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "IT Textbook",
        grade: 9,
        curriculum: "New",
        units: "7 units",
        pages: 175,
        size: "16MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9citizen",
    JSON.stringify({
      title: "Citizenship Education",
      image: citizen,
      description: "Download Ethiopia New Curriculum Citizenship Education Student Textbook",
      chapters: [
        "Unit 1: Fundamental Rights and Freedoms",
        "Unit 2: Democratic Institutions",
        "Unit 3: Civic Participation",
        "Unit 4: Social Justice",
        "Unit 5: Nationalism and Patriotism",
        "Unit 6: Global Issues",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Citizenship Education Textbook",
        grade: 9,
        curriculum: "New",
        units: "6 units",
        pages: 185,
        size: "14MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic"},
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9hpe",
    JSON.stringify({
      title: "Health and Physical Education",
      image: HPE,
      description: "Download Ethiopia New Curriculum Health and Physical Education Student Textbook",
      chapters: [
        "Unit 1: Personal Health",
        "Unit 2: Community Health",
        "Unit 3: Nutrition",
        "Unit 4: Physical Fitness",
        "Unit 5: Sports and Games",
        "Unit 6: First Aid",
        "Unit 7: Substance Abuse",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "HPE Textbook",
        grade: 9,
        curriculum: "New",
        units: "7 units",
        pages: 190,
        size: "15MB",
      },
      relatedSubjects: [
        { name: "Amharic", link:"/resources/highschool/grade9/amharic" },
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9chemistry",
    JSON.stringify({
      title: "Chemistry",
      image: Chemistry,
      description: "Download Ethiopia New Curriculum Chemistry Student Textbook",
      chapters: [
        "Unit 1: Introduction to Chemistry",
        "Unit 2: Atomic Structure",
        "Unit 3: Chemical Bonding",
        "Unit 4: States of Matter",
        "Unit 5: Chemical Reactions",
        "Unit 6: Acids, Bases, and Salts",
        "Unit 7: Environmental Chemistry",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Chemistry Textbook",
        grade: 9,
        curriculum: "New",
        units: "7 units",
        pages: 210,
        size: "18MB",
      },
      relatedSubjects: [
        { name: "Amharic", link:"/resources/highschool/grade9/amharic"},
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9physics",
    JSON.stringify({
      title: "Physics",
      image: Physics,
      description: "Download Ethiopia New Curriculum Physics Student Textbook",
      chapters: [
        "Unit 1: Introduction to Physics",
        "Unit 2: Mechanics",
        "Unit 3: Waves",
        "Unit 4: Thermodynamics",
        "Unit 5: Electricity and Magnetism",
        "Unit 6: Modern Physics",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Physics Textbook",
        grade: 9,
        curriculum: "New",
        units: "6 units",
        pages: 220,
        size: "19MB",
      },
      relatedSubjects: [
        { name: "Amharic", link:"/resources/highschool/grade9/amharic"},
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Economics", link: "/resources/highschool/grade9/economics" },
      ]
    })
  );

  localStorage.setItem(
    "grade9economics",
    JSON.stringify({
      title: "Economics",
      image: Economics,
      description: "Download Ethiopia New Curriculum Economics Student Textbook",
      chapters: [
        "Unit 1: Basic Economic Concepts",
        "Unit 2: Demand and Supply",
        "Unit 3: Market Structures",
        "Unit 4: National Income",
        "Unit 5: Money and Banking",
        "Unit 6: International Trade",
        "Unit 7: Economic Development",
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Economics Textbook",
        grade: 9,
        curriculum: "New",
        units: "7 units",
        pages: 200,
        size: "17MB",
      },
      relatedSubjects: [
        { name: "Amharic", link:"/resources/highschool/grade9/amharic" },
        { name: "English", link: "/resources/highschool/grade9/english" },
        { name: "Mathematics", link: "/resources/highschool/grade9/maths" },
        { name: "Geography", link: "/resources/highschool/grade9/geography" },
        { name: "Biology", link: "/resources/highschool/grade9/biology" },
        { name: "History", link: "/resources/highschool/grade9/history" },
        { name: "IT", link: "/resources/highschool/grade9/it" },
        { name: "Citizenship Education", link: "/resources/highschool/grade9/citizen" },
        { name: "Chemistry", link: "/resources/highschool/grade9/chemistry" },
        { name: "HPE", link: "/resources/highschool/grade9/hpe" },
        { name: "Physics", link: "/resources/highschool/grade9/physics" },
      ]
    })
  );
}
export default saveGrade9Details

