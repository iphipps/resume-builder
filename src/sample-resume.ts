import { IResume } from "~/lib";

// Note: chatgpt helped create this Lorax inspired resume
//
export const sample: IResume = {
  header: {
    left1: "Thneedville, Truffula Valley",
    left2: "github/myun",
    title: "Once-ler",
    right1: "oncerler@thneedville.com",
    right2: "555-555-5555",
  },
  main: [
    {
      entries: [
        {
          description: {
            type: "paragraphs",
            entries: [
              "Experienced entrepreneur with a passion for innovation, resource exploitation, and Thneed production. Proven track record of converting natural resources into marketable goods. Skilled in ignoring the concerns of the Lorax and other eco-friendly entities.",
            ],
          },
        },
      ],
    },
    {
      title: "Experience",
      entries: [
        {
          title:
            "Environmental Educator • Once-ler's Lorax Outreach Program • Thneedville, Va",
          date: "Once upon a time – Present",
          description: {
            type: "bullets",
            entries: [
              'Created and implemented the "Thneedville Youth Engagement Initiative" to educate youngsters about the fascinating world of Thneeds and the Lorax.',
              `Developed engaging storytelling techniques to make the Lorax's cautionary tales entertaining for children while downplaying the environmental consequences.`,
              "Organized Thneed-making workshops to inspire the next generation of entrepreneurial minds.",
              "Managed to convince a few naive youngsters that the Truffula Trees were actually happier being turned into Thneeds.",
            ],
          },
        },

        {
          title:
            "Founder & CEO • The Lorax LLC (Formerly Truffula Valley) • Thneedville, Va",
          date: "Once upon a time – Later",
          description: {
            type: "bullets",
            entries: [
              "Successfully implemented deforestation initiatives to procure Truffula Trees for mass Thneed production.",
              "Developed patented Thneed-making machinery, significantly increasing production efficiency.",
              "Overcame multiple Lorax interventions and protests through persuasive speeches and catchy jingles.",
            ],
          },
        },
        {
          title:
            "Intern • Thneedville Sustainable Alternatives • Thneedville, Va",
          date: "Once upon a time – Later",
          description: {
            type: "paragraphs",
            entries: [
              "Explored alternative, eco-friendly business models, but quickly realized they were less profitable.",
              "Conducted a thorough analysis of potential competitors, namely Lorax sympathizers.",
            ],
          },
        },
      ],
    },
    {
      title: "Extras",
      entries: [
        {
          title: "Languages",
          description: {
            type: "paragraphs",
            entries: [
              "Thneedology, Resource Exploitation, Environmental Ignorance, Persuasive Speaking, Jingle Writing",
            ],
          },
        },
        {
          title: "Awards and Achievements",
          description: {
            type: "paragraphs",
            entries: [
              `Thneedville's "Most Profitable Business" Award (multiple years)`,
              '"Greenwashing Master" Certificate',
            ],
          },
        },
      ],
    },
    {
      title: "Education",
      entries: [
        {
          title: "Thneedville School of Business and Greed",
          date: "2007",
          description: {
            type: "paragraphs",
            entries: ["Bachelor of Thneedology"],
          },
        },
      ],
    },
  ],
};
