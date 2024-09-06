const environmentalScienceTopics = [
  {
    title: 'Climate Change',
    description:
      'The long-term alteration of temperature and weather patterns, largely driven by human activities like burning fossil fuels.',
    link: 'https://en.wikipedia.org/wiki/Climate_change',
  },
  {
    title: 'Global Warming',
    description:
      'The ongoing rise in global average temperature due to the increase of greenhouse gases in the atmosphere.',
    link: 'https://en.wikipedia.org/wiki/Global_warming',
  },
  {
    title: 'Greenhouse Effect',
    description:
      'A natural process where certain gases trap heat in Earth’s atmosphere, keeping the planet warm enough to support life.',
    link: 'https://en.wikipedia.org/wiki/Greenhouse_effect',
  },
  {
    title: 'Sustainability',
    description:
      'The practice of using resources in a way that meets present needs without compromising the ability of future generations to meet theirs.',
    link: 'https://en.wikipedia.org/wiki/Sustainability',
  },
  {
    title: 'Deforestation',
    description:
      'The large-scale removal of forests, often to clear land for agriculture or urban development, leading to loss of biodiversity.',
    link: 'https://en.wikipedia.org/wiki/Deforestation',
  },
  {
    title: 'Renewable Energy',
    description:
      'Energy generated from natural sources like sunlight, wind, and water, which are replenished over time.',
    link: 'https://en.wikipedia.org/wiki/Renewable_energy',
  },
  {
    title: 'Biodiversity',
    description:
      'The variety of plant and animal life in a particular habitat, essential for ecosystem resilience and human survival.',
    link: 'https://en.wikipedia.org/wiki/Biodiversity',
  },
  {
    title: 'Pollution',
    description:
      'The introduction of harmful substances or products into the environment, affecting air, water, and soil quality.',
    link: 'https://en.wikipedia.org/wiki/Pollution',
  },
  {
    title: 'Ecological Footprint',
    description:
      "A measure of the human demand on Earth's ecosystems, representing the amount of natural resources required to sustain a person or population.",
    link: 'https://en.wikipedia.org/wiki/Ecological_footprint',
  },
  {
    title: 'Ozone Layer Depletion',
    description:
      "The thinning of the Earth's ozone layer caused by the release of chemical compounds like CFCs, increasing UV radiation reaching the Earth.",
    link: 'https://en.wikipedia.org/wiki/Ozone_depletion',
  },
  {
    title: 'Water Scarcity',
    description:
      'A lack of sufficient available water resources to meet the demands of water usage within a region, affecting millions worldwide.',
    link: 'https://en.wikipedia.org/wiki/Water_scarcity',
  },
  {
    title: 'Coral Reef Bleaching',
    description:
      'The process where coral loses its color and vitality due to stress factors like warming water temperatures and pollution.',
    link: 'https://en.wikipedia.org/wiki/Coral_bleaching',
  },
  {
    title: 'Waste Management',
    description:
      'The collection, transportation, and disposal of garbage and other waste products, crucial for maintaining public health and the environment.',
    link: 'https://en.wikipedia.org/wiki/Waste_management',
  },
  {
    title: 'Endangered Species',
    description:
      'Species at risk of extinction due to habitat loss, climate change, and human activities, prompting conservation efforts.',
    link: 'https://en.wikipedia.org/wiki/Endangered_species',
  },
  {
    title: 'Carbon Footprint',
    description:
      'The total amount of greenhouse gases produced to support human activities, expressed as carbon dioxide equivalents.',
    link: 'https://en.wikipedia.org/wiki/Carbon_footprint',
  },
  {
    title: 'Soil Erosion',
    description:
      'The wearing away of the topsoil layer due to natural forces like wind and water, often exacerbated by human activities.',
    link: 'https://en.wikipedia.org/wiki/Soil_erosion',
  },
  {
    title: 'Urbanization',
    description:
      'The process of making an area more urban, which can lead to environmental issues such as habitat destruction and increased pollution.',
    link: 'https://en.wikipedia.org/wiki/Urbanization',
  },
  {
    title: 'Environmental Justice',
    description:
      'A movement that advocates for fair treatment of all people, regardless of race or income, concerning environmental laws and policies.',
    link: 'https://en.wikipedia.org/wiki/Environmental_justice',
  },
  {
    title: 'Acid Rain',
    description:
      'Rainfall made acidic by atmospheric pollution, which causes harm to the environment, particularly forests and aquatic systems.',
    link: 'https://en.wikipedia.org/wiki/Acid_rain',
  },
  {
    title: 'Overfishing',
    description:
      'The depletion of fish stocks due to excessive fishing, leading to imbalances in ocean ecosystems.',
    link: 'https://en.wikipedia.org/wiki/Overfishing',
  },
  {
    title: 'Desertification',
    description:
      'The process by which fertile land becomes desert, typically due to drought, deforestation, or inappropriate agriculture.',
    link: 'https://en.wikipedia.org/wiki/Desertification',
  },
  {
    title: 'Environmental Impact Assessment (EIA)',
    description:
      'A process used to evaluate the environmental effects of proposed developments before they are carried out.',
    link: 'https://en.wikipedia.org/wiki/Environmental_impact_assessment',
  },
  {
    title: 'Ecotourism',
    description:
      'Responsible travel to natural areas that conserves the environment and improves the well-being of local people.',
    link: 'https://en.wikipedia.org/wiki/Ecotourism',
  },
  {
    title: 'Conservation Biology',
    description:
      'The scientific study of protecting, managing, and restoring biodiversity and natural ecosystems.',
    link: 'https://en.wikipedia.org/wiki/Conservation_biology',
  },
  {
    title: 'Marine Pollution',
    description:
      'The introduction of harmful substances into the oceans, such as oil, plastic, and chemicals, affecting marine life and ecosystems.',
    link: 'https://en.wikipedia.org/wiki/Marine_pollution',
  },
  {
    title: 'Sustainable Agriculture',
    description:
      'Farming practices that aim to meet current food needs without compromising the ability of future generations to meet theirs.',
    link: 'https://en.wikipedia.org/wiki/Sustainable_agriculture',
  },
  {
    title: 'Wildlife Corridors',
    description:
      'Natural routes that allow wildlife to move freely between habitats, reducing the impact of human activity on ecosystems.',
    link: 'https://en.wikipedia.org/wiki/Wildlife_corridor',
  },
  {
    title: 'Air Pollution',
    description:
      'The presence of harmful substances in the air, such as particulate matter and gases, which can harm human health and the environment.',
    link: 'https://en.wikipedia.org/wiki/Air_pollution',
  },
  {
    title: 'Fracking',
    description:
      'A method of extracting natural gas from underground rock formations, often criticized for its environmental impacts, including water contamination.',
    link: 'https://en.wikipedia.org/wiki/Hydraulic_fracturing',
  },
  {
    title: 'Natural Disasters',
    description:
      'Catastrophic events like hurricanes, earthquakes, and floods that can be influenced by human activities and climate change.',
    link: 'https://en.wikipedia.org/wiki/Natural_disaster',
  },
  {
    title: 'Invasive Species',
    description:
      'Non-native species that spread rapidly in a new environment, often outcompeting native species and causing ecological harm.',
    link: 'https://en.wikipedia.org/wiki/Invasive_species',
  },
  {
    title: 'Environmental Degradation',
    description:
      'The deterioration of the environment through the depletion of natural resources such as air, water, and soil.',
    link: 'https://en.wikipedia.org/wiki/Environmental_degradation',
  },
  {
    title: 'Ocean Acidification',
    description:
      "The decrease in the pH of Earth's oceans caused by the uptake of carbon dioxide from the atmosphere.",
    link: 'https://en.wikipedia.org/wiki/Ocean_acidification',
  },
  {
    title: 'Eco-Friendly Products',
    description:
      'Products that are designed to reduce their environmental impact during production, use, and disposal.',
    link: 'https://en.wikipedia.org/wiki/Eco-friendly_product',
  },
  {
    title: 'Green Building',
    description:
      'Building design that reduces the environmental impact through energy efficiency, renewable materials, and sustainable practices.',
    link: 'https://en.wikipedia.org/wiki/Green_building',
  },
  {
    title: 'Carbon Sequestration',
    description:
      'The process of capturing and storing atmospheric carbon dioxide to mitigate or defer global warming.',
    link: 'https://en.wikipedia.org/wiki/Carbon_sequestration',
  },
  {
    title: 'Recycling',
    description:
      'The process of converting waste materials into new materials and objects to reduce waste and conserve resources.',
    link: 'https://en.wikipedia.org/wiki/Recycling',
  },
  {
    title: 'Environmental Ethics',
    description:
      'A branch of philosophy that studies the moral relationship of human beings to the environment and its non-human contents.',
    link: 'https://en.wikipedia.org/wiki/Environmental_ethics',
  },
  {
    title: 'Permaculture',
    description:
      'A set of design principles for creating sustainable and self-sufficient agricultural ecosystems modeled on natural systems.',
    link: 'https://en.wikipedia.org/wiki/Permaculture',
  },
  {
    title: 'Eutrophication',
    description:
      'The enrichment of an ecosystem with chemical nutrients, typically compounds containing nitrogen or phosphorus, leading to excessive plant growth and oxygen depletion.',
    link: 'https://en.wikipedia.org/wiki/Eutrophication',
  },
  {
    title: 'Conservation Tillage',
    description:
      'Farming methods that preserve soil structure and reduce erosion, helping to maintain soil health and productivity.',
    link: 'https://en.wikipedia.org/wiki/Conservation_tillage',
  },
  {
    title: 'Environmental Monitoring',
    description:
      'The systematic collection of data on environmental conditions, such as air and water quality, to track changes over time.',
    link: 'https://en.wikipedia.org/wiki/Environmental_monitoring',
  },
  {
    title: 'Hydroelectric Power',
    description:
      'Electricity produced by harnessing the energy of moving water, a key source of renewable energy.',
    link: 'https://en.wikipedia.org/wiki/Hydroelectricity',
  },
  {
    title: 'Plastic Pollution',
    description:
      'The accumulation of plastic objects and particles in the environment, particularly in oceans, harming wildlife and ecosystems.',
    link: 'https://en.wikipedia.org/wiki/Plastic_pollution',
  },
  {
    title: 'Forest Conservation',
    description:
      'Efforts to preserve and protect forest ecosystems, which are vital for biodiversity, climate regulation, and human livelihoods.',
    link: 'https://en.wikipedia.org/wiki/Forest_conservation',
  },
  {
    title: 'Microplastics',
    description:
      'Tiny plastic particles that result from the breakdown of larger plastic debris, contaminating water bodies and posing risks to marine life.',
    link: 'https://en.wikipedia.org/wiki/Microplastics',
  },
];

export default environmentalScienceTopics;
