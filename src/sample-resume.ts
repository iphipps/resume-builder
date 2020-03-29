import { IResume } from '~/lib';

export const resume: IResume = {
  header: {
    left1: '',
    left2: '',
    title: '',
    right1: 'email@example.com',
    right2: '555-555-5555'
  },
  main: [
    {
      title: 'Experience',
      entries: [
        {
          title: 'Salesperson Company XYZ',
          date: '2014 -- Present',
          description: {
            type: 'bullets',
            entries: ['Sold a million widgets']
          }
        }
      ]
    }
  ]
};
