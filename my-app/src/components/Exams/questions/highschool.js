const highSchoolQuizQuestions = [
  // Science
  {
    question: 'What is the chemical symbol for Gold?',
    choices: ['Ag', 'Au', 'Fe', 'Pb'],
    correctAnswer: 'Au',
  },
  {
    question: 'Which planet is closest to the Sun?',
    choices: ['Venus', 'Mars', 'Mercury', 'Earth'],
    correctAnswer: 'Mercury',
  },
  {
    question: 'What is the powerhouse of the cell?',
    choices: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
    correctAnswer: 'Mitochondria',
  },
  {
    question:
      'What type of bond involves the sharing of electron pairs between atoms?',
    choices: ['Ionic bond', 'Covalent bond', 'Hydrogen bond', 'Metallic bond'],
    correctAnswer: 'Covalent bond',
  },
  {
    question: 'Which gas is essential for photosynthesis?',
    choices: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
  },

  // Mathematics
  {
    question: 'What is the derivative of sin(x)?',
    choices: ['cos(x)', '-sin(x)', 'tan(x)', '-cos(x)'],
    correctAnswer: 'cos(x)',
  },
  {
    question: 'Solve for x: 2x + 3 = 7',
    choices: ['x = 2', 'x = 4', 'x = 1', 'x = 5'],
    correctAnswer: 'x = 2',
  },
  {
    question: 'What is the quadratic formula used to solve?',
    choices: [
      'Linear equations',
      'Quadratic equations',
      'Cubic equations',
      'Exponential equations',
    ],
    correctAnswer: 'Quadratic equations',
  },
  {
    question: 'What is the value of π (pi) to 3 decimal places?',
    choices: ['3.142', '3.141', '3.145', '3.149'],
    correctAnswer: '3.142',
  },
  {
    question: 'What is the sum of the interior angles of a triangle?',
    choices: ['90°', '180°', '270°', '360°'],
    correctAnswer: '180°',
  },

  // History
  {
    question: 'Who was the first President of the United States?',
    choices: [
      'Thomas Jefferson',
      'Abraham Lincoln',
      'George Washington',
      'John Adams',
    ],
    correctAnswer: 'George Washington',
  },
  {
    question: 'Which event marked the beginning of World War II?',
    choices: [
      'The assassination of Archduke Ferdinand',
      'The attack on Pearl Harbor',
      "Germany's invasion of Poland",
      'The Treaty of Versailles',
    ],
    correctAnswer: "Germany's invasion of Poland",
  },
  {
    question: 'Which empire did Alexander the Great conquer?',
    choices: [
      'Roman Empire',
      'Egyptian Empire',
      'Persian Empire',
      'Mongol Empire',
    ],
    correctAnswer: 'Persian Empire',
  },
  {
    question: 'In what year did the Berlin Wall fall?',
    choices: ['1989', '1991', '1961', '1975'],
    correctAnswer: '1989',
  },
  {
    question: 'Who was the leader of Nazi Germany during World War II?',
    choices: [
      'Joseph Stalin',
      'Adolf Hitler',
      'Benito Mussolini',
      'Winston Churchill',
    ],
    correctAnswer: 'Adolf Hitler',
  },

  // Geography
  {
    question: 'Which is the longest river in the world?',
    choices: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
    correctAnswer: 'Nile',
  },
  {
    question: 'Which country has the largest population?',
    choices: ['United States', 'India', 'Russia', 'China'],
    correctAnswer: 'China',
  },
  {
    question: 'What is the capital of Canada?',
    choices: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
    correctAnswer: 'Ottawa',
  },
  {
    question: 'Mount Everest is located in which mountain range?',
    choices: ['Himalayas', 'Andes', 'Rockies', 'Alps'],
    correctAnswer: 'Himalayas',
  },
  {
    question: 'Which continent is the Sahara Desert located on?',
    choices: ['Asia', 'Africa', 'Australia', 'South America'],
    correctAnswer: 'Africa',
  },

  // Literature
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: [
      'Charles Dickens',
      'William Shakespeare',
      'Mark Twain',
      'George Orwell',
    ],
    correctAnswer: 'William Shakespeare',
  },
  {
    question:
      "In George Orwell's '1984', what is the name of the totalitarian regime?",
    choices: ['Oceania', 'Eurasia', 'Big Brother', 'Eastasia'],
    correctAnswer: 'Big Brother',
  },
  {
    question: 'Which novel features a character named Holden Caulfield?',
    choices: [
      'The Great Gatsby',
      'To Kill a Mockingbird',
      'The Catcher in the Rye',
      'Pride and Prejudice',
    ],
    correctAnswer: 'The Catcher in the Rye',
  },
  {
    question: "Who wrote 'Moby-Dick'?",
    choices: [
      'Herman Melville',
      'F. Scott Fitzgerald',
      'Nathaniel Hawthorne',
      'Edgar Allan Poe',
    ],
    correctAnswer: 'Herman Melville',
  },
  {
    question: 'Which novel is set during the French Revolution?',
    choices: [
      'War and Peace',
      'Les Misérables',
      'A Tale of Two Cities',
      'Pride and Prejudice',
    ],
    correctAnswer: 'A Tale of Two Cities',
  },

  // Physics
  {
    question: 'What is the speed of light in a vacuum?',
    choices: ['300,000 km/s', '150,000 km/s', '1,000,000 km/s', '30,000 km/s'],
    correctAnswer: '300,000 km/s',
  },
  {
    question: 'What is the SI unit of force?',
    choices: ['Pascal', 'Newton', 'Joule', 'Watt'],
    correctAnswer: 'Newton',
  },
  {
    question:
      'Which law states that for every action, there is an equal and opposite reaction?',
    choices: [
      "Newton's First Law",
      "Newton's Second Law",
      "Newton's Third Law",
      'Law of Gravitation',
    ],
    correctAnswer: "Newton's Third Law",
  },
  {
    question: 'Who formulated the theory of relativity?',
    choices: [
      'Isaac Newton',
      'Galileo Galilei',
      'Albert Einstein',
      'Stephen Hawking',
    ],
    correctAnswer: 'Albert Einstein',
  },
  {
    question: 'What is the basic unit of electric current?',
    choices: ['Ohm', 'Volt', 'Ampere', 'Coulomb'],
    correctAnswer: 'Ampere',
  },

  // Chemistry
  {
    question: 'What is the pH of pure water?',
    choices: ['7', '5', '8', '9'],
    correctAnswer: '7',
  },
  {
    question: "Which element is most abundant in the Earth's atmosphere?",
    choices: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 'Nitrogen',
  },
  {
    question: 'What is the common name for sodium chloride?',
    choices: ['Sugar', 'Baking soda', 'Salt', 'Vinegar'],
    correctAnswer: 'Salt',
  },
  {
    question: "Which element is represented by the symbol 'O'?",
    choices: ['Osmium', 'Oxygen', 'Oganesson', 'Ozone'],
    correctAnswer: 'Oxygen',
  },
  {
    question: 'What type of reaction absorbs energy from its surroundings?',
    choices: ['Exothermic', 'Endothermic', 'Combustion', 'Neutralization'],
    correctAnswer: 'Endothermic',
  },

  // Biology
  {
    question: 'What is the genetic material in humans?',
    choices: ['DNA', 'RNA', 'Proteins', 'Lipids'],
    correctAnswer: 'DNA',
  },
  {
    question:
      'Which organ in the human body is responsible for filtering blood?',
    choices: ['Heart', 'Kidneys', 'Lungs', 'Liver'],
    correctAnswer: 'Kidneys',
  },
  {
    question: 'What is the process by which plants make their food?',
    choices: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'],
    correctAnswer: 'Photosynthesis',
  },
  {
    question: 'What part of the brain controls balance and coordination?',
    choices: ['Cerebrum', 'Cerebellum', 'Brainstem', 'Thalamus'],
    correctAnswer: 'Cerebellum',
  },
  {
    question: 'What is the main function of red blood cells?',
    choices: [
      'To fight infection',
      'To transport oxygen',
      'To digest food',
      'To remove waste',
    ],
    correctAnswer: 'To transport oxygen',
  },

  // Technology
  {
    question: "What does 'HTTP' stand for?",
    choices: [
      'Hyper Text Transfer Protocol',
      'Hyper Text Transmission Protocol',
      'Hyperlink Text Transport Protocol',
      'High Text Transfer Protocol',
    ],
    correctAnswer: 'Hyper Text Transfer Protocol',
  },
  {
    question: 'What is the brain of the computer commonly known as?',
    choices: ['RAM', 'Motherboard', 'CPU', 'Hard Drive'],
    correctAnswer: 'CPU',
  },
  {
    question:
      'Which programming language is primarily used for Android development?',
    choices: ['Python', 'Java', 'Swift', 'C++'],
    correctAnswer: 'Java',
  },
  {
    question: 'Which company developed the Windows operating system?',
    choices: ['Apple', 'Google', 'Microsoft', 'Intel'],
    correctAnswer: 'Microsoft',
  },
  {
    question: "What does 'HTML' stand for?",
    choices: [
      'Hyperlinks Text Markup Language',
      'Hyper Text Markup Language',
      'Hyper Tool Markup Language',
      'High Text Markup Language',
    ],
    correctAnswer: 'Hyper Text Markup Language',
  },
  // Science
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    choices: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 'Nitrogen',
  },
  {
    question:
      'What is the name of the process by which a liquid changes into a gas?',
    choices: ['Condensation', 'Sublimation', 'Evaporation', 'Precipitation'],
    correctAnswer: 'Evaporation',
  },

  // Mathematics
  {
    question: 'What is the value of the square root of 144?',
    choices: ['10', '11', '12', '13'],
    correctAnswer: '12',
  },
  {
    question: 'What is the sum of the exterior angles of any polygon?',
    choices: ['180°', '360°', '540°', '720°'],
    correctAnswer: '360°',
  },

  // History
  {
    question: 'Who was the British Prime Minister during World War II?',
    choices: [
      'Neville Chamberlain',
      'Winston Churchill',
      'Margaret Thatcher',
      'Tony Blair',
    ],
    correctAnswer: 'Winston Churchill',
  },
  {
    question: 'In which year did the Titanic sink?',
    choices: ['1902', '1912', '1922', '1932'],
    correctAnswer: '1912',
  },

  // Geography
  {
    question: 'Which ocean is the largest?',
    choices: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Pacific Ocean',
      'Arctic Ocean',
    ],
    correctAnswer: 'Pacific Ocean',
  },
  {
    question: 'What is the capital city of Australia?',
    choices: ['Sydney', 'Melbourne', 'Perth', 'Canberra'],
    correctAnswer: 'Canberra',
  },

  // Literature
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    choices: [
      'F. Scott Fitzgerald',
      'Harper Lee',
      'Ernest Hemingway',
      'J.K. Rowling',
    ],
    correctAnswer: 'Harper Lee',
  },
  {
    question:
      'Which Shakespearean play features the characters of Macbeth and Lady Macbeth?',
    choices: ['Hamlet', 'Macbeth', 'Othello', 'Julius Caesar'],
    correctAnswer: 'Macbeth',
  },

  // Physics
  {
    question: 'What is the unit of electrical resistance?',
    choices: ['Ampere', 'Volt', 'Ohm', 'Joule'],
    correctAnswer: 'Ohm',
  },

  // Chemistry
  {
    question: 'What is the atomic number of Carbon?',
    choices: ['6', '12', '14', '16'],
    correctAnswer: '6',
  },

  // Biology
  {
    question: 'What is the main structural component of plant cell walls?',
    choices: ['Chloroplast', 'Cellulose', 'Mitochondria', 'Starch'],
    correctAnswer: 'Cellulose',
  },

  // Technology
  {
    question: 'Which company developed the Android operating system?',
    choices: ['Apple', 'Google', 'Microsoft', 'IBM'],
    correctAnswer: 'Google',
  },
  {
    question: "What does 'CSS' stand for in web development?",
    choices: [
      'Cascading Style Sheets',
      'Computer Style Syntax',
      'Coded Style System',
      'Central Style Syntax',
    ],
    correctAnswer: 'Cascading Style Sheets',
  },
];

export default highSchoolQuizQuestions;
