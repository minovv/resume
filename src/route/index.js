// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Vitaliy',
    lastname: 'Minov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'Austria'
};

var footer = {
  social: {
    email: {
      text: 'minov.vitaliy@tirolhelpsukraine.eu',
      href: 'mailto: minov.vitaliy@tirolhelpsukraine.eu',
    },
    mobilephone: {
      text: '+43 (0) 66 067 56842',
      href: 'callto:+43 66 067 56842',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vitaliy-minov-b61692252/',
    },

    projects: {
      text: 'GitHub',
      href: 'https://github.com/minovv',
    },
  }
};


// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every collegue is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
})


// ================================================================

router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10
        },
        {
          name: 'Git',
          point: 10
        },
        {
          name: 'Terminal',
          point: 10
        },
        {
          name: 'VS Code',
          point: 3
        },
        {
          name: 'NPM',
          point: 3
        },
        {
          name: 'React.js',
          point: 0
        },
        {
          name: 'PHP',
          point: null
        },
      ],
      hobbies: [
        {
          name: 'Climbing',
          isMain: true,
        },
        {
          name: 'Swimming',
          isMain: false,
        },
      ],
    },

    footer,
  })
})




//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'HTML',
          year: 2019,
          isEnd: true,
        },
        {
          name: 'CSS Course',
          year: 2020,
          isEnd: true,
        },
        {
          name: 'Fullstack Development Course',
          year: 2021,
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'HTML',
          id: 1019,
        },
        {
          name: 'CSS',
          id: 1020,
        },
        {
          name: 'Fullstack Developer',
          id: 1021,
        },
      ],
    },

    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work Experience',
    },

    header,

    main: {
      experience: [{
        position: 'Junior Fullstack Developer',
        company: {
          name: 'IT Brains',
          url: null,
        },
        duration: {
          from: '10.10.2020',
          to: null,
        },
        projectAmount: 3,

        projects: [
          {
            name: 'Resume',
            url: '#',
            about: 'Lorem ipsum dolor sit amet',
            stacks: [
              {
                name: 'React.js'
              },
              {
                name: 'HTML & CSS',
              },
              {
                name: 'Node.js'
              },
            ],

            stackAmount: 3,

            awards: [
              {
                name: 'Dolor sit amet',
              },
              {
                name: 'Lorem ipsum',
              },
            ],

            awardAmount: 2,
          },
        ],
      },
      ],
    },

    footer,
  })
})
// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer

  res.render('person', {

    layout: 'person',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})


// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
