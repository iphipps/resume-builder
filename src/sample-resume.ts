import { IResume } from '~/lib';

export const resume: IResume = {
  header: {
    left1: '123 Main Street',
    left2: 'github/myun',
    title: 'My Name',
    right1: 'email@example.com',
    right2: '555-555-5555'
  },
  main: [
    {
      entries: [
        {
          description: {
            type: 'paragraphs',
            entries: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            ]
          }
        }
      ]
    },
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
