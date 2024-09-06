const technology = [
  {
    title: 'Artificial Intelligence',
    description:
      'Artificial intelligence (AI) is the simulation of human intelligence in machines. AI includes machine learning, natural language processing, and computer vision.',
    link: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
  },
  {
    title: 'Machine Learning',
    description:
      'Machine learning is a subset of AI that enables machines to learn from data and make decisions with minimal human intervention. It includes supervised, unsupervised, and reinforcement learning.',
    link: 'https://en.wikipedia.org/wiki/Machine_learning',
  },
  {
    title: 'Blockchain',
    description:
      'Blockchain is a decentralized, distributed ledger technology that records transactions across many computers securely. It powers cryptocurrencies like Bitcoin.',
    link: 'https://en.wikipedia.org/wiki/Blockchain',
  },
  {
    title: 'Internet of Things (IoT)',
    description:
      'The Internet of Things refers to a network of physical objects embedded with sensors, software, and other technologies to connect and exchange data with other devices over the internet.',
    link: 'https://en.wikipedia.org/wiki/Internet_of_things',
  },
  {
    title: 'Cybersecurity',
    description:
      'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It includes encryption, firewall protection, and secure coding.',
    link: 'https://en.wikipedia.org/wiki/Cybersecurity',
  },
  {
    title: 'Cloud Computing',
    description:
      'Cloud computing delivers computing services—including servers, storage, databases, networking, software—over the internet. It enables scalable and flexible IT solutions.',
    link: 'https://en.wikipedia.org/wiki/Cloud_computing',
  },
  {
    title: 'Big Data',
    description:
      'Big Data refers to extremely large data sets that can be analyzed computationally to reveal patterns, trends, and associations. It is used for decision-making and predictive analysis.',
    link: 'https://en.wikipedia.org/wiki/Big_data',
  },
  {
    title: 'Quantum Computing',
    description:
      'Quantum computing uses the principles of quantum mechanics to perform computations at speeds exponentially faster than classical computers. It promises breakthroughs in various fields.',
    link: 'https://en.wikipedia.org/wiki/Quantum_computing',
  },
  {
    title: 'Virtual Reality',
    description:
      "Virtual reality (VR) is an immersive technology that simulates a user's physical presence in a virtual or imagined environment, typically through headsets and sensory feedback.",
    link: 'https://en.wikipedia.org/wiki/Virtual_reality',
  },
  {
    title: 'Augmented Reality',
    description:
      'Augmented reality (AR) overlays digital content onto the real world, enhancing users’ perception of reality through smartphones, glasses, or headsets.',
    link: 'https://en.wikipedia.org/wiki/Augmented_reality',
  },
  {
    title: '5G Networks',
    description:
      '5G is the fifth generation of wireless network technology that promises faster data speeds, lower latency, and more reliable connections for devices.',
    link: 'https://en.wikipedia.org/wiki/5G',
  },
  {
    title: 'Edge Computing',
    description:
      'Edge computing brings data storage and computation closer to the location where it is needed, reducing latency and improving response times for IoT and other devices.',
    link: 'https://en.wikipedia.org/wiki/Edge_computing',
  },
  {
    title: 'Autonomous Vehicles',
    description:
      'Autonomous vehicles, or self-driving cars, use sensors, AI, and advanced algorithms to navigate without human intervention.',
    link: 'https://en.wikipedia.org/wiki/Autonomous_car',
  },
  {
    title: 'Cryptocurrency',
    description:
      'Cryptocurrency is a digital or virtual currency secured by cryptography, making it difficult to counterfeit. Bitcoin and Ethereum are prominent examples.',
    link: 'https://en.wikipedia.org/wiki/Cryptocurrency',
  },
  {
    title: 'Fintech',
    description:
      'Fintech (financial technology) refers to innovations that aim to improve and automate the delivery of financial services, including mobile banking, cryptocurrencies, and blockchain.',
    link: 'https://en.wikipedia.org/wiki/Financial_technology',
  },
  {
    title: 'Robotics',
    description:
      'Robotics involves the design, construction, and operation of robots, which are programmable machines capable of carrying out a series of actions autonomously or semi-autonomously.',
    link: 'https://en.wikipedia.org/wiki/Robotics',
  },
  {
    title: 'Natural Language Processing',
    description:
      'Natural Language Processing (NLP) is a field of AI that enables machines to understand, interpret, and generate human language in a way that is valuable.',
    link: 'https://en.wikipedia.org/wiki/Natural_language_processing',
  },
  {
    title: 'Wearable Technology',
    description:
      'Wearable technology includes electronic devices that can be worn on the body as accessories, often equipped with sensors and internet connectivity. Examples include smartwatches and fitness trackers.',
    link: 'https://en.wikipedia.org/wiki/Wearable_technology',
  },
  {
    title: '3D Printing',
    description:
      '3D printing is the process of creating a physical object from a digital model by laying down successive layers of material until the object is formed.',
    link: 'https://en.wikipedia.org/wiki/3D_printing',
  },
  {
    title: 'Automation',
    description:
      'Automation refers to the use of technology to perform tasks with reduced human intervention, including industrial automation, software automation, and AI-driven automation.',
    link: 'https://en.wikipedia.org/wiki/Automation',
  },
  {
    title: 'Data Science',
    description:
      'Data science is the field that combines domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data.',
    link: 'https://en.wikipedia.org/wiki/Data_science',
  },
  {
    title: 'DevOps',
    description:
      'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver software updates efficiently.',
    link: 'https://en.wikipedia.org/wiki/DevOps',
  },
  {
    title: 'Digital Transformation',
    description:
      'Digital transformation is the process of using digital technologies to create new—or modify existing—business processes, culture, and customer experiences.',
    link: 'https://en.wikipedia.org/wiki/Digital_transformation',
  },
  {
    title: 'Deep Learning',
    description:
      'Deep learning is a subset of machine learning that uses neural networks with many layers (deep neural networks) to model complex patterns in data.',
    link: 'https://en.wikipedia.org/wiki/Deep_learning',
  },
  {
    title: 'API',
    description:
      'An Application Programming Interface (API) is a set of rules that allows different software applications to communicate with each other.',
    link: 'https://en.wikipedia.org/wiki/API',
  },
  {
    title: 'Augmented Reality',
    description:
      'Augmented reality (AR) overlays digital content and information onto the physical world, enhancing real-world experiences.',
    link: 'https://en.wikipedia.org/wiki/Augmented_reality',
  },
  {
    title: 'Computer Vision',
    description:
      'Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world through images and video.',
    link: 'https://en.wikipedia.org/wiki/Computer_vision',
  },
  {
    title: 'Data Encryption',
    description:
      'Data encryption is the process of converting data into a code to prevent unauthorized access, essential for protecting sensitive information in transit and storage.',
    link: 'https://en.wikipedia.org/wiki/Data_encryption',
  },
  {
    title: 'Biometrics',
    description:
      'Biometrics refers to the identification and authentication of individuals based on physical or behavioral characteristics, such as fingerprints or facial recognition.',
    link: 'https://en.wikipedia.org/wiki/Biometrics',
  },
  {
    title: 'Virtual Assistants',
    description:
      'Virtual assistants are AI-powered applications that understand voice commands and perform tasks such as answering questions, setting reminders, and controlling smart home devices.',
    link: 'https://en.wikipedia.org/wiki/Virtual_assistant',
  },
  {
    title: 'Smart Cities',
    description:
      'Smart cities use digital technology, data analytics, and IoT to enhance the quality of life in urban areas, including smarter transportation, energy efficiency, and infrastructure management.',
    link: 'https://en.wikipedia.org/wiki/Smart_city',
  },
  {
    title: 'Ransomware',
    description:
      'Ransomware is a type of malicious software that blocks access to a victim’s data or system until a ransom is paid.',
    link: 'https://en.wikipedia.org/wiki/Ransomware',
  },
  {
    title: 'Virtual Machines',
    description:
      'A virtual machine (VM) is a software emulation of a physical computer, allowing multiple operating systems to run on a single physical machine simultaneously.',
    link: 'https://en.wikipedia.org/wiki/Virtual_machine',
  },
  {
    title: 'Containers',
    description:
      'Containers are lightweight, stand-alone software packages that include everything needed to run a piece of software: code, runtime, system tools, libraries, and settings.',
    link: 'https://en.wikipedia.org/wiki/Container_(virtualization)',
  },
  {
    title: 'Digital Twins',
    description:
      'A digital twin is a virtual model of a physical object, system, or process that allows for real-time simulation, analysis, and optimization.',
    link: 'https://en.wikipedia.org/wiki/Digital_twin',
  },
  {
    title: 'Software as a Service (SaaS)',
    description:
      'Software as a Service (SaaS) is a software delivery model in which applications are hosted by a service provider and made available to customers over the internet.',
    link: 'https://en.wikipedia.org/wiki/Software_as_a_service',
  },
  {
    title: 'Neural Networks',
    description:
      'Neural networks are a series of algorithms that mimic the human brain to recognize relationships in data, primarily used in deep learning and machine learning.',
    link: 'https://en.wikipedia.org/wiki/Artificial_neural_network',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Responsive web design ensures websites are optimized for all devices, adjusting layout, images, and functionality based on the screen size and orientation.',
    link: 'https://en.wikipedia.org/wiki/Responsive_web_design',
  },
  {
    title: 'Augmented Reality (AR)',
    description:
      'AR enhances the real world by overlaying digital content, allowing users to interact with both physical and virtual elements simultaneously.',
    link: 'https://en.wikipedia.org/wiki/Augmented_reality',
  },
  {
    title: 'Smart Contracts',
    description:
      'Smart contracts are self-executing contracts with the terms directly written into code. They run on blockchain technology and automatically enforce agreements.',
    link: 'https://en.wikipedia.org/wiki/Smart_contract',
  },
  {
    title: 'Drones',
    description:
      'Drones, or unmanned aerial vehicles (UAVs), are aircraft without a human pilot on board. They are used in various fields, including surveillance, agriculture, and delivery services.',
    link: 'https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle',
  },
  {
    title: 'Gig Economy',
    description:
      'The gig economy is a labor market characterized by short-term contracts or freelance work, as opposed to permanent jobs, often facilitated by digital platforms.',
    link: 'https://en.wikipedia.org/wiki/Gig_economy',
  },
  {
    title: 'Data Mining',
    description:
      'Data mining is the process of discovering patterns, correlations, and insights from large data sets using statistical and computational techniques.',
    link: 'https://en.wikipedia.org/wiki/Data_mining',
  },
  {
    title: 'Facial Recognition',
    description:
      'Facial recognition technology identifies or verifies a person’s identity using their facial features. It is used in security, surveillance, and personal devices.',
    link: 'https://en.wikipedia.org/wiki/Facial_recognition_system',
  },
  {
    title: 'Digital Marketing',
    description:
      'Digital marketing refers to the use of online platforms to promote products and services. It includes SEO, social media marketing, and email campaigns.',
    link: 'https://en.wikipedia.org/wiki/Digital_marketing',
  },
  {
    title: 'Virtual Private Network (VPN)',
    description:
      'A VPN is a service that encrypts your internet connection and hides your IP address, providing secure and private access to the web.',
    link: 'https://en.wikipedia.org/wiki/Virtual_private_network',
  },
  {
    title: 'Chatbots',
    description:
      'Chatbots are AI-driven applications that simulate human conversation, often used for customer service, marketing, and personal assistants.',
    link: 'https://en.wikipedia.org/wiki/Chatbot',
  },
];

export default technology;
