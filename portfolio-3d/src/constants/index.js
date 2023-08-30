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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    sad,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    c,
    flask,
    mysql,
    hbnb_v3,
    simple_shell,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Product Manager",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 5",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "MySql",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "No experience",
      company_name: "You can be the first company",
      icon: sad,
      iconBg: "#383E56",
      date: "2023 - Actually",
      points: [
        "Help me to start my expertise",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AirBnb clone V3",
      description:
        "The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB) In this version is added a RESTful API",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
      ],
      image: hbnb_v3,
      source_code_link: "https://github.com/Jsosholberton/holbertonschool-AirBnB_clone_v3",
    },
    {
      name: "AirBnb clone V2",
      description:
        "The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB) In this version is added a flask framework",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
      ],
      image: hbnb_v3,
      source_code_link: "https://github.com/Jsosholberton/holbertonschool-AirBnB_clone_v2",
    },
    {
      name: "Simple Shell",
      description:
        "This is a C command-line program that implements a basic version of the Unix shell. It allows running simple commands, commands with arguments.",
      tags: [
        {
          name: "c",
          color: "pink-text-gradient",
        },
      ],
      image: simple_shell,
      source_code_link: "https://github.com/Jsosholberton/holbertonschool-simple_shell",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
