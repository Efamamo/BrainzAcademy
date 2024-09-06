const politicsTopics = [
  {
    title: 'Democracy',
    description:
      'Democracy is a system of government where citizens exercise power by voting. It is based on the principle of majority rule and the protection of minority rights.',
    link: 'https://en.wikipedia.org/wiki/Democracy',
  },
  {
    title: 'Republic',
    description:
      'A republic is a form of government where the country is considered a public matter, and the head of state is elected, rather than being a monarch.',
    link: 'https://en.wikipedia.org/wiki/Republic',
  },
  {
    title: 'Constitution',
    description:
      'A constitution is a set of fundamental principles or established precedents according to which a state or organization is governed. It outlines the rights of citizens and the structure of government.',
    link: 'https://en.wikipedia.org/wiki/Constitution',
  },
  {
    title: 'Separation of Powers',
    description:
      'The separation of powers is a political doctrine that divides the responsibilities of government into distinct branches to prevent any one branch from gaining too much power. These typically include the executive, legislative, and judicial branches.',
    link: 'https://en.wikipedia.org/wiki/Separation_of_powers',
  },
  {
    title: 'Federalism',
    description:
      'Federalism is a system of government in which power is divided between a central authority and constituent political units, like states or provinces.',
    link: 'https://en.wikipedia.org/wiki/Federalism',
  },
  {
    title: 'Monarchy',
    description:
      'A monarchy is a form of government in which a single person, the monarch, rules for life or until abdication. Monarchies can be absolute or constitutional, depending on the powers held by the monarch.',
    link: 'https://en.wikipedia.org/wiki/Monarchy',
  },
  {
    title: 'Authoritarianism',
    description:
      'Authoritarianism is a form of government characterized by strong central power and limited political freedoms. It often includes the suppression of dissent and centralized control over the economy and civil society.',
    link: 'https://en.wikipedia.org/wiki/Authoritarianism',
  },
  {
    title: 'Socialism',
    description:
      'Socialism is a political and economic theory that advocates for collective or governmental ownership and administration of the means of production and distribution of goods.',
    link: 'https://en.wikipedia.org/wiki/Socialism',
  },
  {
    title: 'Communism',
    description:
      'Communism is a political and socioeconomic ideology that aims to establish a classless, stateless society where the means of production are owned and controlled by the community as a whole.',
    link: 'https://en.wikipedia.org/wiki/Communism',
  },
  {
    title: 'Capitalism',
    description:
      'Capitalism is an economic system in which private individuals or corporations own and operate the means of production and distribution of goods, driven by the profit motive.',
    link: 'https://en.wikipedia.org/wiki/Capitalism',
  },
  {
    title: 'Oligarchy',
    description:
      'Oligarchy is a form of power structure in which power effectively rests with a small number of people, often from the same socioeconomic class, political group, or family.',
    link: 'https://en.wikipedia.org/wiki/Oligarchy',
  },
  {
    title: 'Totalitarianism',
    description:
      'Totalitarianism is a system of government where the state holds total authority over society and seeks to control all aspects of public and private life.',
    link: 'https://en.wikipedia.org/wiki/Totalitarianism',
  },
  {
    title: 'Populism',
    description:
      'Populism is a political approach that seeks to appeal to ordinary people who feel that their concerns are disregarded by established elite groups. It is often characterized by anti-elitist rhetoric.',
    link: 'https://en.wikipedia.org/wiki/Populism',
  },
  {
    title: 'Liberalism',
    description:
      'Liberalism is a political ideology that emphasizes individual freedoms, democracy, and the protection of civil liberties, often advocating for free markets and limited government intervention.',
    link: 'https://en.wikipedia.org/wiki/Liberalism',
  },
  {
    title: 'Conservatism',
    description:
      'Conservatism is a political philosophy promoting traditional values, social stability, and continuity, often advocating for limited government and a free-market economy.',
    link: 'https://en.wikipedia.org/wiki/Conservatism',
  },
  {
    title: 'Anarchy',
    description:
      'Anarchy is a political philosophy that advocates self-managed, stateless societies based on voluntary cooperation and the rejection of all forms of involuntary authority.',
    link: 'https://en.wikipedia.org/wiki/Anarchism',
  },
  {
    title: 'Fascism',
    description:
      'Fascism is a far-right authoritarian political ideology that promotes nationalism, militarism, and the supremacy of the state or race, often characterized by dictatorial power and the suppression of opposition.',
    link: 'https://en.wikipedia.org/wiki/Fascism',
  },
  {
    title: 'Impeachment',
    description:
      'Impeachment is the process by which a legislative body levels charges against a government official. It does not necessarily result in removal from office but is a statement of charges.',
    link: 'https://en.wikipedia.org/wiki/Impeachment',
  },
  {
    title: 'Suffrage',
    description:
      "Suffrage refers to the right to vote in political elections. It is a fundamental democratic right, and movements for women's suffrage and universal suffrage have been pivotal in many countries.",
    link: 'https://en.wikipedia.org/wiki/Suffrage',
  },
  {
    title: 'The United Nations (UN)',
    description:
      'The United Nations is an international organization founded in 1945 to promote peace, security, and cooperation among member states. It is composed of various agencies and councils addressing global issues.',
    link: 'https://en.wikipedia.org/wiki/United_Nations',
  },
  {
    title: 'European Union (EU)',
    description:
      'The European Union is a political and economic union of 27 member states located primarily in Europe, aimed at promoting regional integration and cooperation.',
    link: 'https://en.wikipedia.org/wiki/European_Union',
  },
  {
    title: 'NATO',
    description:
      'The North Atlantic Treaty Organization (NATO) is a military alliance of 30 countries from Europe and North America, established in 1949 to promote collective defense against aggression.',
    link: 'https://en.wikipedia.org/wiki/NATO',
  },
  {
    title: 'Bipartisanship',
    description:
      "Bipartisanship refers to the agreement or cooperation between two political parties that usually oppose each other's policies, in order to pass legislation or address national issues.",
    link: 'https://en.wikipedia.org/wiki/Bipartisanship',
  },
  {
    title: 'Checks and Balances',
    description:
      'Checks and balances is a system in government where different branches have powers that can prevent one branch from dominating the others, ensuring a balance of power.',
    link: 'https://en.wikipedia.org/wiki/Checks_and_balances',
  },
  {
    title: 'Diplomacy',
    description:
      'Diplomacy is the practice of conducting negotiations between representatives of states or international organizations. It is used to manage international relations and resolve conflicts peacefully.',
    link: 'https://en.wikipedia.org/wiki/Diplomacy',
  },
  {
    title: 'Political Parties',
    description:
      'Political parties are organized groups of people who share similar political beliefs and work together to influence government policy and elections.',
    link: 'https://en.wikipedia.org/wiki/Political_party',
  },
  {
    title: 'Lobbying',
    description:
      'Lobbying is the act of attempting to influence legislators or other public officials to enact or reject legislation or policy.',
    link: 'https://en.wikipedia.org/wiki/Lobbying',
  },
  {
    title: 'Judicial Review',
    description:
      'Judicial review is the power of courts to assess whether a law, policy, or action is in accordance with the constitution or legal principles.',
    link: 'https://en.wikipedia.org/wiki/Judicial_review',
  },
  {
    title: 'Civil Rights',
    description:
      'Civil rights are the rights of citizens to political and social freedom and equality, including the right to vote, freedom of speech, and protection from discrimination.',
    link: 'https://en.wikipedia.org/wiki/Civil_rights',
  },
  {
    title: 'Human Rights',
    description:
      'Human rights are fundamental rights and freedoms to which all people are entitled, regardless of nationality, ethnicity, or religion, including the right to life, freedom, and dignity.',
    link: 'https://en.wikipedia.org/wiki/Human_rights',
  },
  {
    title: 'Elections',
    description:
      'Elections are a formal decision-making process by which a population chooses individuals to hold public office, often through voting.',
    link: 'https://en.wikipedia.org/wiki/Election',
  },
  {
    title: 'Political Ideology',
    description:
      'Political ideology is a set of beliefs or principles about the organization of society and the role of government, influencing political behavior and policy.',
    link: 'https://en.wikipedia.org/wiki/Political_ideology',
  },
  {
    title: 'Political Spectrum',
    description:
      'The political spectrum is a system for classifying political positions, ideologies, and parties along a continuum from left to right, often based on economic and social policies.',
    link: 'https://en.wikipedia.org/wiki/Political_spectrum',
  },
  {
    title: "Coup d'état",
    description:
      "A coup d'état is a sudden, illegal overthrow of a government, often carried out by a small group of people in positions of power or military force.",
    link: 'https://en.wikipedia.org/wiki/Coup_d%27%C3%A9tat',
  },
  {
    title: 'Referendum',
    description:
      'A referendum is a direct vote by the electorate on a specific proposal, often involving a change in the constitution or important policy decision.',
    link: 'https://en.wikipedia.org/wiki/Referendum',
  },
  {
    title: 'Gerrymandering',
    description:
      'Gerrymandering is the manipulation of electoral district boundaries to favor one political party or group, often leading to unfair representation.',
    link: 'https://en.wikipedia.org/wiki/Gerrymandering',
  },
  {
    title: 'Political Campaign',
    description:
      'A political campaign is an organized effort by a candidate or political party to influence voters and win elections through speeches, advertisements, and other activities.',
    link: 'https://en.wikipedia.org/wiki/Political_campaign',
  },
  {
    title: 'Public Policy',
    description:
      'Public policy refers to the decisions and actions taken by governments to address societal issues, including laws, regulations, and programs.',
    link: 'https://en.wikipedia.org/wiki/Public_policy',
  },
  {
    title: 'Political Corruption',
    description:
      'Political corruption involves the abuse of power by public officials for personal gain, including bribery, nepotism, and embezzlement.',
    link: 'https://en.wikipedia.org/wiki/Political_corruption',
  },
  {
    title: 'State Sovereignty',
    description:
      'State sovereignty refers to the concept that a state has supreme authority and independence over its own territory and domestic affairs without external interference.',
    link: 'https://en.wikipedia.org/wiki/Sovereignty',
  },
];

export default politicsTopics;
