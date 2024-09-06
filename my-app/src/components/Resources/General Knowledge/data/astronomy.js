const astronomyTopics = [
  {
    title: 'The Big Bang Theory',
    description:
      'The leading explanation of how the universe began, suggesting it started from a singular point and expanded over billions of years.',
    link: 'https://en.wikipedia.org/wiki/Big_Bang',
  },
  {
    title: 'Black Holes',
    description:
      'Regions of space where gravity is so strong that nothing, not even light, can escape from them. They are formed when massive stars collapse.',
    link: 'https://en.wikipedia.org/wiki/Black_hole',
  },
  {
    title: 'Dark Matter',
    description:
      "An unknown substance that makes up about 85% of the universe's matter, detectable only through its gravitational effects.",
    link: 'https://en.wikipedia.org/wiki/Dark_matter',
  },
  {
    title: 'Dark Energy',
    description:
      'A mysterious force believed to be causing the accelerated expansion of the universe.',
    link: 'https://en.wikipedia.org/wiki/Dark_energy',
  },
  {
    title: 'The Milky Way',
    description:
      'Our home galaxy, a barred spiral galaxy that contains our solar system along with billions of stars.',
    link: 'https://en.wikipedia.org/wiki/Milky_Way',
  },
  {
    title: 'Exoplanets',
    description:
      'Planets that orbit stars outside of our solar system. Thousands of exoplanets have been discovered since the 1990s.',
    link: 'https://en.wikipedia.org/wiki/Exoplanet',
  },
  {
    title: 'Pulsars',
    description:
      'Highly magnetized, rotating neutron stars that emit beams of electromagnetic radiation.',
    link: 'https://en.wikipedia.org/wiki/Pulsar',
  },
  {
    title: 'The Solar System',
    description:
      'The collection of planets, moons, and other celestial bodies that orbit our Sun, including Earth, Mars, and Jupiter.',
    link: 'https://en.wikipedia.org/wiki/Solar_System',
  },
  {
    title: 'The Kuiper Belt',
    description:
      'A region of the solar system beyond Neptune, filled with icy bodies and dwarf planets like Pluto.',
    link: 'https://en.wikipedia.org/wiki/Kuiper_belt',
  },
  {
    title: 'Comets',
    description:
      'Icy celestial bodies that originate from the outer solar system and develop tails when they approach the Sun.',
    link: 'https://en.wikipedia.org/wiki/Comet',
  },
  {
    title: 'Asteroids',
    description:
      'Small rocky bodies orbiting the Sun, primarily found in the asteroid belt between Mars and Jupiter.',
    link: 'https://en.wikipedia.org/wiki/Asteroid',
  },
  {
    title: 'The Hubble Space Telescope',
    description:
      'A space-based observatory launched in 1990 that has provided some of the clearest images of distant galaxies and nebulae.',
    link: 'https://en.wikipedia.org/wiki/Hubble_Space_Telescope',
  },
  {
    title: 'The James Webb Space Telescope',
    description:
      'The most powerful space telescope ever launched, designed to study the formation of stars and galaxies.',
    link: 'https://en.wikipedia.org/wiki/James_Webb_Space_Telescope',
  },
  {
    title: 'Supernovae',
    description:
      'Explosions of massive stars at the end of their life cycles, often outshining entire galaxies for short periods.',
    link: 'https://en.wikipedia.org/wiki/Supernova',
  },
  {
    title: 'Neutron Stars',
    description:
      'The collapsed core of a massive star that remains after a supernova, composed almost entirely of neutrons.',
    link: 'https://en.wikipedia.org/wiki/Neutron_star',
  },
  {
    title: 'Red Giants',
    description:
      'A phase in a star’s life when it expands and cools after exhausting its hydrogen fuel, often becoming a hundred times larger than its original size.',
    link: 'https://en.wikipedia.org/wiki/Red_giant',
  },
  {
    title: 'The Oort Cloud',
    description:
      'A theoretical cloud of icy bodies surrounding the solar system, believed to be the source of long-period comets.',
    link: 'https://en.wikipedia.org/wiki/Oort_cloud',
  },
  {
    title: 'Cosmic Microwave Background',
    description:
      'The afterglow radiation from the Big Bang, offering a glimpse into the early universe.',
    link: 'https://en.wikipedia.org/wiki/Cosmic_microwave_background',
  },
  {
    title: 'Gamma-Ray Bursts',
    description:
      'Extremely energetic explosions in distant galaxies, believed to be the result of collapsing stars or merging neutron stars.',
    link: 'https://en.wikipedia.org/wiki/Gamma-ray_burst',
  },
  {
    title: 'The Andromeda Galaxy',
    description:
      'The closest spiral galaxy to the Milky Way, on a collision course with our galaxy in about 4.5 billion years.',
    link: 'https://en.wikipedia.org/wiki/Andromeda_Galaxy',
  },
  {
    title: 'Quasars',
    description:
      'Bright, active galactic nuclei powered by supermassive black holes, visible from billions of light-years away.',
    link: 'https://en.wikipedia.org/wiki/Quasar',
  },
  {
    title: 'White Dwarfs',
    description:
      'The remains of medium-sized stars like our Sun, left behind after they shed their outer layers.',
    link: 'https://en.wikipedia.org/wiki/White_dwarf',
  },
  {
    title: 'Binary Star Systems',
    description:
      'Two stars that orbit around a common center of mass, bound by their mutual gravitational attraction.',
    link: 'https://en.wikipedia.org/wiki/Binary_star',
  },
  {
    title: 'Solar Flares',
    description:
      'Sudden eruptions of radiation from the Sun’s surface, caused by magnetic energy being released.',
    link: 'https://en.wikipedia.org/wiki/Solar_flare',
  },
  {
    title: 'Planetary Nebulae',
    description:
      'Expanding shells of ionized gas ejected by red giant stars as they transition into white dwarfs.',
    link: 'https://en.wikipedia.org/wiki/Planetary_nebula',
  },
  {
    title: 'The Event Horizon',
    description:
      'The boundary around a black hole beyond which no light or information can escape.',
    link: 'https://en.wikipedia.org/wiki/Event_horizon',
  },
  {
    title: 'Gravitational Waves',
    description:
      'Ripples in spacetime caused by the acceleration of massive objects, such as merging black holes.',
    link: 'https://en.wikipedia.org/wiki/Gravitational_wave',
  },
  {
    title: 'Star Formation',
    description:
      'The process by which dense regions within molecular clouds in space collapse and form stars.',
    link: 'https://en.wikipedia.org/wiki/Star_formation',
  },
  {
    title: 'The Hertzsprung-Russell Diagram',
    description:
      'A graph that shows the relationship between the luminosity and temperature of stars, used to classify stars.',
    link: 'https://en.wikipedia.org/wiki/Hertzsprung%E2%80%93Russell_diagram',
  },
  {
    title: 'Tidal Forces',
    description:
      "The gravitational interaction between celestial bodies, causing stretching and squeezing effects. Earth's tides are a common example.",
    link: 'https://en.wikipedia.org/wiki/Tidal_force',
  },
  {
    title: 'Light Years',
    description:
      'A unit of distance in astronomy, equal to the distance light travels in one year, about 9.46 trillion kilometers.',
    link: 'https://en.wikipedia.org/wiki/Light-year',
  },
  {
    title: 'Super-Earths',
    description:
      "A class of exoplanets with masses larger than Earth's but significantly smaller than Uranus or Neptune.",
    link: 'https://en.wikipedia.org/wiki/Super-Earth',
  },
  {
    title: 'Rogue Planets',
    description:
      'Planets that do not orbit a star but instead wander freely through space.',
    link: 'https://en.wikipedia.org/wiki/Rogue_planet',
  },
  {
    title: 'Brown Dwarfs',
    description:
      'Objects too large to be called planets but too small to sustain the nuclear fusion that powers stars.',
    link: 'https://en.wikipedia.org/wiki/Brown_dwarf',
  },
  {
    title: 'The Drake Equation',
    description:
      'An equation used to estimate the number of active, communicative extraterrestrial civilizations in the Milky Way.',
    link: 'https://en.wikipedia.org/wiki/Drake_equation',
  },
  {
    title: 'The Fermi Paradox',
    description:
      'The apparent contradiction between the high probability of extraterrestrial civilizations and the lack of evidence for them.',
    link: 'https://en.wikipedia.org/wiki/Fermi_paradox',
  },
  {
    title: 'The Goldilocks Zone',
    description:
      'The region around a star where conditions might be just right for liquid water to exist, crucial for life as we know it.',
    link: 'https://en.wikipedia.org/wiki/Circumstellar_habitable_zone',
  },
  {
    title: 'The Multiverse Theory',
    description:
      'The idea that our universe may be just one of many universes, each with different laws of physics.',
    link: 'https://en.wikipedia.org/wiki/Multiverse',
  },
  {
    title: 'Heliopause',
    description:
      'The boundary of the solar system where the solar wind is stopped by the interstellar medium.',
    link: 'https://en.wikipedia.org/wiki/Heliopause_(astronomy)',
  },
  {
    title: 'Solar Wind',
    description:
      'A stream of charged particles released from the Sun’s upper atmosphere, influencing space weather and auroras on Earth.',
    link: 'https://en.wikipedia.org/wiki/Solar_wind',
  },
  {
    title: 'The Troposphere',
    description:
      "The lowest layer of Earth's atmosphere, where weather occurs and where most of the atmosphere's mass is located.",
    link: 'https://en.wikipedia.org/wiki/Troposphere',
  },
  {
    title: 'The Great Red Spot',
    description:
      'A massive, persistent high-pressure region on Jupiter, causing a storm larger than Earth.',
    link: 'https://en.wikipedia.org/wiki/Great_Red_Spot',
  },
  {
    title: 'The Moon Landing',
    description:
      'The 1969 Apollo 11 mission in which astronauts Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon.',
    link: 'https://en.wikipedia.org/wiki/Moon_landing',
  },
  {
    title: 'SETI',
    description:
      'The Search for Extraterrestrial Intelligence, a scientific effort to detect signals from alien civilizations.',
    link: 'https://en.wikipedia.org/wiki/SETI',
  },
  {
    title: 'Space Elevators',
    description:
      "A theoretical transportation system that would connect Earth's surface to space using a tether.",
    link: 'https://en.wikipedia.org/wiki/Space_elevator',
  },
  {
    title: 'Terraforming',
    description:
      "The process of modifying a planet's environment to make it habitable for Earth-like life.",
    link: 'https://en.wikipedia.org/wiki/Terraforming',
  },
  {
    title: 'Voyager Probes',
    description:
      'Two space probes launched in 1977 to study the outer planets and now traveling beyond the solar system.',
    link: 'https://en.wikipedia.org/wiki/Voyager_program',
  },
];

export default astronomyTopics;
