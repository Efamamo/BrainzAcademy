const universityQuizQuestions = [
  // Advanced Science (Physics, Chemistry, Biology)
  {
    question:
      "What is Schrödinger's cat thought experiment designed to demonstrate?",
    choices: [
      'Quantum indeterminacy',
      'Relativity',
      'Thermodynamics',
      'Particle-wave duality',
    ],
    correctAnswer: 'Quantum indeterminacy',
  },
  {
    question: 'What is the molecular formula for glucose?',
    choices: ['C6H6', 'C6H12O6', 'CH4', 'C2H5OH'],
    correctAnswer: 'C6H12O6',
  },
  {
    question:
      'Which type of bond involves the sharing of electron pairs between atoms?',
    choices: [
      'Ionic bond',
      'Covalent bond',
      'Hydrogen bond',
      'Van der Waals force',
    ],
    correctAnswer: 'Covalent bond',
  },
  {
    question:
      'Which organelle is responsible for generating ATP in eukaryotic cells?',
    choices: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
    correctAnswer: 'Mitochondria',
  },
  {
    question:
      'What is the term for the amount of heat required to raise the temperature of 1 gram of water by 1°C?',
    choices: ['Calorie', 'Joule', 'Watt', 'Newton'],
    correctAnswer: 'Calorie',
  },

  // Advanced Mathematics
  {
    question: 'What is the derivative of sin(x)?',
    choices: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
    correctAnswer: 'cos(x)',
  },
  {
    question: 'What is the value of the integral of 1/x from 1 to e?',
    choices: ['1', 'e', 'ln(e)', '0'],
    correctAnswer: '1',
  },
  {
    question:
      'What is the determinant of a 2x2 matrix with values [[a, b], [c, d]]?',
    choices: ['ad - bc', 'ab - cd', 'a + d', 'ac - bd'],
    correctAnswer: 'ad - bc',
  },
  {
    question: 'In probability, what does the symbol P(A ∩ B) represent?',
    choices: [
      'Probability of A or B',
      'Probability of A and B',
      'Probability of A not B',
      'Probability of B not A',
    ],
    correctAnswer: 'Probability of A and B',
  },

  // History and Political Science
  {
    question: "Who wrote 'The Prince', a political treatise on power?",
    choices: ['John Locke', 'Plato', 'Niccolò Machiavelli', 'Thomas Hobbes'],
    correctAnswer: 'Niccolò Machiavelli',
  },
  {
    question:
      "Which global conflict is often referred to as 'The War to End All Wars'?",
    choices: ['World War I', 'World War II', 'Cold War', 'The Napoleonic Wars'],
    correctAnswer: 'World War I',
  },
  {
    question: 'Which political system is based on the ideas of Karl Marx?',
    choices: ['Capitalism', 'Communism', 'Fascism', 'Monarchy'],
    correctAnswer: 'Communism',
  },
  {
    question:
      'Which U.S. President abolished slavery with the Emancipation Proclamation?',
    choices: [
      'George Washington',
      'Abraham Lincoln',
      'Thomas Jefferson',
      'Andrew Jackson',
    ],
    correctAnswer: 'Abraham Lincoln',
  },

  // Advanced Biology
  {
    question:
      'Which molecule carries genetic information in all living organisms?',
    choices: ['RNA', 'DNA', 'Protein', 'Carbohydrate'],
    correctAnswer: 'DNA',
  },
  {
    question:
      'What process is responsible for the synthesis of RNA from a DNA template?',
    choices: ['Replication', 'Transcription', 'Translation', 'Mutation'],
    correctAnswer: 'Transcription',
  },

  // Advanced Chemistry
  {
    question: 'What is the pH of a neutral solution at 25°C?',
    choices: ['0', '7', '14', '10'],
    correctAnswer: '7',
  },
  {
    question:
      'What is the name of the phase change from solid directly to gas?',
    choices: ['Evaporation', 'Condensation', 'Sublimation', 'Deposition'],
    correctAnswer: 'Sublimation',
  },
  {
    question:
      'Which element is most commonly associated with organic chemistry?',
    choices: ['Carbon', 'Nitrogen', 'Oxygen', 'Hydrogen'],
    correctAnswer: 'Carbon',
  },

  // Advanced Technology and Computer Science
  {
    question: 'What is the time complexity of the binary search algorithm?',
    choices: ['O(n)', 'O(n^2)', 'O(log n)', 'O(1)'],
    correctAnswer: 'O(log n)',
  },
  {
    question:
      'Which type of machine learning involves labeled data for training?',
    choices: [
      'Supervised learning',
      'Unsupervised learning',
      'Reinforcement learning',
      'Semi-supervised learning',
    ],
    correctAnswer: 'Supervised learning',
  },
  {
    question:
      'Which protocol is used to assign IP addresses dynamically in a network?',
    choices: ['DNS', 'FTP', 'DHCP', 'HTTP'],
    correctAnswer: 'DHCP',
  },
  {
    question:
      'Which data structure uses a Last-In-First-Out (LIFO) method for managing elements?',
    choices: ['Queue', 'Stack', 'Array', 'Linked list'],
    correctAnswer: 'Stack',
  },

  // Literature and Humanities
  {
    question: "Who wrote the epic poem 'Paradise Lost'?",
    choices: [
      'John Milton',
      'Geoffrey Chaucer',
      'Homer',
      'William Shakespeare',
    ],
    correctAnswer: 'John Milton',
  },
  {
    question:
      "In Dante's 'Divine Comedy', what are the three parts of the afterlife?",
    choices: [
      'Heaven, Purgatory, Hell',
      'Heaven, Limbo, Hell',
      'Hell, Paradise, Limbo',
      'Purgatory, Paradise, Limbo',
    ],
    correctAnswer: 'Heaven, Purgatory, Hell',
  },

  // Economics
  {
    question: 'What does GDP stand for?',
    choices: [
      'Gross Domestic Product',
      'Global Domestic Profit',
      'Gross Development Plan',
      'Global Development Product',
    ],
    correctAnswer: 'Gross Domestic Product',
  },
  {
    question: 'What is the concept of opportunity cost in economics?',
    choices: [
      'The cost of choosing one option over another',
      'The cost of producing one more unit',
      'The cost of hiring labor',
      'The cost of government regulation',
    ],
    correctAnswer: 'The cost of choosing one option over another',
  },

  // Logic and Philosophy
  {
    question: "Who is known for the statement 'I think, therefore I am'?",
    choices: ['Plato', 'Immanuel Kant', 'Aristotle', 'René Descartes'],
    correctAnswer: 'René Descartes',
  },
  {
    question: 'Which field of philosophy deals with the study of knowledge?',
    choices: ['Ethics', 'Metaphysics', 'Epistemology', 'Aesthetics'],
    correctAnswer: 'Epistemology',
  },
  // Physics
  {
    question: 'What is the second law of thermodynamics?',
    choices: [
      'Energy cannot be created or destroyed',
      'The total entropy of an isolated system always increases over time',
      'For every action, there is an equal and opposite reaction',
      'Force equals mass times acceleration',
    ],
    correctAnswer:
      'The total entropy of an isolated system always increases over time',
  },
  {
    question: 'What is the speed of light in vacuum?',
    choices: ['300,000 m/s', '3,000 km/s', '300,000 km/s', '300 km/s'],
    correctAnswer: '300,000 km/s',
  },
  {
    question: 'Which physicist is known for the theory of general relativity?',
    choices: ['Isaac Newton', 'Niels Bohr', 'Albert Einstein', 'Marie Curie'],
    correctAnswer: 'Albert Einstein',
  },

  // Chemistry
  {
    question:
      'Which law states that the volume of a gas is inversely proportional to its pressure?',
    choices: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Dalton's Law"],
    correctAnswer: "Boyle's Law",
  },
  {
    question: 'What is the most electronegative element on the periodic table?',
    choices: ['Oxygen', 'Chlorine', 'Fluorine', 'Nitrogen'],
    correctAnswer: 'Fluorine',
  },
  {
    question: 'What is the pH of a strong acid?',
    choices: ['Less than 7', 'Equal to 7', 'Greater than 7', 'Equal to 14'],
    correctAnswer: 'Less than 7',
  },

  // Biology
  {
    question: 'What part of the brain controls motor function and balance?',
    choices: ['Cerebellum', 'Cerebrum', 'Medulla', 'Hypothalamus'],
    correctAnswer: 'Cerebellum',
  },
  {
    question: 'What is the primary pigment used in photosynthesis?',
    choices: ['Hemoglobin', 'Chlorophyll', 'Melanin', 'Carotene'],
    correctAnswer: 'Chlorophyll',
  },
  {
    question:
      'What is the process by which plants release water vapor into the air?',
    choices: ['Respiration', 'Transpiration', 'Condensation', 'Precipitation'],
    correctAnswer: 'Transpiration',
  },

  // Mathematics
  {
    question: 'What is Euler’s number approximately equal to?',
    choices: ['2.72', '3.14', '1.62', '1.41'],
    correctAnswer: '2.72',
  },
  {
    question: 'What is the limit of sin(x)/x as x approaches 0?',
    choices: ['0', '1', 'Infinity', 'Undefined'],
    correctAnswer: '1',
  },
  {
    question: 'What is the dot product of two orthogonal vectors?',
    choices: ['1', '0', 'The product of their magnitudes', 'Undefined'],
    correctAnswer: '0',
  },

  // Computer Science
  {
    question:
      'What is the Big-O time complexity of the quicksort algorithm in the average case?',
    choices: ['O(n log n)', 'O(n^2)', 'O(n)', 'O(log n)'],
    correctAnswer: 'O(n log n)',
  },
  {
    question: 'In relational databases, what does ACID stand for?',
    choices: [
      'Atomicity, Consistency, Isolation, Durability',
      'Access, Control, Integrity, Durability',
      'Atomicity, Connectivity, Isolation, Dependability',
      'Accuracy, Consistency, Information, Durability',
    ],
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability',
  },
  {
    question: 'What is the primary difference between a stack and a queue?',
    choices: [
      'Stack is FIFO, Queue is LIFO',
      'Queue is FIFO, Stack is LIFO',
      'Queue is LIFO, Stack is FIFO',
      'Both use FIFO',
    ],
    correctAnswer: 'Queue is FIFO, Stack is LIFO',
  },
  {
    question:
      'Which algorithm finds the shortest paths between nodes in a graph, using weights?',
    choices: [
      "Dijkstra's Algorithm",
      'Breadth-First Search',
      'Depth-First Search',
      'Binary Search',
    ],
    correctAnswer: "Dijkstra's Algorithm",
  },

  // Economics
  {
    question: "What does the term 'inflation' refer to in economics?",
    choices: [
      'A general increase in prices',
      'A decrease in the supply of money',
      'The rise in unemployment',
      'The increase in gross domestic product (GDP)',
    ],
    correctAnswer: 'A general increase in prices',
  },
  {
    question: 'Who is considered the father of modern economics?',
    choices: [
      'Adam Smith',
      'Karl Marx',
      'John Maynard Keynes',
      'David Ricardo',
    ],
    correctAnswer: 'Adam Smith',
  },
  {
    question: "What is 'perfect competition' in economics?",
    choices: [
      'A market where there are no competitors',
      'A market where many companies sell similar products',
      'A market where there is only one seller',
      'A market where only two companies compete',
    ],
    correctAnswer: 'A market where many companies sell similar products',
  },

  // History
  {
    question: 'What event started World War I?',
    choices: [
      'The assassination of Archduke Franz Ferdinand',
      'The bombing of Pearl Harbor',
      'The Treaty of Versailles',
      'The Russian Revolution',
    ],
    correctAnswer: 'The assassination of Archduke Franz Ferdinand',
  },
  {
    question: 'Which civilization is credited with inventing writing?',
    choices: ['Sumerians', 'Egyptians', 'Romans', 'Greeks'],
    correctAnswer: 'Sumerians',
  },
  {
    question: 'Which empire was the largest in history by land area?',
    choices: [
      'Mongol Empire',
      'British Empire',
      'Roman Empire',
      'Ottoman Empire',
    ],
    correctAnswer: 'British Empire',
  },

  // Philosophy
  {
    question: "Which philosopher wrote 'The Republic'?",
    choices: ['Plato', 'Aristotle', 'Descartes', 'Kant'],
    correctAnswer: 'Plato',
  },
  {
    question: "What is 'utilitarianism' in moral philosophy?",
    choices: [
      'The idea that the right action is the one that maximizes happiness',
      'The belief that moral duties are absolute',
      'The theory that knowledge is derived from sensory experience',
      'The belief that all actions are predetermined',
    ],
    correctAnswer:
      'The idea that the right action is the one that maximizes happiness',
  },

  // Psychology
  {
    question: "What is the 'id' in Freudian psychology?",
    choices: [
      'The rational, conscious part of the mind',
      'The primitive and instinctive component of personality',
      'The moral component of personality',
      'The socialized aspect of the self',
    ],
    correctAnswer: 'The primitive and instinctive component of personality',
  },
  {
    question:
      'What is the term for the ability to maintain attention on a task for a prolonged period?',
    choices: [
      'Selective attention',
      'Sustained attention',
      'Divided attention',
      'Focused attention',
    ],
    correctAnswer: 'Sustained attention',
  },

  // Sociology
  {
    question: "What is a 'norm' in sociology?",
    choices: [
      'A widely accepted behavior',
      'A deviant act',
      'A law',
      'An economic trend',
    ],
    correctAnswer: 'A widely accepted behavior',
  },
  {
    question: "Who coined the term 'sociology'?",
    choices: ['Karl Marx', 'Max Weber', 'Auguste Comte', 'Émile Durkheim'],
    correctAnswer: 'Auguste Comte',
  },

  // Business and Management
  {
    question: 'What is SWOT analysis used for?',
    choices: [
      "Evaluating a company's Strengths, Weaknesses, Opportunities, and Threats",
      'Measuring financial performance',
      'Assessing customer satisfaction',
      'Planning a marketing campaign',
    ],
    correctAnswer:
      "Evaluating a company's Strengths, Weaknesses, Opportunities, and Threats",
  },
  {
    question:
      'Which of the following is considered a soft skill in management?',
    choices: [
      'Technical knowledge',
      'Leadership',
      'Data analysis',
      'Programming',
    ],
    correctAnswer: 'Leadership',
  },
  {
    question: 'What is the fundamental theorem of calculus?',
    choices: [
      'It relates differentiation and integration',
      'It states that every continuous function is differentiable',
      'It defines the integral of a function as the limit of Riemann sums',
      'It provides the formula for solving differential equations',
    ],
    correctAnswer: 'It relates differentiation and integration',
  },
  {
    question: 'What is the purpose of a Lagrange multiplier in optimization?',
    choices: [
      'To find local maxima and minima of functions with constraints',
      'To solve linear equations',
      'To compute definite integrals',
      'To approximate functions using polynomials',
    ],
    correctAnswer:
      'To find local maxima and minima of functions with constraints',
  },
];

export default universityQuizQuestions;
