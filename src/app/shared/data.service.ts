import {
  SideInformationComponentData,
  WorkComponentData,
  EducationComponentData,
} from './data.models';

export const sideInformationComponentData: SideInformationComponentData = {
  name: 'Maciej Luciński',
  home: 'Poland, Łódź',
  email: 'maciejlucinskiwork@gmail.com',
  gitLink: 'https://github.com/Vyvr',
  phone: '+48 662 367 877',
  skills: {
    programmingLanguages: [
      {
        type: 'Javascript',
        percent: 85,
      },
      {
        type: 'SQL',
        percent: 80,
      },
      {
        type: 'CSS',
        percent: 60,
      },
      {
        type: 'Python',
        percent: 60,
      },
      {
        type: 'Java',
        percent: 40,
      },
      {
        type: 'C#',
        percent: 40,
      },
      {
        type: 'C++',
        percent: 30,
      },
    ],
    operatingSystems: [
      {
        type: 'Windows',
        percent: 90,
      },
      {
        type: 'Linux',
        percent: 60,
      },
    ],
    languages: [
      {
        type: 'Polish',
        percent: 100,
      },
      {
        type: 'English',
        percent: 80,
      },
    ],
  },
};

export const workComponentData: WorkComponentData[] = [
  {
    name: 'Intercom Fitter',
    company: 'Homu, Lodz',
    fromDate: new Date(2018, 6),
    toDate: new Date(2018, 9),
    description:
      'Setting up intercoms and working with electrical installations',
  },
  {
    name: 'Assistant in the assembly of smart home systems',
    company: 'Homu, Lodz',
    fromDate: new Date(2018, 6),
    toDate: new Date(2018, 9),
    description: 'Installation of electrical devices and fibaro cubes',
  },
  {
    name: 'React frontend Developer',
    company: 'Apkeo, Lodz',
    fromDate: new Date(2019, 5),
    toDate: new Date(2019, 9),
    description: 'Help in creating websites. React basics.',
    technologies: ['Javascript', 'React', 'CSS', 'StyledComponents'],
  },
];

export const educationComponentData: EducationComponentData[] = [
  {
    school: 'University of Łódź',
    schoolLink: 'https://www.math.uni.lodz.pl/',
    location: 'Poland, Łódź',
    specialty: 'computer networks & data processing',
    degree: 'Bachelors',
    fromDate: new Date(2019, 8),
    toDate: new Date(2022, 5),
  },
];

// export const otherComponentData = {
//   text: "Hobbies: Krav maga, skiing, tennis, IRL RPG, programming, application design"
// };
