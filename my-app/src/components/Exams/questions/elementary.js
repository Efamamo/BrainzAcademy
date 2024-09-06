const elementaryQuizQuestions = [
  // Science
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the chemical symbol for water?',
    choices: ['O2', 'H2O', 'CO2', 'N2'],
    correctAnswer: 'H2O',
  },
  {
    question:
      'What gas do plants absorb from the atmosphere during photosynthesis?',
    choices: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    choices: ['Gold', 'Iron', 'Diamond', 'Granite'],
    correctAnswer: 'Diamond',
  },
  {
    question: 'Which element is essential for the formation of bones?',
    choices: ['Iron', 'Calcium', 'Zinc', 'Potassium'],
    correctAnswer: 'Calcium',
  },

  // Mathematics
  {
    question: 'What is 7 multiplied by 8?',
    choices: ['56', '48', '64', '58'],
    correctAnswer: '56',
  },
  {
    question: 'What is the value of pi (π) to two decimal places?',
    choices: ['3.12', '3.14', '3.16', '3.18'],
    correctAnswer: '3.14',
  },
  {
    question:
      'What is the perimeter of a rectangle with length 5 cm and width 3 cm?',
    choices: ['16 cm', '15 cm', '12 cm', '20 cm'],
    correctAnswer: '16 cm',
  },
  {
    question: 'Which shape has only one pair of parallel sides?',
    choices: ['Square', 'Rectangle', 'Trapezoid', 'Circle'],
    correctAnswer: 'Trapezoid',
  },
  {
    question: 'What is the result of 9 squared?',
    choices: ['81', '72', '18', '27'],
    correctAnswer: '81',
  },

  // Geography
  {
    question: 'Which is the largest continent on Earth?',
    choices: ['Africa', 'Asia', 'Europe', 'Antarctica'],
    correctAnswer: 'Asia',
  },
  {
    question: 'Which ocean is the largest by surface area?',
    choices: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    correctAnswer: 'Pacific',
  },
  {
    question: 'Which country is known for the Great Wall?',
    choices: ['Japan', 'India', 'China', 'Korea'],
    correctAnswer: 'China',
  },
  {
    question: 'What is the longest river in the world?',
    choices: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
    correctAnswer: 'Nile',
  },
  {
    question: 'Which desert is the largest in the world?',
    choices: ['Sahara', 'Gobi', 'Kalahari', 'Atacama'],
    correctAnswer: 'Sahara',
  },

  // History
  {
    question: 'Who was the first President of the United States?',
    choices: [
      'Abraham Lincoln',
      'John Adams',
      'Thomas Jefferson',
      'George Washington',
    ],
    correctAnswer: 'George Washington',
  },
  {
    question: 'What ancient civilization built the pyramids?',
    choices: ['Romans', 'Greeks', 'Egyptians', 'Aztecs'],
    correctAnswer: 'Egyptians',
  },
  {
    question: 'In which year did World War II end?',
    choices: ['1942', '1945', '1939', '1950'],
    correctAnswer: '1945',
  },
  {
    question: 'Who was known as the Iron Lady?',
    choices: [
      'Angela Merkel',
      'Margaret Thatcher',
      'Hillary Clinton',
      'Indira Gandhi',
    ],
    correctAnswer: 'Margaret Thatcher',
  },
  {
    question: 'Which explorer discovered America in 1492?',
    choices: [
      'Vasco da Gama',
      'Christopher Columbus',
      'Ferdinand Magellan',
      'James Cook',
    ],
    correctAnswer: 'Christopher Columbus',
  },

  // Literature
  {
    question: "Who wrote 'The Adventures of Tom Sawyer'?",
    choices: [
      'Charles Dickens',
      'Mark Twain',
      'Jane Austen',
      'Ernest Hemingway',
    ],
    correctAnswer: 'Mark Twain',
  },
  {
    question: 'In Greek mythology, who is the king of the gods?',
    choices: ['Poseidon', 'Apollo', 'Hades', 'Zeus'],
    correctAnswer: 'Zeus',
  },
  {
    question:
      'Which book series features a boy who attends Hogwarts School of Witchcraft and Wizardry?',
    choices: [
      'The Hunger Games',
      'Harry Potter',
      'Percy Jackson',
      'The Chronicles of Narnia',
    ],
    correctAnswer: 'Harry Potter',
  },
  {
    question: "Who wrote the play 'Macbeth'?",
    choices: [
      'William Shakespeare',
      'Leo Tolstoy',
      'George Orwell',
      'J.K. Rowling',
    ],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: "What is the name of the lion in 'The Chronicles of Narnia'?",
    choices: ['Shere Khan', 'Aslan', 'Simba', 'Mufasa'],
    correctAnswer: 'Aslan',
  },

  // Science (Biology, Physics, Chemistry)
  {
    question: 'Which organ in the human body is responsible for pumping blood?',
    choices: ['Lungs', 'Heart', 'Liver', 'Kidney'],
    correctAnswer: 'Heart',
  },
  {
    question: 'What is the force that pulls objects toward the Earth?',
    choices: ['Magnetism', 'Electricity', 'Gravity', 'Friction'],
    correctAnswer: 'Gravity',
  },
  {
    question: 'What is the process by which plants make their food?',
    choices: ['Photosynthesis', 'Respiration', 'Digestion', 'Evaporation'],
    correctAnswer: 'Photosynthesis',
  },
  {
    question: 'Which part of the cell contains the genetic material?',
    choices: ['Nucleus', 'Mitochondria', 'Cytoplasm', 'Cell Membrane'],
    correctAnswer: 'Nucleus',
  },
  {
    question:
      'What is the boiling point of water at sea level in degrees Celsius?',
    choices: ['90°C', '100°C', '110°C', '80°C'],
    correctAnswer: '100°C',
  },

  // Technology
  {
    question: 'What is the main language used to build web pages?',
    choices: ['Python', 'HTML', 'Java', 'C++'],
    correctAnswer: 'HTML',
  },
  {
    question: "What does 'CPU' stand for?",
    choices: [
      'Central Processing Unit',
      'Computer Power Unit',
      'Control Programming Unit',
      'Central Programming Unit',
    ],
    correctAnswer: 'Central Processing Unit',
  },
  {
    question: 'Which device is used to input text into a computer?',
    choices: ['Mouse', 'Monitor', 'Keyboard', 'Printer'],
    correctAnswer: 'Keyboard',
  },
  {
    question:
      'What is the name of the first man-made satellite to orbit the Earth?',
    choices: ['Apollo', 'Sputnik', 'Voyager', 'Challenger'],
    correctAnswer: 'Sputnik',
  },
  {
    question:
      'Which programming language is primarily used for Android app development?',
    choices: ['Python', 'Java', 'Swift', 'C#'],
    correctAnswer: 'Java',
  },

  // More Mathematics
  {
    question: 'What is the least common multiple (LCM) of 4 and 5?',
    choices: ['20', '10', '15', '25'],
    correctAnswer: '20',
  },
  {
    question: 'What is 25% of 200?',
    choices: ['25', '50', '75', '100'],
    correctAnswer: '50',
  },
  {
    question: 'How many degrees are there in a right angle?',
    choices: ['45', '60', '90', '180'],
    correctAnswer: '90',
  },
  {
    question: 'What is the square root of 144?',
    choices: ['10', '11', '12', '13'],
    correctAnswer: '12',
  },
  {
    question: 'What is the sum of the angles in a triangle?',
    choices: ['90 degrees', '180 degrees', '360 degrees', '270 degrees'],
    correctAnswer: '180 degrees',
  },

  // Additional General Knowledge
  {
    question: 'Which language is the most spoken in the world?',
    choices: ['Spanish', 'Hindi', 'Mandarin', 'English'],
    correctAnswer: 'Mandarin',
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    choices: ['Tiger', 'Elephant', 'Lion', 'Leopard'],
    correctAnswer: 'Lion',
  },
  {
    question: 'Which country is famous for inventing pizza?',
    choices: ['Spain', 'Italy', 'France', 'Greece'],
    correctAnswer: 'Italy',
  },
  {
    question: 'How many continents are there on Earth?',
    choices: ['5', '6', '7', '8'],
    correctAnswer: '7',
  },
  {
    question: 'What is the largest mammal on Earth?',
    choices: ['Elephant', 'Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Whale',
  },
  // Science
  {
    question: 'Which part of the plant conducts photosynthesis?',
    choices: ['Root', 'Stem', 'Flower', 'Leaf'],
    correctAnswer: 'Leaf',
  },
  {
    question: 'What type of animal is a frog?',
    choices: ['Mammal', 'Reptile', 'Amphibian', 'Bird'],
    correctAnswer: 'Amphibian',
  },

  // Mathematics
  {
    question:
      'What is the area of a rectangle with length 8 cm and width 3 cm?',
    choices: ['11 cm²', '24 cm²', '16 cm²', '32 cm²'],
    correctAnswer: '24 cm²',
  },
  {
    question: 'What is 3/4 of 100?',
    choices: ['25', '50', '75', '80'],
    correctAnswer: '75',
  },
  {
    question: 'How many sides does a decagon have?',
    choices: ['5', '8', '10', '12'],
    correctAnswer: '10',
  },

  // History
  {
    question: 'Which empire was ruled by Julius Caesar?',
    choices: [
      'Greek Empire',
      'Persian Empire',
      'Roman Empire',
      'Ottoman Empire',
    ],
    correctAnswer: 'Roman Empire',
  },
  {
    question: 'Who was the first man to step on the moon?',
    choices: [
      'Yuri Gagarin',
      'Buzz Aldrin',
      'Neil Armstrong',
      'Michael Collins',
    ],
    correctAnswer: 'Neil Armstrong',
  },

  // Geography
  {
    question: 'Which country is both a continent and a country?',
    choices: ['Australia', 'Africa', 'Greenland', 'New Zealand'],
    correctAnswer: 'Australia',
  },
  {
    question: 'What is the smallest country in the world by land area?',
    choices: ['Monaco', 'Vatican City', 'Luxembourg', 'San Marino'],
    correctAnswer: 'Vatican City',
  },

  // Literature
  {
    question: "Who wrote 'The Odyssey'?",
    choices: ['Homer', 'Sophocles', 'Virgil', 'Plato'],
    correctAnswer: 'Homer',
  },
  {
    question: 'What is the title of the first Harry Potter book?',
    choices: [
      'The Chamber of Secrets',
      "The Sorcerer's Stone",
      'The Goblet of Fire',
      'The Half-Blood Prince',
    ],
    correctAnswer: "The Sorcerer's Stone",
  },

  // Technology
  {
    question: 'Which social media platform is known for tweets?',
    choices: ['Facebook', 'Instagram', 'Twitter', 'Snapchat'],
    correctAnswer: 'Twitter',
  },
  {
    question: 'Which company created the iPhone?',
    choices: ['Google', 'Samsung', 'Microsoft', 'Apple'],
    correctAnswer: 'Apple',
  },

  // Science
  {
    question: 'Which layer of the Earth lies directly below the crust?',
    choices: ['Core', 'Mantle', 'Inner Core', 'Outer Core'],
    correctAnswer: 'Mantle',
  },
  {
    question: 'What type of energy is stored in a stretched rubber band?',
    choices: ['Kinetic', 'Chemical', 'Potential', 'Thermal'],
    correctAnswer: 'Potential',
  },
];

export default elementaryQuizQuestions;
