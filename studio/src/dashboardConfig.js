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
                  buildHookId: '5ee77b588659444469ad8a80',
                  title: 'Sanity Studio',
                  name: 'Gatsby-Sanity-Blog-studio-934fi123',
                  apiId: '619594c7-0d63-4cf0-abfc-0f780da24258'
                },
                {
                  buildHookId: '5ee77b588659448ed3ad85af',
                  title: 'Blog Website',
                  name: 'Gatsby-Sanity-Blog',
                  apiId: 'b80896d5-4ca9-4c67-8453-4933eb229e86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Kreceo/Gatsby-Sanity-Blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://Gatsby-Sanity-Blog.netlify.app', category: 'apps' }
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
