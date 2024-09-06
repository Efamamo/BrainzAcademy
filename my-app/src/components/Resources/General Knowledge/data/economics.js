const economicsTopics = [
  {
    title: 'Supply and Demand',
    description:
      'Supply and demand are fundamental concepts in economics describing the relationship between the availability of a product and the desire for it, affecting prices and quantities sold.',
    link: 'https://en.wikipedia.org/wiki/Supply_and_demand',
  },
  {
    title: 'Inflation',
    description:
      'Inflation is the rate at which the general level of prices for goods and services rises, eroding purchasing power.',
    link: 'https://en.wikipedia.org/wiki/Inflation',
  },
  {
    title: 'Gross Domestic Product (GDP)',
    description:
      'GDP measures the total value of all goods and services produced in a country over a specific period, serving as a broad indicator of economic activity.',
    link: 'https://en.wikipedia.org/wiki/Gross_domestic_product',
  },
  {
    title: 'Unemployment Rate',
    description:
      'The unemployment rate is the percentage of the labor force that is unemployed and actively seeking employment.',
    link: 'https://en.wikipedia.org/wiki/Unemployment',
  },
  {
    title: 'Monetary Policy',
    description:
      "Monetary policy involves the management of a country's money supply and interest rates by its central bank to control inflation and stabilize the economy.",
    link: 'https://en.wikipedia.org/wiki/Monetary_policy',
  },
  {
    title: 'Fiscal Policy',
    description:
      'Fiscal policy refers to government spending and tax policies used to influence economic conditions, including aggregate demand and economic growth.',
    link: 'https://en.wikipedia.org/wiki/Fiscal_policy',
  },
  {
    title: 'Opportunity Cost',
    description:
      'Opportunity cost is the value of the next best alternative that is foregone when a decision is made to allocate resources to a particular choice.',
    link: 'https://en.wikipedia.org/wiki/Opportunity_cost',
  },
  {
    title: 'Market Economy',
    description:
      'A market economy is an economic system where decisions and the pricing of goods and services are guided by the interactions of citizens and businesses in the marketplace.',
    link: 'https://en.wikipedia.org/wiki/Market_economy',
  },
  {
    title: 'Command Economy',
    description:
      'In a command economy, central authorities or the government control economic activity, including production and distribution of goods and services.',
    link: 'https://en.wikipedia.org/wiki/Command_economy',
  },
  {
    title: 'Mixed Economy',
    description:
      'A mixed economy combines elements of market and command economies, with both private enterprise and government involvement in economic activities.',
    link: 'https://en.wikipedia.org/wiki/Mixed_economy',
  },
  {
    title: 'Perfect Competition',
    description:
      'Perfect competition is a theoretical market structure where many buyers and sellers compete, with no single participant having significant market power.',
    link: 'https://en.wikipedia.org/wiki/Perfect_competition',
  },
  {
    title: 'Monopoly',
    description:
      'A monopoly is a market structure where a single seller or provider dominates the entire market, often leading to higher prices and reduced consumer choice.',
    link: 'https://en.wikipedia.org/wiki/Monopoly',
  },
  {
    title: 'Oligopoly',
    description:
      'An oligopoly is a market structure dominated by a small number of firms, each of which can influence market prices and decisions.',
    link: 'https://en.wikipedia.org/wiki/Oligopoly',
  },
  {
    title: 'Game Theory',
    description:
      'Game theory is the study of mathematical models of strategic interaction among rational decision-makers.',
    link: 'https://en.wikipedia.org/wiki/Game_theory',
  },
  {
    title: 'Consumer Surplus',
    description:
      'Consumer surplus represents the difference between what consumers are willing to pay for a good or service and what they actually pay.',
    link: 'https://en.wikipedia.org/wiki/Consumer_surplus',
  },
  {
    title: 'Producer Surplus',
    description:
      'Producer surplus is the difference between what producers are willing to accept for a good or service and the actual price they receive.',
    link: 'https://en.wikipedia.org/wiki/Producer_surplus',
  },
  {
    title: 'Elasticity',
    description:
      'Elasticity measures how the quantity demanded or supplied of a good responds to changes in price or other economic variables.',
    link: 'https://en.wikipedia.org/wiki/Elasticity_(economics)',
  },
  {
    title: 'Externalities',
    description:
      'Externalities are the positive or negative effects of economic activities that affect third parties not directly involved in the transaction.',
    link: 'https://en.wikipedia.org/wiki/Externality',
  },
  {
    title: 'Public Goods',
    description:
      'Public goods are commodities or services that are made available to all members of society, typically funded through taxation, and are non-excludable and non-rivalrous.',
    link: 'https://en.wikipedia.org/wiki/Public_good',
  },
  {
    title: 'Fiscal Deficit',
    description:
      "A fiscal deficit occurs when a government's total expenditures exceed its total revenues, excluding borrowing.",
    link: 'https://en.wikipedia.org/wiki/Fiscal_deficit',
  },
  {
    title: 'National Debt',
    description:
      "National debt is the total amount of money that a country's government has borrowed, typically through issuing bonds or other financial instruments.",
    link: 'https://en.wikipedia.org/wiki/National_debt',
  },
  {
    title: 'Balance of Trade',
    description:
      "The balance of trade is the difference between the value of a country's exports and imports of goods and services.",
    link: 'https://en.wikipedia.org/wiki/Balance_of_trade',
  },
  {
    title: 'Exchange Rates',
    description:
      'Exchange rates are the rates at which one currency can be exchanged for another, influencing international trade and investment.',
    link: 'https://en.wikipedia.org/wiki/Exchange_rate',
  },
  {
    title: 'Interest Rates',
    description:
      'Interest rates represent the cost of borrowing money or the return on savings, set by central banks and influencing economic activity.',
    link: 'https://en.wikipedia.org/wiki/Interest_rate',
  },
  {
    title: 'Monetary Base',
    description:
      "The monetary base, also known as high-powered money, includes the total of a country's physical currency plus reserves held by the central bank.",
    link: 'https://en.wikipedia.org/wiki/Monetary_base',
  },
  {
    title: 'Central Bank',
    description:
      "A central bank is a national institution responsible for managing a country's currency, money supply, and interest rates, and often plays a key role in economic policy.",
    link: 'https://en.wikipedia.org/wiki/Central_bank',
  },
  {
    title: 'Quantitative Easing',
    description:
      'Quantitative easing is a monetary policy where a central bank purchases longer-term securities to increase money supply and encourage lending and investment.',
    link: 'https://en.wikipedia.org/wiki/Quantitative_easing',
  },
  {
    title: 'Recession',
    description:
      'A recession is a period of economic decline, typically characterized by a decrease in GDP, employment, and spending.',
    link: 'https://en.wikipedia.org/wiki/Recession',
  },
  {
    title: 'Depression',
    description:
      'An economic depression is a prolonged and severe downturn in economic activity, often marked by a significant decline in GDP and widespread unemployment.',
    link: 'https://en.wikipedia.org/wiki/Economic_depression',
  },
  {
    title: 'Economic Growth',
    description:
      "Economic growth refers to an increase in a country's output of goods and services over time, usually measured by GDP growth.",
    link: 'https://en.wikipedia.org/wiki/Economic_growth',
  },
  {
    title: 'Human Capital',
    description:
      'Human capital refers to the skills, knowledge, and experience possessed by individuals, which can contribute to economic productivity and growth.',
    link: 'https://en.wikipedia.org/wiki/Human_capital',
  },
  {
    title: 'Capital Goods',
    description:
      'Capital goods are assets used in the production of goods and services, such as machinery, tools, and buildings.',
    link: 'https://en.wikipedia.org/wiki/Capital_good',
  },
  {
    title: 'Consumer Confidence',
    description:
      'Consumer confidence is a measure of how optimistic or pessimistic consumers are about the overall state of the economy and their own financial situation.',
    link: 'https://en.wikipedia.org/wiki/Consumer_confidence',
  },
  {
    title: 'Income Inequality',
    description:
      'Income inequality refers to the disparity in earnings between different individuals or groups within a society.',
    link: 'https://en.wikipedia.org/wiki/Income_inequality',
  },
  {
    title: 'Wealth Inequality',
    description:
      'Wealth inequality is the unequal distribution of assets and resources among individuals or groups within a society.',
    link: 'https://en.wikipedia.org/wiki/Wealth_inequality',
  },
  {
    title: 'Taxation',
    description:
      'Taxation is the process by which governments collect money from individuals and businesses to fund public services and infrastructure.',
    link: 'https://en.wikipedia.org/wiki/Tax',
  },
  {
    title: 'Subsidies',
    description:
      'Subsidies are financial assistance provided by the government to support businesses, industries, or individuals to encourage certain economic activities.',
    link: 'https://en.wikipedia.org/wiki/Subsidy',
  },
  {
    title: 'Trade Barriers',
    description:
      'Trade barriers are government-imposed restrictions on international trade, including tariffs, quotas, and embargoes, which can impact the flow of goods and services.',
    link: 'https://en.wikipedia.org/wiki/Trade_barrier',
  },
  {
    title: 'Globalization',
    description:
      'Globalization is the process of increasing interconnectedness and interdependence among countries through trade, investment, and cultural exchange.',
    link: 'https://en.wikipedia.org/wiki/Globalization',
  },
  {
    title: 'International Trade',
    description:
      'International trade involves the exchange of goods and services between countries, impacting economies through imports and exports.',
    link: 'https://en.wikipedia.org/wiki/International_trade',
  },
  {
    title: 'Economic Development',
    description:
      'Economic development is the process of improving the economic well-being and quality of life for a community or country through various initiatives and policies.',
    link: 'https://en.wikipedia.org/wiki/Economic_development',
  },
  {
    title: 'Development Economics',
    description:
      'Development economics is a branch of economics focusing on improving the economic conditions and quality of life in developing countries.',
    link: 'https://en.wikipedia.org/wiki/Development_economics',
  },
  {
    title: 'Behavioral Economics',
    description:
      'Behavioral economics studies how psychological factors influence economic decision-making and how these decisions deviate from traditional economic theories.',
    link: 'https://en.wikipedia.org/wiki/Behavioral_economics',
  },
  {
    title: 'Institutional Economics',
    description:
      'Institutional economics examines the role of institutions, such as laws and organizations, in shaping economic behavior and outcomes.',
    link: 'https://en.wikipedia.org/wiki/Institutional_economics',
  },
  {
    title: 'Econometrics',
    description:
      'Econometrics applies statistical methods to economic data to test hypotheses and forecast future trends.',
    link: 'https://en.wikipedia.org/wiki/Econometrics',
  },
  {
    title: 'Supply Chain Management',
    description:
      'Supply chain management involves overseeing and optimizing the flow of goods, services, and information from suppliers to customers.',
    link: 'https://en.wikipedia.org/wiki/Supply_chain_management',
  },
  {
    title: 'Financial Markets',
    description:
      'Financial markets are platforms where financial assets, such as stocks and bonds, are bought and sold, facilitating investment and liquidity.',
    link: 'https://en.wikipedia.org/wiki/Financial_market',
  },
  {
    title: 'Behavioral Finance',
    description:
      'Behavioral finance explores how psychological factors and cognitive biases impact financial decision-making and market outcomes.',
    link: 'https://en.wikipedia.org/wiki/Behavioral_finance',
  },
  {
    title: 'Venture Capital',
    description:
      'Venture capital involves investing in early-stage, high-growth potential startups in exchange for equity ownership.',
    link: 'https://en.wikipedia.org/wiki/Venture_capital',
  },
  {
    title: 'Private Equity',
    description:
      'Private equity involves investing in private companies or buyouts of public companies, aiming for long-term capital appreciation.',
    link: 'https://en.wikipedia.org/wiki/Private_equity',
  },
  {
    title: 'Derivatives',
    description:
      'Derivatives are financial contracts whose value is derived from an underlying asset, such as stocks, bonds, or commodities.',
    link: 'https://en.wikipedia.org/wiki/Derivative_(finance)',
  },
  {
    title: 'Cryptocurrencies',
    description:
      'Cryptocurrencies are digital or virtual currencies that use cryptography for security and operate on decentralized networks, such as blockchain.',
    link: 'https://en.wikipedia.org/wiki/Cryptocurrency',
  },
  {
    title: 'Blockchain Technology',
    description:
      'Blockchain technology is a decentralized digital ledger that records transactions across multiple computers in a secure and immutable manner.',
    link: 'https://en.wikipedia.org/wiki/Blockchain',
  },
  {
    title: 'Digital Currencies',
    description:
      'Digital currencies are currencies that exist only in digital form and can be used for online transactions and electronic payments.',
    link: 'https://en.wikipedia.org/wiki/Digital_currency',
  },
  {
    title: 'Economic Indicators',
    description:
      'Economic indicators are statistical metrics used to gauge the health and performance of an economy, such as GDP, inflation rate, and unemployment rate.',
    link: 'https://en.wikipedia.org/wiki/Economic_indicator',
  },
  {
    title: 'Trade Agreements',
    description:
      'Trade agreements are formal treaties between countries that outline the rules and terms for trade, aiming to reduce barriers and facilitate commerce.',
    link: 'https://en.wikipedia.org/wiki/Trade_agreement',
  },
  {
    title: 'Economic Integration',
    description:
      'Economic integration involves the unification of economic policies and practices among countries to promote trade and economic cooperation.',
    link: 'https://en.wikipedia.org/wiki/Economic_integration',
  },
  {
    title: 'Economic Modeling',
    description:
      'Economic modeling involves creating mathematical representations of economic processes to analyze and predict economic behavior and outcomes.',
    link: 'https://en.wikipedia.org/wiki/Economic_model',
  },
  {
    title: 'Capital Markets',
    description:
      'Capital markets are financial markets where long-term securities, such as stocks and bonds, are issued and traded to raise funds for businesses and governments.',
    link: 'https://en.wikipedia.org/wiki/Capital_market',
  },
  {
    title: 'Sustainable Development',
    description:
      'Sustainable development aims to meet current economic, social, and environmental needs without compromising the ability of future generations to meet their own needs.',
    link: 'https://en.wikipedia.org/wiki/Sustainable_development',
  },
  {
    title: 'Economic Policy',
    description:
      'Economic policy refers to the actions and strategies implemented by governments to manage economic performance, including fiscal and monetary policies.',
    link: 'https://en.wikipedia.org/wiki/Economic_policy',
  },
];

export default economicsTopics;
