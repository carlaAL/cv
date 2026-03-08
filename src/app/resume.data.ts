export interface ResumeData {
  personal: {
    name: string;
    role: string;
    summary: string;
    email: string;
    handle: string;
    linkedin: string;
    especialization: string;
    github: string;
    remote: { text: string; url: string };
    languages: { name: string; level: string; details?: string }[];
  };
  experience: {
    period: string;
    company: string;
    role: string;
    description: string;
  }[];
  education: {
    period: string;
    degree: string;
    institution: string;
    details: string;
  }[];
  projects?: {
    period: string;
    degree: string;
    institution: string;
    details: string;
  }[];
  certifications?: {
    period: string;
    degree: string;
    institution: string;
    details: string;
  }[];
  skills: string[];
}

export const RESUME_DATA: { [key: string]: ResumeData } = {
  es: {
    personal: {
      name: 'Carla Aldabaldetrecu',
      role: 'Full Stack & Artificial Intelligence Engineer',
      especialization: 'Node.js · Angular · Python · Tensorflow',
      summary: 'Graduada en Ingeniería Informática y con un master en Inteligencia Artificial. Especializada en crear aplicaciones web con Node.js y Angular, y en el desarrollo de proyectos basados en Inteligencia Artificial utilizando Python con Tensorflow/Keras.',
      email: 'carla.aldabaldetrecu@gmail.com',
      handle: 'carlaaldabalde',
      linkedin: 'https://www.linkedin.com/in/carlaaldabalde',
      github: 'https://github.com/carlaAL/cv',
      remote: { text: '100% remoto (Donostia / San Sebastián)', url: 'https://www.google.com/maps/place/Donostia' },
      languages: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'Nivel profesional (C2)', details: 'Proficiency certificate (CPE) de la Universidad de Cambridge' }
      ]
    },
    experience: [
      {
        period: '01/2021 – ACTUAL',
        company: 'IRIS TECHNOLOGY SOLUTIONS',
        role: 'Full Stack & Artificial Intelligence Engineer',
        description: 'Diversos proyectos web y de Inteligencia Artificial con metodología SCRUM. Desarrollo de páginas web modularizadas utilizando Angular para frontend, NodeJS en backend y PostgreSQL para la persistencia de datos. Diversos proyectos de la rama de visión artificial desarrollados en Python utilizando Tensorflow y Pytorch, así como FastAPI para backend – frontend y C++ para la aplicación frontend.'
      },
      {
        period: '10/2016 – 01/2021',
        company: 'INNOVAE',
        role: 'Product Manager y Full Stack Web Developer',
        description: 'Desarrollo de productos web para sector industrial y dirección de equipo. Aplicación web de administración para mantenimiento industrial usando PHP con Laravel (backend), VueJS (frontend) y PostgreSQL. Directora de producto de una app web basada en realidad aumentada y WebRTC para videoconferencia mediante NodeJS (Express, Sockets), PostgreSQL, HTML5, CSS3, Bootstrap y JQuery.'
      },
      {
        period: '03/2020 – 05/2020',
        company: 'EA SPORTS',
        role: 'Data Scientist en Prácticas',
        description: 'Analizar traductoras APIS (Azure, AWS...). Procesamiento de datos y análisis de resultados mediante diferentes métricas con Python y Jupyter Notebook.'
      },
      {
        period: '05/2016 – 07/2016',
        company: 'INNOVAE',
        role: 'Ingeniera Informática en Prácticas',
        description: 'Desarrollo de una aplicación web basada en realidad aumentada aplicada a sistemas de videoconferencia. API Rest backend (NodeJS, Express, Sockets), frontend (WebRTC, HTML5, CSS, Bootstrap, JQuery) y base de datos (MySQL a PostgreSQL).'
      }
    ],
    education: [
      {
        period: '09/2018 – 07/2020',
        degree: 'Máster en Inteligencia Artificial',
        institution: 'Universidad Internacional de La Rioja',
        details: 'Máster de IA dividido en dos años para compaginar trabajo y estudios.'
      },
      {
        period: '09/2012 – 07/2016',
        degree: 'Grado en Ingeniería Informática',
        institution: 'Universidad del País Vasco (EHU)',
        details: 'Especialidad en Computación. Estudios cursados en KU Leuven (Bélgica) durante el primer cuatrimestre del cuarto año.'
      }
    ],
    projects: [
      {
        period: '03/2020 – 07/2020',
        degree: 'Proyecto: Mantenimiento Predictivo (MAC)',
        institution: 'Proyecto Académico',
        details: 'Predicción de errores en máquina MAC mediante redes neuronales (Python, Tensorflow, Keras).'
      },
      {
        period: '04/2016 – 07/2016',
        degree: 'Proyecto: Generación de Patrones con Kinect',
        institution: 'Proyecto Académico',
        details: 'Generación de patrones a medida mediante Kinect, MakeHuman, Matlab, ThreeJS, Blender, NodeJS.'
      }
    ],
    certifications: [
      {
        period: '11/2025',
        degree: 'Protección de Datos (RGPD y LOPDGDD)',
        institution: 'AENOR',
        details: 'Conocimientos sobre normativa europea de protección de datos.'
      },
      {
        period: '02/2023',
        degree: 'Kubernetes',
        institution: 'IMAGINA FORMACIÓN',
        details: 'Orquestación de contenedores, despliegue y gestión en cloud.'
      },
      {
        period: '05/2021',
        degree: 'Scrum Master / Product Owner',
        institution: 'XSFERA Agile Innovation S.L.',
        details: 'Metodología ágil para gestión de proyectos.'
      }
    ],
    skills: [
      'Python', 
      'Tensorflow', 
      'Pytorch', 
      'TypeScript', 
      'Node.js', 
      'Angular', 
      'PostgreSQL', 
      'Express', 
      'SCRUM/Agile', 
      'FastAPI', 
      'C++', 
      'VueJS',
      'PHP', 
      'Git', 
      'Docker', 
      'Java', 
      'WebRTC', 
      'Laravel', 
      'REST API',
      'JavaScript',
      'HTML5',
      'SASS',
      'MySQL'
    ]
  },
  en: {
    personal: {
      name: 'Carla Aldabaldetrecu',
      role: 'Full Stack & Artificial Intelligence Engineer',
      especialization: 'Node.js · Angular · Python · Tensorflow',
      summary: 'Computer Engineering graduate with a Master\'s degree in Artificial Intelligence. Specialized in developing web applications using Node.js and Angular, and AI-based projects using Python with Tensorflow/Keras.',
      email: 'carla.aldabaldetrecu@gmail.com',
      handle: 'carlaaldabalde',
      linkedin: 'https://www.linkedin.com/in/carlaaldabalde',
      github: 'https://github.com/carlaAL/cv',
      remote: { text: '100% Remote (Donostia / San Sebastián)', url: 'https://www.google.com/maps/place/Donostia' },
      languages: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Professional Level (C2)', details: 'Certificate of Proficiency in English (CPE) from Cambridge University' }
      ]
    },
    experience: [
      {
        period: '01/2021 – PRESENT',
        company: 'IRIS TECHNOLOGY SOLUTIONS',
        role: 'Full Stack & Artificial Intelligence Engineer',
        description: 'Various web and Artificial Intelligence projects using SCRUM methodology. Modularized frontend web development using Angular, backend with NodeJS, and PostgreSQL for data persistence. Computer vision projects developed in Python using Tensorflow and Pytorch, as well as FastAPI for backend-frontend communication and C++ for frontend apps.'
      },
      {
        period: '10/2016 – 01/2021',
        company: 'INNOVAE',
        role: 'Product Manager & Full Stack Web Developer',
        description: 'Web product development for the industrial sector and team management. Created an administration web app for industrial plant maintenance using PHP (Laravel) and VueJS. Product Manager for an AR-based video conference web application using WebRTC, NodeJS (Express, Sockets), PostgreSQL, HTML5, CSS3, Bootstrap, and JQuery.'
      },
      {
        period: '03/2020 – 05/2020',
        company: 'EA SPORTS',
        role: 'Data Scientist Intern',
        description: 'Analyzed translation APIs (Azure, AWS, etc.). Performed data processing and evaluated results through multiple metrics using Python and Jupyter Notebook.'
      },
      {
        period: '05/2016 – 07/2016',
        company: 'INNOVAE',
        role: 'Computer Engineer Intern',
        description: 'Developed an Augmented Reality web application applied to video conferencing systems. Rest API backend (NodeJS, Express, Sockets), frontend (WebRTC, HTML5, CSS, Bootstrap, JQuery), and database (MySQL to PostgreSQL).'
      }
    ],
    education: [
      {
        period: '09/2018 – 07/2020',
        degree: 'Master\'s Degree in Artificial Intelligence',
        institution: 'Universidad Internacional de La Rioja',
        details: 'AI Master\'s degree divided into two years to accommodate work and studies.'
      },
      {
        period: '09/2012 – 07/2016',
        degree: 'Bachelor\'s Degree in Computer Engineering',
        institution: 'University of the Basque Country (EHU)',
        details: 'Specialization in Computing. Included a semester abroad at KU Leuven (Belgium) during the first term of the fourth year.'
      },
    ],
    projects: [
      {
        period: '03/2020 – 07/2020',
        degree: 'Project: Predictive Maintenance (MAC)',
        institution: 'Academic Project',
        details: 'Predicting blade control errors on Main Air Compressor (MAC) using Neural Networks (Python, Tensorflow, Keras).'
      },
      {
        period: '04/2016 – 07/2016',
        degree: 'Project: Custom Sewing Pattern Gen.',
        institution: 'Academic Project',
        details: 'Generated custom sewing patterns using Kinect, MakeHuman, Matlab, ThreeJS, Blender, and NodeJS.'
      },
      {
        period: '11/2025',
        degree: 'Data Protection (GDPR & LOPDGDD)',
        institution: 'AENOR',
        details: 'Knowledge about European data protection regulations, user rights, and legal obligations.'
      },
    ],
      certifications: [
      {
        period: '02/2023',
        degree: 'Kubernetes',
        institution: 'IMAGINA FORMACIÓN',
        details: 'Training in container orchestration, deployment, scalability, and cloud app management.'
      },
      {
        period: '05/2021',
        degree: 'Scrum Master / Product Owner',
        institution: 'XSFERA Agile Innovation S.L.',
        details: 'Agile methodology for project management, teamwork, and continuous improvement.'
      }
    ],
    skills: [
      'Python', 
      'Tensorflow', 
      'Pytorch', 
      'TypeScript', 
      'Node.js', 
      'Angular', 
      'PostgreSQL', 
      'Express', 
      'SCRUM/Agile', 
      'FastAPI', 
      'C++', 
      'VueJS',
      'PHP', 
      'Git', 
      'Docker', 
      'Java', 
      'WebRTC', 
      'Laravel', 
      'REST API',
      'JavaScript',
      'HTML5',
      'SASS',
      'MySQL'
    ]
  }
};
