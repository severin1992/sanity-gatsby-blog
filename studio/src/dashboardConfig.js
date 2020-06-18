export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eeb32ce6092df90c0ca7ff7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zpshp22m',
                  apiId: '05f43147-ef00-43a7-a650-2a7e8529dedf'
                },
                {
                  buildHookId: '5eeb32cea9c61b750309713a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-npndrnxc',
                  apiId: '58fec046-a9e6-431a-925e-d690d30bfb64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/severin1992/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-npndrnxc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
