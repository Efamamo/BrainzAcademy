const mythologyAndReligionTopics = [
  {
    title: 'Greek Mythology',
    description:
      'A body of myths and teachings that belong to the ancient Greeks, concerning their gods, heroes, and the nature of the world.',
    link: 'https://en.wikipedia.org/wiki/Greek_mythology',
  },
  {
    title: 'Norse Mythology',
    description:
      'The mythology of the North Germanic peoples, involving gods like Odin, Thor, and Loki, and the cosmology of Asgard, Midgard, and the nine realms.',
    link: 'https://en.wikipedia.org/wiki/Norse_mythology',
  },
  {
    title: 'Hindu Mythology',
    description:
      'A vast collection of narratives found in the ancient Vedic scriptures of India, featuring deities like Vishnu, Shiva, and Brahma.',
    link: 'https://en.wikipedia.org/wiki/Hindu_mythology',
  },
  {
    title: 'Egyptian Mythology',
    description:
      'The myths and religious beliefs of ancient Egypt, featuring gods such as Ra, Osiris, Isis, and Anubis, and the story of the afterlife.',
    link: 'https://en.wikipedia.org/wiki/Egyptian_mythology',
  },
  {
    title: 'Roman Mythology',
    description:
      'A set of stories about the gods, goddesses, and heroes of ancient Rome, heavily influenced by Greek mythology, featuring deities like Jupiter and Mars.',
    link: 'https://en.wikipedia.org/wiki/Roman_mythology',
  },
  {
    title: 'Christianity',
    description:
      'A monotheistic religion based on the life and teachings of Jesus Christ, emphasizing faith in God, salvation, and the Bible as its sacred text.',
    link: 'https://en.wikipedia.org/wiki/Christianity',
  },
  {
    title: 'Islam',
    description:
      'A monotheistic religion revealed by the prophet Muhammad, with the Quran as its holy book, focusing on submission to the will of Allah.',
    link: 'https://en.wikipedia.org/wiki/Islam',
  },
  {
    title: 'Judaism',
    description:
      'One of the oldest monotheistic religions, centered on the covenant between God and the people of Israel, with the Torah as its foundational text.',
    link: 'https://en.wikipedia.org/wiki/Judaism',
  },
  {
    title: 'Buddhism',
    description:
      'A spiritual tradition based on the teachings of Siddhartha Gautama (Buddha), emphasizing the path to enlightenment through meditation and ethical conduct.',
    link: 'https://en.wikipedia.org/wiki/Buddhism',
  },
  {
    title: 'Celtic Mythology',
    description:
      'The mythology of the ancient Celts, featuring gods like Dagda and Brigid, and tales of magical creatures like fairies, leprechauns, and banshees.',
    link: 'https://en.wikipedia.org/wiki/Celtic_mythology',
  },
  {
    title: 'Aztec Mythology',
    description:
      'The beliefs of the ancient Aztecs, featuring gods like Quetzalcoatl and Huitzilopochtli, and creation stories involving the five suns.',
    link: 'https://en.wikipedia.org/wiki/Aztec_mythology',
  },
  {
    title: 'Shinto',
    description:
      'The indigenous religion of Japan, centered on the worship of kami (spirits) and emphasizing rituals to honor nature and ancestors.',
    link: 'https://en.wikipedia.org/wiki/Shinto',
  },
  {
    title: 'Taoism',
    description:
      'A Chinese philosophy and religion focused on living in harmony with the Tao, the fundamental principle that is the source of all existence.',
    link: 'https://en.wikipedia.org/wiki/Taoism',
  },
  {
    title: 'Native American Mythology',
    description:
      'A diverse set of myths and spiritual beliefs from indigenous peoples of the Americas, often focusing on nature, creation stories, and animal spirits.',
    link: 'https://en.wikipedia.org/wiki/Native_American_mythology',
  },
  {
    title: 'Zoroastrianism',
    description:
      "One of the world's oldest monotheistic religions, founded by the prophet Zoroaster in ancient Persia, emphasizing the duality of good and evil.",
    link: 'https://en.wikipedia.org/wiki/Zoroastrianism',
  },
  {
    title: 'Sumerian Mythology',
    description:
      'The mythology of ancient Sumer, featuring gods like Anu, Enlil, and Inanna, and creation myths involving the god Marduk and the Tigris-Euphrates rivers.',
    link: 'https://en.wikipedia.org/wiki/Sumerian_mythology',
  },
  {
    title: 'Confucianism',
    description:
      'A philosophical and ethical system based on the teachings of Confucius, emphasizing family loyalty, social harmony, and the cultivation of virtue.',
    link: 'https://en.wikipedia.org/wiki/Confucianism',
  },
  {
    title: 'Jainism',
    description:
      "An ancient Indian religion that promotes non-violence, truth, and asceticism, with teachings focusing on the soul's liberation from karma.",
    link: 'https://en.wikipedia.org/wiki/Jainism',
  },
  {
    title: 'Mayan Mythology',
    description:
      'The mythology of the ancient Maya civilization, featuring gods like Kukulkan and Ix Chel, and tales of the Popol Vuh creation myth.',
    link: 'https://en.wikipedia.org/wiki/Maya_mythology',
  },
  {
    title: 'Sikhism',
    description:
      'A monotheistic religion founded in Punjab by Guru Nanak, emphasizing devotion to one God, equality, and community service.',
    link: 'https://en.wikipedia.org/wiki/Sikhism',
  },
  {
    title: 'Greek Pantheon',
    description:
      'A collection of gods and goddesses from Greek mythology, each governing different aspects of the world, such as Zeus (sky), Poseidon (sea), and Hades (underworld).',
    link: 'https://en.wikipedia.org/wiki/Greek_gods',
  },
  {
    title: 'Vedic Religion',
    description:
      'The ancient religion of the Indo-Aryans, based on the Vedas, focusing on rituals and the worship of deities like Agni and Indra.',
    link: 'https://en.wikipedia.org/wiki/Vedic_religion',
  },
  {
    title: 'Manichaeism',
    description:
      'An ancient gnostic religion founded by the prophet Mani, blending elements of Christianity, Zoroastrianism, and Buddhism.',
    link: 'https://en.wikipedia.org/wiki/Manichaeism',
  },
  {
    title: 'Wicca',
    description:
      'A modern pagan religious movement that draws upon ancient pagan practices, focusing on witchcraft, nature worship, and reverence for the divine feminine.',
    link: 'https://en.wikipedia.org/wiki/Wicca',
  },
  {
    title: 'Anubis',
    description:
      'An ancient Egyptian god associated with mummification and the afterlife, often depicted as a man with the head of a jackal.',
    link: 'https://en.wikipedia.org/wiki/Anubis',
  },
  {
    title: 'The Bhagavad Gita',
    description:
      'A 700-verse Hindu scripture that is part of the Mahabharata, where Krishna imparts spiritual wisdom to the prince Arjuna.',
    link: 'https://en.wikipedia.org/wiki/Bhagavad_Gita',
  },
  {
    title: 'Avalokiteshvara',
    description:
      'A bodhisattva who embodies the compassion of all Buddhas in Mahayana Buddhism, known for his vow to assist all sentient beings.',
    link: 'https://en.wikipedia.org/wiki/Avalokiteshvara',
  },
  {
    title: 'Yggdrasil',
    description:
      'In Norse mythology, the immense, sacred tree connecting the nine worlds, central to the cosmology and lore of the Norse gods.',
    link: 'https://en.wikipedia.org/wiki/Yggdrasil',
  },
  {
    title: 'Kabbalah',
    description:
      'A form of Jewish mysticism that explores the nature of God, the universe, and the soul, often focusing on the Tree of Life.',
    link: 'https://en.wikipedia.org/wiki/Kabbalah',
  },
  {
    title: 'Lilith',
    description:
      "A figure in Jewish mythology, sometimes depicted as Adam's first wife, who was cast out of Eden and became a demon.",
    link: 'https://en.wikipedia.org/wiki/Lilith',
  },
  {
    title: 'Moksha',
    description:
      'In Hinduism and Jainism, the liberation of the soul from the cycle of birth, death, and rebirth (samsara), leading to ultimate freedom.',
    link: 'https://en.wikipedia.org/wiki/Moksha',
  },
  {
    title: 'Olympian Gods',
    description:
      'The twelve major deities of the Greek pantheon who resided on Mount Olympus, including Zeus, Hera, Apollo, and Athena.',
    link: 'https://en.wikipedia.org/wiki/Twelve_Olympians',
  },
  {
    title: 'Heaven and Hell',
    description:
      'In many religious traditions, Heaven is the realm of divine beings and the blessed dead, while Hell is a place of punishment for sinners.',
    link: 'https://en.wikipedia.org/wiki/Heaven',
  },
  {
    title: 'The Quran',
    description:
      'The holy book of Islam, believed to be the word of God as revealed to the prophet Muhammad, providing guidance for all aspects of life.',
    link: 'https://en.wikipedia.org/wiki/Quran',
  },
  {
    title: 'The Upanishads',
    description:
      'Ancient Hindu texts that explore the nature of reality, the self, and ultimate truth, forming the philosophical basis for much of Hindu thought.',
    link: 'https://en.wikipedia.org/wiki/Upanishads',
  },
  {
    title: 'The Tao Te Ching',
    description:
      'A foundational text of Taoism, traditionally attributed to Laozi, that offers wisdom on the nature of the Tao and how to live in harmony with it.',
    link: 'https://en.wikipedia.org/wiki/Tao_Te_Ching',
  },
  {
    title: 'Thor',
    description:
      'A major deity in Norse mythology, known as the god of thunder, protector of humanity, and wielder of the magical hammer Mjölnir.',
    link: 'https://en.wikipedia.org/wiki/Thor',
  },
  {
    title: 'Ganesh',
    description:
      'A widely revered Hindu god with an elephant head, representing wisdom, new beginnings, and the removal of obstacles.',
    link: 'https://en.wikipedia.org/wiki/Ganesha',
  },
  {
    title: 'The Bhagavad Gita',
    description:
      'A sacred Hindu text where the god Krishna imparts moral and spiritual guidance to the warrior prince Arjuna on the battlefield.',
    link: 'https://en.wikipedia.org/wiki/Bhagavad_Gita',
  },
  {
    title: 'Ziggurats',
    description:
      'Massive structures built in ancient Mesopotamia, serving as religious temples where gods were believed to dwell, such as the Ziggurat of Ur.',
    link: 'https://en.wikipedia.org/wiki/Ziggurat',
  },
  {
    title: 'Asgard',
    description:
      'In Norse mythology, the realm of the gods, ruled by Odin, connected to the human world by the Bifrost, a rainbow bridge.',
    link: 'https://en.wikipedia.org/wiki/Asgard',
  },
  {
    title: 'Orisha',
    description:
      'Spiritual beings in Yoruba religion, associated with various natural forces and human experiences, worshiped in West Africa and the Americas.',
    link: 'https://en.wikipedia.org/wiki/Orisha',
  },
  {
    title: 'Tlaloc',
    description:
      'The Aztec god of rain and fertility, responsible for providing life-giving water but also capable of unleashing destructive storms.',
    link: 'https://en.wikipedia.org/wiki/Tlaloc',
  },
  {
    title: 'Druids',
    description:
      'Priests in ancient Celtic societies, responsible for religious rituals, legal matters, and philosophy, often associated with nature and magic.',
    link: 'https://en.wikipedia.org/wiki/Druid',
  },
  {
    title: 'Valhalla',
    description:
      'In Norse mythology, the hall of the slain warriors, ruled by Odin, where those who die in battle are taken to prepare for Ragnarok.',
    link: 'https://en.wikipedia.org/wiki/Valhalla',
  },
  {
    title: 'The Vedas',
    description:
      'The oldest sacred texts of Hinduism, composed in ancient Sanskrit, containing hymns, prayers, and rituals for various deities.',
    link: 'https://en.wikipedia.org/wiki/Vedas',
  },
];

export default mythologyAndReligionTopics;
