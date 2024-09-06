const famousPersonalitiesTopics = [
  {
    title: 'Albert Einstein',
    description:
      'A theoretical physicist known for developing the theory of relativity and his contributions to quantum mechanics, he won the Nobel Prize in Physics in 1921.',
    link: 'https://en.wikipedia.org/wiki/Albert_Einstein',
  },
  {
    title: 'Leonardo da Vinci',
    description:
      'A Renaissance polymath who excelled in art, science, engineering, and anatomy, best known for masterpieces like the Mona Lisa and The Last Supper.',
    link: 'https://en.wikipedia.org/wiki/Leonardo_da_Vinci',
  },
  {
    title: 'Marie Curie',
    description:
      'A physicist and chemist who conducted pioneering research on radioactivity, she was the first woman to win a Nobel Prize and the only person to win Nobel Prizes in two different sciences.',
    link: 'https://en.wikipedia.org/wiki/Marie_Curie',
  },
  {
    title: 'Nelson Mandela',
    description:
      'An anti-apartheid revolutionary and former President of South Africa, Mandela became a global symbol for peace and reconciliation after 27 years in prison.',
    link: 'https://en.wikipedia.org/wiki/Nelson_Mandela',
  },
  {
    title: 'Mahatma Gandhi',
    description:
      "A leader of the Indian independence movement who employed nonviolent civil disobedience, Gandhi's philosophy of peaceful resistance influenced many global movements.",
    link: 'https://en.wikipedia.org/wiki/Mahatma_Gandhi',
  },
  {
    title: 'William Shakespeare',
    description:
      'An English playwright and poet known for his contributions to literature, including famous works like Hamlet, Romeo and Juliet, and Macbeth.',
    link: 'https://en.wikipedia.org/wiki/William_Shakespeare',
  },
  {
    title: 'Leonardo da Vinci',
    description:
      'A Renaissance artist, scientist, and inventor known for his works in art and science, including paintings like the Mona Lisa and contributions to anatomy and engineering.',
    link: 'https://en.wikipedia.org/wiki/Leonardo_da_Vinci',
  },
  {
    title: 'Steve Jobs',
    description:
      'Co-founder of Apple Inc., Jobs was a key figure in the development of revolutionary products like the iPhone, iPad, and Macintosh computer.',
    link: 'https://en.wikipedia.org/wiki/Steve_Jobs',
  },
  {
    title: 'Oprah Winfrey',
    description:
      'A television host, producer, and philanthropist, Winfrey is best known for her influential talk show and her work in media and social issues.',
    link: 'https://en.wikipedia.org/wiki/Oprah_Winfrey',
  },
  {
    title: 'Martin Luther King Jr.',
    description:
      "A civil rights leader known for his role in the American civil rights movement, King is famous for his advocacy of nonviolent protest and his iconic 'I Have a Dream' speech.",
    link: 'https://en.wikipedia.org/wiki/Martin_Luther_King_Jr.',
  },
  {
    title: 'Winston Churchill',
    description:
      'The British Prime Minister during World War II, Churchill is renowned for his leadership and speeches that inspired Britain during the war.',
    link: 'https://en.wikipedia.org/wiki/Winston_Churchill',
  },
  {
    title: 'Albert Einstein',
    description:
      "A theoretical physicist who developed the theory of relativity, Einstein's work laid the foundation for modern physics and earned him the Nobel Prize in 1921.",
    link: 'https://en.wikipedia.org/wiki/Albert_Einstein',
  },
  {
    title: 'Amelia Earhart',
    description:
      "An American aviator and the first female pilot to fly solo across the Atlantic Ocean, Earhart is celebrated for her contributions to aviation and women's rights.",
    link: 'https://en.wikipedia.org/wiki/Amelia_Earhart',
  },
  {
    title: 'Elon Musk',
    description:
      'An entrepreneur and CEO known for founding SpaceX, Tesla, and Neuralink, Musk is a prominent figure in technology and space exploration.',
    link: 'https://en.wikipedia.org/wiki/Elon_Musk',
  },
  {
    title: 'Jane Austen',
    description:
      'An English novelist whose works, including Pride and Prejudice and Sense and Sensibility, are celebrated for their insights into social class and gender.',
    link: 'https://en.wikipedia.org/wiki/Jane_Austen',
  },
  {
    title: 'Mark Zuckerberg',
    description:
      'Co-founder and CEO of Meta Platforms (formerly Facebook), Zuckerberg has played a significant role in the development of social media.',
    link: 'https://en.wikipedia.org/wiki/Mark_Zuckerberg',
  },
  {
    title: 'Hillary Clinton',
    description:
      'An American politician and former Secretary of State, Clinton was the first woman to be nominated for President by a major U.S. political party in 2016.',
    link: 'https://en.wikipedia.org/wiki/Hillary_Clinton',
  },
  {
    title: 'Isaac Newton',
    description:
      "An English mathematician and physicist known for formulating the laws of motion and universal gravitation, Newton's work laid the groundwork for classical mechanics.",
    link: 'https://en.wikipedia.org/wiki/Isaac_Newton',
  },
  {
    title: 'Malala Yousafzai',
    description:
      "A Pakistani activist for female education and the youngest Nobel Prize laureate, Yousafzai advocates for girls' education worldwide.",
    link: 'https://en.wikipedia.org/wiki/Malala_Yousafzai',
  },
  {
    title: 'Michael Jordan',
    description:
      'Considered one of the greatest basketball players of all time, Jordan led the Chicago Bulls to six NBA championships and won five MVP awards.',
    link: 'https://en.wikipedia.org/wiki/Michael_Jordan',
  },
  {
    title: 'Elon Musk',
    description:
      'An entrepreneur and innovator known for his work with Tesla, SpaceX, and SolarCity, Musk is a key figure in technology and renewable energy.',
    link: 'https://en.wikipedia.org/wiki/Elon_Musk',
  },
  {
    title: 'Ada Lovelace',
    description:
      "A mathematician and writer recognized for her work on Charles Babbage's early mechanical general-purpose computer, she is often considered the first computer programmer.",
    link: 'https://en.wikipedia.org/wiki/Ada_Lovelace',
  },
  {
    title: 'Alexander Graham Bell',
    description:
      "An inventor and scientist who is best known for inventing the telephone, Bell's work significantly impacted communication technology.",
    link: 'https://en.wikipedia.org/wiki/Alexander_Graham_Bell',
  },
  {
    title: 'Leonhard Euler',
    description:
      'A Swiss mathematician and physicist known for his work in topology, number theory, and graph theory, Euler made significant contributions to various branches of mathematics.',
    link: 'https://en.wikipedia.org/wiki/Leonhard_Euler',
  },
  {
    title: 'Galileo Galilei',
    description:
      'An Italian astronomer and physicist who played a major role in the Scientific Revolution, Galileo is known for his improvements to the telescope and his support for heliocentrism.',
    link: 'https://en.wikipedia.org/wiki/Galileo_Galilei',
  },
  {
    title: 'Rosa Parks',
    description:
      'A civil rights activist whose refusal to give up her bus seat led to the Montgomery Bus Boycott, Parks became an icon of the American civil rights movement.',
    link: 'https://en.wikipedia.org/wiki/Rosa_Parks',
  },
  {
    title: 'Stephen Hawking',
    description:
      "A theoretical physicist and cosmologist known for his work on black holes and the nature of the universe, Hawking authored several influential books, including 'A Brief History of Time.'",
    link: 'https://en.wikipedia.org/wiki/Stephen_Hawking',
  },
  {
    title: 'Pablo Picasso',
    description:
      "A Spanish painter and sculptor known for co-founding the Cubist movement and producing works like 'Guernica' and 'Les Demoiselles d'Avignon.'",
    link: 'https://en.wikipedia.org/wiki/Pablo_Picasso',
  },
  {
    title: 'Thomas Edison',
    description:
      'An American inventor and businessman who held over 1,000 patents, Edison is best known for inventing the phonograph and developing the practical electric light bulb.',
    link: 'https://en.wikipedia.org/wiki/Thomas_Edison',
  },
  {
    title: 'Eleanor Roosevelt',
    description:
      'An American diplomat and activist who served as the First Lady of the United States from 1933 to 1945, Roosevelt was a key figure in the formation of the Universal Declaration of Human Rights.',
    link: 'https://en.wikipedia.org/wiki/Eleanor_Roosevelt',
  },
  {
    title: 'Walt Disney',
    description:
      'An American entrepreneur, animator, and film producer, Disney founded The Walt Disney Company and created iconic characters such as Mickey Mouse.',
    link: 'https://en.wikipedia.org/wiki/Walt_Disney',
  },
  {
    title: 'Jane Goodall',
    description:
      "A primatologist and anthropologist known for her groundbreaking research on chimpanzees, Goodall's work has been instrumental in the field of animal behavior.",
    link: 'https://en.wikipedia.org/wiki/Jane_Goodall',
  },
  {
    title: 'Richard Feynman',
    description:
      'A physicist renowned for his work in quantum mechanics and particle physics, Feynman was also a gifted teacher and popularizer of science.',
    link: 'https://en.wikipedia.org/wiki/Richard_Feynman',
  },
  {
    title: 'Margaret Thatcher',
    description:
      'The first female Prime Minister of the United Kingdom, Thatcher served from 1979 to 1990 and is known for her conservative policies and leadership style.',
    link: 'https://en.wikipedia.org/wiki/Margaret_Thatcher',
  },
  {
    title: 'John F. Kennedy',
    description:
      'The 35th President of the United States, Kennedy is remembered for his leadership during the Cuban Missile Crisis and his inspirational speeches, including his inaugural address.',
    link: 'https://en.wikipedia.org/wiki/John_F._Kennedy',
  },
  {
    title: 'Ruth Bader Ginsburg',
    description:
      "An Associate Justice of the U.S. Supreme Court known for her advocacy of gender equality and women's rights, Ginsburg was a pioneering legal scholar and judge.",
    link: 'https://en.wikipedia.org/wiki/Ruth_Bader_Ginsburg',
  },
  {
    title: 'Stephen King',
    description:
      "A prolific author of horror, supernatural fiction, and suspense novels, King is known for bestsellers like 'The Shining,' 'It,' and 'Carrie.'",
    link: 'https://en.wikipedia.org/wiki/Stephen_King',
  },
  {
    title: 'Michael Phelps',
    description:
      'An American swimmer and the most decorated Olympian of all time, Phelps has won 23 gold medals across four Olympic Games.',
    link: 'https://en.wikipedia.org/wiki/Michael_Phelps',
  },
  {
    title: 'Frida Kahlo',
    description:
      'A Mexican painter known for her self-portraits and works that explore identity, postcolonialism, and gender, Kahlo is celebrated for her distinctive style and personal themes.',
    link: 'https://en.wikipedia.org/wiki/Frida_Kahlo',
  },
  {
    title: 'George Washington',
    description:
      "The first President of the United States and a key leader in the American Revolutionary War, Washington is often referred to as the 'Father of His Country.'",
    link: 'https://en.wikipedia.org/wiki/George_Washington',
  },
  {
    title: 'Nelson Mandela',
    description:
      "A South African anti-apartheid revolutionary who became the country's first Black President, Mandela is renowned for his efforts in promoting peace and reconciliation.",
    link: 'https://en.wikipedia.org/wiki/Nelson_Mandela',
  },
  {
    title: 'Malcolm X',
    description:
      'A civil rights activist and prominent figure in the Black liberation movement, Malcolm X advocated for racial justice and was a key figure in the Nation of Islam.',
    link: 'https://en.wikipedia.org/wiki/Malcolm_X',
  },
  {
    title: 'James Watson',
    description:
      "A molecular biologist who, along with Francis Crick, co-discovered the structure of DNA, Watson's work has had a profound impact on genetics and molecular biology.",
    link: 'https://en.wikipedia.org/wiki/James_Watson',
  },
  {
    title: 'Paul McCartney',
    description:
      "A musician and songwriter best known as a member of The Beatles, McCartney's contributions to music and his solo career have made him one of the most influential musicians of all time.",
    link: 'https://en.wikipedia.org/wiki/Paul_McCartney',
  },
  {
    title: 'Angela Merkel',
    description:
      'The Chancellor of Germany from 2005 to 2021, Merkel is known for her leadership in European and global politics, as well as her pragmatic approach to governance.',
    link: 'https://en.wikipedia.org/wiki/Angela_Merkel',
  },
  {
    title: 'Leonardo DiCaprio',
    description:
      "An American actor and environmental activist, DiCaprio is known for his roles in films like 'Titanic,' 'Inception,' and 'The Revenant,' and his work on climate change issues.",
    link: 'https://en.wikipedia.org/wiki/Leonardo_DiCaprio',
  },
  {
    title: 'Elon Musk',
    description:
      'An influential entrepreneur known for his work with Tesla, SpaceX, and Neuralink, Musk is a key figure in technology and space exploration.',
    link: 'https://en.wikipedia.org/wiki/Elon_Musk',
  },
  {
    title: 'Serena Williams',
    description:
      'A professional tennis player widely regarded as one of the greatest female athletes of all time, Williams has won 23 Grand Slam singles titles.',
    link: 'https://en.wikipedia.org/wiki/Serena_Williams',
  },
  {
    title: 'Stephen Curry',
    description:
      'An American basketball player known for his exceptional shooting skills, Curry has won multiple NBA championships with the Golden State Warriors.',
    link: 'https://en.wikipedia.org/wiki/Stephen_Curry',
  },
  {
    title: 'David Attenborough',
    description:
      "A British broadcaster and natural historian known for his work in wildlife documentaries, including the acclaimed 'The Blue Planet' and 'Planet Earth' series.",
    link: 'https://en.wikipedia.org/wiki/David_Attenborough',
  },
  {
    title: 'Simone Biles',
    description:
      'An American gymnast considered one of the greatest of all time, Biles has won multiple Olympic gold medals and World Championship titles.',
    link: 'https://en.wikipedia.org/wiki/Simone_Biles',
  },
  {
    title: 'Kanye West',
    description:
      'An influential American rapper, producer, and fashion designer, West is known for his groundbreaking music and contributions to the fashion industry.',
    link: 'https://en.wikipedia.org/wiki/Kanye_West',
  },
  {
    title: 'J.K. Rowling',
    description:
      "A British author best known for the 'Harry Potter' series, Rowling's books have become a global phenomenon and significantly impacted popular culture.",
    link: 'https://en.wikipedia.org/wiki/J._K._Rowling',
  },
  {
    title: 'Emma Watson',
    description:
      "An actress and activist known for her role as Hermione Granger in the 'Harry Potter' series, Watson is also a prominent advocate for gender equality.",
    link: 'https://en.wikipedia.org/wiki/Emma_Watson',
  },
  {
    title: 'Dwayne Johnson',
    description:
      'An American actor and former professional wrestler known for his roles in action films and his career in WWE, Johnson is a major figure in entertainment.',
    link: 'https://en.wikipedia.org/wiki/Dwayne_Johnson',
  },
  {
    title: 'Gordon Ramsay',
    description:
      "A British celebrity chef and restaurateur known for his Michelin-starred restaurants and television shows like 'Hell's Kitchen' and 'MasterChef.'",
    link: 'https://en.wikipedia.org/wiki/Gordon_Ramsay',
  },
  {
    title: 'Shakira',
    description:
      "A Colombian singer and songwriter known for her unique voice and dance moves, Shakira has achieved international success with hits like 'Hips Don't Lie.'",
    link: 'https://en.wikipedia.org/wiki/Shakira',
  },
  {
    title: 'Rihanna',
    description:
      'A Barbadian singer, songwriter, and entrepreneur known for her successful music career and her Fenty beauty line, Rihanna has made significant contributions to pop culture.',
    link: 'https://en.wikipedia.org/wiki/Rihanna',
  },
  {
    title: 'Leonardo da Vinci',
    description:
      "A polymath of the Renaissance period, known for his contributions to art, science, and engineering, da Vinci's works include the 'Mona Lisa' and 'The Last Supper.'",
    link: 'https://en.wikipedia.org/wiki/Leonardo_da_Vinci',
  },
  {
    title: 'Meryl Streep',
    description:
      "An American actress with a career spanning over four decades, Streep is acclaimed for her performances in films such as 'The Devil Wears Prada' and 'Sophie's Choice.'",
    link: 'https://en.wikipedia.org/wiki/Meryl_Streep',
  },
  {
    title: 'Barack Obama',
    description:
      'The 44th President of the United States, Obama is known for his policies on healthcare reform, economic recovery, and his role in international diplomacy.',
    link: 'https://en.wikipedia.org/wiki/Barack_Obama',
  },
  {
    title: 'Justin Bieber',
    description:
      'A Canadian singer and songwriter who gained fame at a young age, Bieber has released numerous hit singles and remains a prominent figure in contemporary pop music.',
    link: 'https://en.wikipedia.org/wiki/Justin_Bieber',
  },
];

export default famousPersonalitiesTopics;
