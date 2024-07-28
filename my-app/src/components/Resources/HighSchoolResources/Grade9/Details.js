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
function saveGrade9Details() {
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
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
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
        "Unit 1: Further on Sets",
        "Unit 2: The Number System",
        "Unit 3: Solving Equations",
        "Unit 4: Solving Inequalities",
        "Unit 5: Introduction to Trigonometry",
        "Unit 6: Regular Polygons",
        "Unit 7: Congruency and Similarity",
        "Unit 8: Vectors in Two Dimensions",
        "Unit 9: Statistics and Probability"

      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Mathematics Textbook",
        grade: 9,
        curriculum: "New",
        units: "9 units",
        pages: 375,
        size: "18MB",
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
        "Unit 1: Geological History and Topography of Ethiopia",
        "Unit 2: Climate of Ethiopia",
        "Unit 3: Natural Resource Base of Ethiopia",
        "Unit 4: Population and Demographic Characteristics of Ethiopia",
        "Unit 5: Major Economic and Cultural Activities in Ethiopia",
        "Unit 6: Human – Natural Environment Interactions in Ethiopia",
        "Unit 7: Contemporary Geographic Issues and Public Concerns in Ethiopia",
        "Unit 8: Geographic Inquiry Skills and Techniques"

      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Geography Textbook",
        grade: 9,
        curriculum: "New",
        units: "8 units",
        pages: 237,
        size: "21.7MB",
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
        "Unit 1: Introduction to Biology",
        "Unit 2: Characteristics and Classification of Organisms",
        "Unit 3: Cells",
        "Unit 4: Reproduction",
        "Unit 5: Human Health, Nutrition, and Disease",
        "Unit 6: Ecology"
        ,
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Biology Textbook",
        grade: 9,
        curriculum: "New",
        units: "6 units",
        pages: 171,
        size: "11.2MB",
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
        "Unit 1: The Discipline of History and Human Evolution",
        "Unit 2: Ancient World Civilizations up to c. 500 AD",
        "Unit 3: Peoples and States in Ethiopia and the Horn to the End of 13th Century",
        "Unit 4: The Middle Ages and Early Modern World, c. 500 to 1750s",
        "Unit 5: Peoples and States of Africa to 1500",
        "Unit 6: Africa and the Outside World 1500-1880s",
        "Unit 7: States, Principalities, Population Movements and Interactions in Ethiopia 13th to Mid-16th Century",
        "Unit 8: Political, Social, and Economic Processes in Ethiopia Mid-16th to Mid-19th Century",
        "Unit 9: The Age of Revolutions 1750s to 1815"

      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "History Textbook",
        grade: 9,
        curriculum: "New",
        units: "9 units",
        pages: 219,
        size: "9.8 MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
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
        "Unit 1: Organization of Files",
        "Unit 2: Computer Network",
        "Unit 3: Application Software",
        "Unit 4: Image Processing and Multimedia",
        "Unit 5: Information and Computer Security",
        "Unit 6: Fundamentals of Programming"

      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "IT Textbook",
        grade: 9,
        curriculum: "New",
        units: "6 units",
        pages: 251,
        size: "14MB",
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
        "Unit 1: Ethical Values",
        "Unit 2: The Culture of Using Digital Technology",
        "Unit 3: Constitution and Constitutionalism",
        "Unit 4: Understanding Indigenous Knowledge",
        "Unit 5: Multiculturasim in Ethiopia",
        "Unit 6: National Unity Through Diversity",
        "Unit 7: Problem-Solving Skill",
        "Unit 8: Ethiopia's Foreign in East Africa",

      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Citizenship Education Textbook",
        grade: 9,
        curriculum: "New",
        units: "8 units",
        pages: 173,
        size: "7MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
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
        "Unit 1: Sport and Society",
        "Unit 2: Health and Physical Fitness",
        "Unit 3: Athletics",
        "Unit 4: Football",
        "Unit 5: Volleyball",
        "Unit 6: Basketball",
        "Unit 7: Handball",
        "Unit 8: Self-Defense and Sport Ethics"

      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "HPE Textbook",
        grade: 9,
        curriculum: "New",
        units: "8 units",
        pages: 167,
        size: "6.5MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
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
        "Unit 1: Chemistry and Its Importance",
        "Unit 2: Measurements and Scientific Methods",
        "Unit 3: Structure of the Atom",
        "Unit 4: Periodic Classification of Elements",
        "Unit 5: Chemical Bonding"
        ,
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Chemistry Textbook",
        grade: 9,
        curriculum: "New",
        units: "5 units",
        pages: 183,
        size: "7.8MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
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
        "Unit 1: Physics and Human Society",
        "Unit 2: Physical Quantities",
        "Unit 3: Motion in a Straight Line",
        "Unit 4: Force, Work, Energy, and Power",
        "Unit 5: Simple Machines",
        "Unit 6: Mechanical Oscillation and Sound Wave",
        "Unit 7: Temperature and Thermometer"
        ,
      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Physics Textbook",
        grade: 9,
        curriculum: "New",
        units: "7 units",
        pages: 183,
        size: "8MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
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
        "Unit 1: Introducing Economics",
        "Unit 2: The Basic Economic Problems and Economic Systems",
        "Unit 3: Economic Resources and Markets",
        "Unit 4: Introduction to Demand and Supply",
        "Unit 5: Introduction to Production and Cost",
        "Unit 6: Introduction to Money",
        "Unit 7: Introduction to Macroeconomics",
        "Unit 8: Basic Entrepreneurship"

      ],
      summery: {
        country: "Ethiopia",
        publisher: "MOE, Ethiopia",
        subject: "Economics Textbook",
        grade: 9,
        curriculum: "New",
        units: "8 units",
        pages: 118,
        size: "4.8 MB",
      },
      relatedSubjects: [
        { name: "Amharic", link: "/resources/highschool/grade9/amharic" },
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

