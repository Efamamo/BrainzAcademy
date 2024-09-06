const artAndMusic = [
  {
    title: 'Renaissance Art',
    description:
      'Renaissance art is characterized by its focus on realism, perspective, and human anatomy, flourishing in Europe during the 14th to 17th centuries. Artists like Leonardo da Vinci and Michelangelo were key figures.',
    link: 'https://en.wikipedia.org/wiki/Renaissance_art',
  },
  {
    title: 'Baroque Music',
    description:
      'Baroque music (1600-1750) is known for its ornate style, contrast, and use of basso continuo. Composers like Johann Sebastian Bach and George Frideric Handel were central to this period.',
    link: 'https://en.wikipedia.org/wiki/Baroque_music',
  },
  {
    title: 'Impressionism',
    description:
      'Impressionism in art focuses on light, color, and capturing fleeting moments, often using loose brushstrokes. Claude Monet and Edgar Degas are key figures.',
    link: 'https://en.wikipedia.org/wiki/Impressionism',
  },
  {
    title: 'Classical Music',
    description:
      'Classical music, which spanned from 1750 to 1820, is known for its balance, clarity, and formality. Notable composers include Wolfgang Amadeus Mozart, Ludwig van Beethoven, and Franz Joseph Haydn.',
    link: 'https://en.wikipedia.org/wiki/Classical_music',
  },
  {
    title: 'Cubism',
    description:
      'Cubism, pioneered by Pablo Picasso and Georges Braque, was an early 20th-century art movement that broke objects down into geometric shapes and presented multiple perspectives in a single image.',
    link: 'https://en.wikipedia.org/wiki/Cubism',
  },
  {
    title: 'Romantic Music',
    description:
      'Romantic music (19th century) emphasized emotion, individualism, and nature. Composers like Ludwig van Beethoven, Franz Schubert, and Richard Wagner were prominent in this era.',
    link: 'https://en.wikipedia.org/wiki/Romantic_music',
  },
  {
    title: 'Abstract Art',
    description:
      'Abstract art does not attempt to represent reality but uses shapes, colors, and forms to achieve its effect. Key artists include Wassily Kandinsky and Piet Mondrian.',
    link: 'https://en.wikipedia.org/wiki/Abstract_art',
  },
  {
    title: 'Jazz',
    description:
      "Jazz is a genre of music that originated in the African-American communities of New Orleans in the early 20th century. It's known for its improvisation, syncopation, and swing notes.",
    link: 'https://en.wikipedia.org/wiki/Jazz',
  },
  {
    title: 'Pop Art',
    description:
      "Pop art emerged in the 1950s and uses imagery from popular culture and mass media. Andy Warhol's works, like his Campbell's Soup Cans, are iconic examples.",
    link: 'https://en.wikipedia.org/wiki/Pop_art',
  },
  {
    title: 'Opera',
    description:
      'Opera is a form of theater in which music plays a central role, combining orchestral music with singing and acting. Famous composers include Wolfgang Amadeus Mozart and Giuseppe Verdi.',
    link: 'https://en.wikipedia.org/wiki/Opera',
  },
  {
    title: 'Surrealism',
    description:
      'Surrealism is an art movement that began in the 1920s, focusing on unlocking the unconscious mind through dream-like scenes and illogical juxtaposition. Salvador Dalí was a leading figure.',
    link: 'https://en.wikipedia.org/wiki/Surrealism',
  },
  {
    title: 'Blues',
    description:
      "Blues music originated in the African-American communities in the Southern U.S. in the late 19th century. It's characterized by its use of the blues scale and emotional depth.",
    link: 'https://en.wikipedia.org/wiki/Blues',
  },
  {
    title: 'Expressionism',
    description:
      'Expressionism is an early 20th-century art movement that presents the world from a subjective perspective, distorting it for emotional effect. Artists like Edvard Munch are key figures.',
    link: 'https://en.wikipedia.org/wiki/Expressionism',
  },
  {
    title: 'Rock and Roll',
    description:
      "Rock and roll is a genre of popular music that originated in the 1950s. It combines elements of rhythm and blues with country and gospel music. Elvis Presley is often called the 'King of Rock and Roll.'",
    link: 'https://en.wikipedia.org/wiki/Rock_and_roll',
  },
  {
    title: 'Minimalism (Art)',
    description:
      'Minimalism is a visual art movement that emerged in the 1960s, emphasizing simplicity and focusing on color, form, and space. Artists like Donald Judd are associated with this style.',
    link: 'https://en.wikipedia.org/wiki/Minimalism',
  },
  {
    title: 'Hip-Hop',
    description:
      'Hip-hop is a cultural movement and genre of music that originated in the Bronx, New York, in the 1970s. It includes rapping, DJing, graffiti art, and breakdancing.',
    link: 'https://en.wikipedia.org/wiki/Hip_hop_music',
  },
  {
    title: 'Dadaism',
    description:
      'Dadaism is an avant-garde art movement of the early 20th century that rejected logic and reason, often producing absurd, chaotic, and anti-art works.',
    link: 'https://en.wikipedia.org/wiki/Dada',
  },
  {
    title: 'Reggae',
    description:
      'Reggae is a music genre that originated in Jamaica in the late 1960s. It is known for its offbeat rhythm and socially conscious lyrics, with Bob Marley being its most famous exponent.',
    link: 'https://en.wikipedia.org/wiki/Reggae',
  },
  {
    title: 'Futurism',
    description:
      'Futurism was an early 20th-century art and social movement that emphasized speed, technology, and industrial advancements. It glorified the modern machine age.',
    link: 'https://en.wikipedia.org/wiki/Futurism',
  },
  {
    title: 'Electronic Music',
    description:
      'Electronic music uses electronic devices like synthesizers, drum machines, and computers to create sounds. It spans various genres from techno to house and EDM.',
    link: 'https://en.wikipedia.org/wiki/Electronic_music',
  },
  {
    title: 'Realism (Art)',
    description:
      'Realism is an art movement that emerged in the mid-19th century, focusing on depicting subjects as they are in everyday life, without idealization. Gustave Courbet is a major figure.',
    link: 'https://en.wikipedia.org/wiki/Realism_(arts)',
  },
  {
    title: 'Classical Indian Music',
    description:
      'Classical Indian music is based on ragas and talas, with traditions like Hindustani in the north and Carnatic in the south. It is known for its improvisation and spiritual connection.',
    link: 'https://en.wikipedia.org/wiki/Indian_classical_music',
  },
  {
    title: 'Pointillism',
    description:
      "Pointillism is a technique of painting in which small dots of color are applied in patterns to form an image. Georges Seurat and Paul Signac are the movement's key figures.",
    link: 'https://en.wikipedia.org/wiki/Pointillism',
  },
  {
    title: 'Folk Music',
    description:
      'Folk music is traditional music passed down orally through generations, often reflecting the culture and history of a people. It varies widely across regions and time periods.',
    link: 'https://en.wikipedia.org/wiki/Folk_music',
  },
  {
    title: 'Art Nouveau',
    description:
      'Art Nouveau is a decorative art style that flourished between 1890 and 1910, characterized by flowing, organic lines and patterns inspired by nature.',
    link: 'https://en.wikipedia.org/wiki/Art_Nouveau',
  },
  {
    title: 'R&B',
    description:
      'Rhythm and blues (R&B) is a genre of popular African-American music that originated in the 1940s. It combines elements of jazz, blues, and gospel.',
    link: 'https://en.wikipedia.org/wiki/Rhythm_and_blues',
  },
  {
    title: 'Post-Impressionism',
    description:
      'Post-Impressionism is an art movement that followed Impressionism, emphasizing more symbolic content and structure. Artists like Vincent van Gogh and Paul Cézanne are central figures.',
    link: 'https://en.wikipedia.org/wiki/Post-Impressionism',
  },
  {
    title: 'Ska',
    description:
      'Ska is a music genre that originated in Jamaica in the late 1950s, blending Caribbean mento and calypso with American jazz and rhythm and blues.',
    link: 'https://en.wikipedia.org/wiki/Ska',
  },
  {
    title: 'Neo-Classicism',
    description:
      'Neo-Classicism is an art and architecture movement of the late 18th and early 19th centuries that drew inspiration from the classical art and culture of ancient Greece and Rome.',
    link: 'https://en.wikipedia.org/wiki/Neoclassicism',
  },
  {
    title: 'Punk Rock',
    description:
      'Punk rock is a music genre that emerged in the 1970s, characterized by its fast, loud, and aggressive style, often with politically charged lyrics.',
    link: 'https://en.wikipedia.org/wiki/Punk_rock',
  },
  {
    title: 'Gothic Art',
    description:
      'Gothic art, which flourished from the 12th to the 16th centuries, is characterized by its detailed and ornate style, particularly in architecture, like the famous Notre-Dame Cathedral.',
    link: 'https://en.wikipedia.org/wiki/Gothic_art',
  },
  {
    title: 'Soul Music',
    description:
      'Soul music originated in the U.S. in the late 1950s, combining elements of African-American gospel music, rhythm and blues, and jazz. Artists like Aretha Franklin popularized the genre.',
    link: 'https://en.wikipedia.org/wiki/Soul_music',
  },
  {
    title: 'Modernism',
    description:
      'Modernism in art refers to a broad movement that broke away from traditional forms and emphasized innovation and experimentation. Artists like Pablo Picasso led this shift.',
    link: 'https://en.wikipedia.org/wiki/Modernism',
  },
  {
    title: 'Heavy Metal',
    description:
      'Heavy metal is a genre of rock music that developed in the late 1960s and early 1970s, characterized by loud, aggressive sound, and themes often associated with rebellion.',
    link: 'https://en.wikipedia.org/wiki/Heavy_metal_music',
  },
  {
    title: 'Romanticism (Art)',
    description:
      'Romanticism in art focused on strong emotion, the beauty of nature, and individualism, emerging in the late 18th century. Artists like Francisco Goya were influential.',
    link: 'https://en.wikipedia.org/wiki/Romanticism',
  },
  {
    title: 'Country Music',
    description:
      'Country music is a genre that originated in the Southern U.S. in the 1920s, blending folk, blues, and Western music. It is known for its storytelling and acoustic instruments.',
    link: 'https://en.wikipedia.org/wiki/Country_music',
  },
  {
    title: 'Art Deco',
    description:
      'Art Deco is a decorative art style that emerged in the 1920s and 1930s, characterized by bold geometric shapes, luxurious materials, and a sense of modernity.',
    link: 'https://en.wikipedia.org/wiki/Art_Deco',
  },
  {
    title: 'Grunge',
    description:
      "Grunge is a subgenre of alternative rock that emerged in the 1980s and gained popularity in the 1990s. It's known for its distorted guitar sound and themes of alienation.",
    link: 'https://en.wikipedia.org/wiki/Grunge',
  },
  {
    title: 'Rococo',
    description:
      'Rococo is an 18th-century artistic movement and style, particularly in France, that is characterized by lightness, elegance, and an exuberant use of natural forms and curves.',
    link: 'https://en.wikipedia.org/wiki/Rococo',
  },
  {
    title: 'Latin Music',
    description:
      'Latin music encompasses various styles from Latin America, including salsa, merengue, and reggaeton. It is known for its lively rhythms and danceable beats.',
    link: 'https://en.wikipedia.org/wiki/Latin_music',
  },
  {
    title: 'Symbolism (Art)',
    description:
      'Symbolism is an art movement that emerged in the late 19th century, focusing on expressing mystical or emotional experiences through symbolic imagery. Gustave Moreau is a key figure.',
    link: 'https://en.wikipedia.org/wiki/Symbolism_(arts)',
  },
  {
    title: 'House Music',
    description:
      'House music is a genre of electronic dance music that originated in Chicago in the early 1980s. It is known for its repetitive 4/4 beat and synthesized basslines.',
    link: 'https://en.wikipedia.org/wiki/House_music',
  },
  {
    title: 'Constructivism (Art)',
    description:
      'Constructivism is an artistic and architectural movement that emerged in Russia in the early 20th century, focusing on abstract and geometric forms to serve practical and social purposes.',
    link: 'https://en.wikipedia.org/wiki/Constructivism_(art)',
  },
  {
    title: 'New Wave',
    description:
      'New wave is a genre of rock music that became popular in the late 1970s and early 1980s, incorporating elements of punk rock, electronic music, and pop.',
    link: 'https://en.wikipedia.org/wiki/New_wave_music',
  },
  {
    title: 'De Stijl',
    description:
      'De Stijl is a Dutch art movement founded in 1917, characterized by a reduction to essential forms and colors, often using geometric abstraction. Piet Mondrian is a prominent figure.',
    link: 'https://en.wikipedia.org/wiki/De_Stijl',
  },
];

export default artAndMusic;
