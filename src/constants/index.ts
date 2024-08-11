// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  vuejs,
  solidity,
  solana,
  web3,
  rust,
  defi,
  dex,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // soramitsu,
//  quoine ,
  vauldex,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Smart Contract and Auditor",
    icon: web,
  },
  {
    title: "Dex Developer",
    icon: mobile,
  },
  {
    title: "dApp Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [

  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Web3",
    icon: web3,
  },
  {
    name: "Solana",
    icon: solana,
  },
  // {
  //   name: "DEFI",
  //   icon: defi,
  // },
  {
    name: "DEX",
    icon: dex,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Smart Contract Engineer",
    company_name: "Soramitsu",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2024",
    points: [
      "Contributed to the development of blockchain infrastructure, including consensus mechanisms, sidechains, and layer-2 solutions, aimed at improving the scalability and performance of blockchain networks",
      "Contributed to the successful completion of several blockchain projects, including the development of smart contracts for DeFi and DEX platforms, which led to increased adoption and user engagement",
      "Developed over 2 smart contracts and web3 frontend for presale, swap protocols and tested it.",
    ],
  },
  {
    title: "Full-stack Engineer",
    company_name: "Quoine",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2018 - Feb 2020",
    points: [
      " Contributed to integration of a DEX platform onto the Liquid ecosystem, enhancing our offerings by allowing users to trade cryptocurrencies directly from our platform without intermediaries",
      "Contributed to the development of DeFi products, including lending and borrowing platforms, yield farming opportunities, and stablecoin integrations, aiming to expand our service offerings and attract a wider user base",
      "Collaborated with internal and external auditors to conduct thorough security audits of smart contracts and DeFi products, ensuring the highest standards of security and compliance.",

    ],
  },
  {
    title: "Smart Contract Developer and Auditor",
    company_name: "Miichisoft Japan",
    icon: vauldex,
    iconBg: "#383E56",
    date: "April 2016 - May 2018",
    points: [
      "Successfully developed and deployed a series of smart contracts that facilitated a significant increase in transaction throughput and user adoption for a DeFi platform",
      "Collaborated with the development team to integrate smart contracts with existing blockchain applications, enhancing their functionality and usability",
      "Monitored and analyzed smart contract performance post-deployment, implementing optimizations to improve efficiency and reduce costs",
      "Conducted security testing using a mix of manual and automated tools, including static and dynamic analysis, to uncover hidden flaws and weaknesses.",


    ],
  },

] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      " His ability to explain complex concepts in a clear and concise manner made him invaluable in bridging the gap between technical details and strategic objectives",
    name: "Makoto Takemiya",
    designation: "CEO|Blockchain Engineer",
    company: "Soramitsu",
    image: user1,
  },
  {
    testimonial:
      "He demonstarted  not only technical prowess but also a deep understanding of how blockchain can transform our business model and operations. He is an example for developers to follow and learn from. ",
    name: "Koya Takahashi",
    designation: "Board Director",
    company: "Quoine",
    image: user2,
  },
  {
    testimonial:
      "What truly sets Hiroshi  apart is his exceptional client service. He was always available to discuss progress, address concerns, and offer insights into the project's direction",
    name: "Keijiro Tsuji",
    designation: "CTO",
    company: "Miichisoft Japan",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Shoot for the Moon",
    description:
      "The Lunar Token (LNR) project, as highlighted in the provided sources, is a rapidly growing DeFi (Decentralized Finance) initiative on the Binance Smart Chain.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    // source_code_link: "https://github.com/125heracles123/disney-clone",
    live_site_link: "https://lunartoken.co/",
  },
  {
    name: "Snippool",
    description:
      "Snippool.xyz is a platform focused on the intersection of Non-Fungible Tokens (NFTs) and decentralized finance (DeFi)",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    // source_code_link: "https://github.com/125heracles123/fitness-app",
    live_site_link: "https://www.snippool.xyz/",
  },
  {
    name: "Cyber-stadium",
    description:
      "CyberStadium.gg likely focuses on the gaming and esports community, offering a variety of features and services related to competitive gaming.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    // source_code_link: "https://github.com/125heracles123/admin-dashboard",
    live_site_link: "https://cyberstadium.gg/",
  },
  {
    name: "Zapper",
    description:
      "Zapper is a decentralized finance (DeFi) platform. It provides tools and services that allow users to interact with various DeFi protocols across different blockchains",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Open Graph",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    // source_code_link: "https://github.com/125heracles123/tiktok-clone",
    live_site_link: "https://zapper.xyz/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    // source_code_link: "https://github.com/125heracles123/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
 
  {
    name: "Anichess",
    description:
      "Community-driven free-to-play chess game with new strategic layers powered by magical spells.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    // source_code_link: "https://github.com/125heracles123/travel-advisor",
    live_site_link: "https://anichess.com/",
  },
  {
    name: "Figma Design",
    description:
      "Voip Phone Design",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
   
    ],
    image: project7,
    // source_code_link: "https://github.com/125heracles123/crypto-app",
    live_site_link: "https://www.figma.com/design/4F2RpzVxNQ8DwjOrCn83DF/VoIP-2nd-Line?node-id=1-2&t=WSgt8hvcSNX6ZUOb-0",
  },
  {
    name: "XD Design",
    description:
      "Cryto Tax site Design",
    tags: [
      {
        name: "XD",
        color: "blue-text-gradient",
      },
    ],
    image: project8,
    // source_code_link: "https://github.com/125heracles123/crypto-app",
    live_site_link: "https://xd.adobe.com/view/127829dc-2953-4c25-8574-a4617e430264-472b/screen/c6270d37-d03a-47af-b767-27b89c64c93a",
  },
  {
    name: "XD Design",
    description:
      "MT Site Design",
    tags: [
      {
        name: "XD",
        color: "blue-text-gradient",
      },
    ],
    image: project9,
    // source_code_link: "https://github.com/125heracles123/crypto-app",
    live_site_link: "https://xd.adobe.com/view/7b253504-3193-42a7-a992-a8645853b29c-2e76/screen/e7baaa7f-fd24-411d-a2a3-bc8e72db774b",
  },
] as const;

// export const SOCIALS = [
//   {
//     name: "Linkedin",
//     icon: linkedin,
//     link: "https://www.linkedin.com/in/hiroshi",
//   },
//   {
//     name: "GitHub",
//     icon: github,
//     link: "https://github.com/125heracles123",
//   },
// ] as const;
