const loremIpsum = [
  ['hello'],
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'curabitur',
  'vel',
  'hendrerit',
  'libero',
  'eleifend',
  'blandit',
  'nunc',
  'ornare',
  'odio',
  'ut',
  ['damn'],
  'orci',
  'gravida',
  'imperdiet',
  'nullam',
  'purus',
  'lacinia',
  'a',
  'pretium',
  'quis',
  'congue',
  'praesent',
  'sagittis',
  'laoreet',
  'auctor',
  'mauris',
  'non',
  'velit',
  'eros',
  ['world'],
  'dictum',
  'proin',
  'accumsan',
  'sapien',
  'nec',
  'massa',
  'volutpat',
  'venenatis',
  'sed',
  'eu',
  'molestie',
  'lacus',
  'quisque',
  'porttitor',
  'ligula',
  'dui',
  'mollis',
  'tempus',
];

const defaultFiltersState: IFilter = {
  location: [loremIpsum, Array(loremIpsum.filter((e) => typeof e === 'string').length).fill(false)],
  jobType: [
    ['Full Time', true],
    ['Part Time', false],
    ['Internship', false],
    ['Apprenticeship', false],
  ],
  workType: [
    ['On-site', true],
    ['Hybrid', false],
    ['Remote', false],
    ['Custom hours', false],
  ],
  industry: [loremIpsum, Array(loremIpsum.filter((e) => typeof e === 'string').length).fill(false)],
  company: [loremIpsum, Array(loremIpsum.filter((e) => typeof e === 'string').length).fill(false)],
  language: [
    ['English', true],
    ['Swedish', false],
    ['Finnish', false],
  ],
  role: [loremIpsum, Array(loremIpsum.filter((e) => typeof e === 'string').length).fill(false)],
  salary: [0, 15000],
  education: [
    'Bachelor',
    'Master',
    'Licentiate',
    'Doctor',
    'Upper secondary school',
    'Vocational school',
    'Comprehensive school',
    'No education',
    'Certified course',
  ],
};

export interface IFilter {
  location: (string | string[])[];
  jobType: [string, boolean][];
  workType: [string, boolean][];
  industry: (string | string[])[];
  company: (string | string[])[];
  language: [string, boolean][];
  role: (string | string[])[];
  salary: [number, number];
  education: string[];
}

export { defaultFiltersState, loremIpsum };
