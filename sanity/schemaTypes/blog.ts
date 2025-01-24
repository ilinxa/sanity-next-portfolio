import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
        defineField({
            name: 'title',
            title: 'Title of the post',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug of the post',
        //create the slug from the title
            options: {source: 'title'},
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'coverImage',
            type: 'image',
            title: 'Cover Image',
            validation: (rule) => rule.required(),
        }),
        // defineField({
        //     name: 'gallery',
        //     type: 'array',
        //     title: 'Gallery',
        //     of: [{ type: 'image' }], // Allows multiple images
        //     options: {
        //       layout: 'grid', // Optional: Display images in a grid layout
        //     },
        //   }),

        defineField({
          name: 'gallery',
          type: 'array',
          title: 'Gallery',
          of: [
              {
                  type: 'object',
                  fields: [
                      { 
                          name: 'image', 
                          type: 'image', 
                          title: 'Image', 
                          options: { hotspot: true } // Optional: Enable image cropping
                      },
                      {
                          name: 'title',
                          type: 'string',
                          title: 'Title',
                          description: 'Optional title for the image'
                      },
                      {
                          name: 'description',
                          type: 'text',
                          title: 'Description',
                          description: 'Optional description for the image'
                      },
                      defineField({
                        name: 'content',
                        type: 'array',
                        title: 'Content',
                        of: [{type: 'block'}],
                    }),
                  ]
              }
          ],
          options: {
              layout: 'grid', // Optional: Display images in a grid layout
          }
      }),
      
        defineField({
            name: 'shortDescription',
            type: 'text',
            title: 'Short Description',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{type: 'block'}],
            validation: (rule) => rule.required(),
        }),
        // defineField({
        //     name: 'video',
        //     type: 'file',
        //     title: 'Video',
        //     options: {
        //       accept: 'video/*', // Allows only video files
        //     },
        //     // validation: (rule) => rule.required().error('A video file is required'),
        // }),
        defineField({
            name: 'video',
            title: 'Video',
            type: 'object',
            fields: [
              defineField({
                name: 'videoFile',
                title: 'Upload Video File',
                type: 'file',
                options: {
                  accept: 'video/*', // Allows only video files
                },
              }),
              defineField({
                name: 'youtubeLink',
                title: 'YouTube Link',
                type: 'url',
                validation: (rule) =>
                  rule
                    .uri({
                      scheme: ['http', 'https'],
                      allowRelative: false,
                    })
                    .error('Please enter a valid URL'),
              }),
            ],
            options: {
              collapsible: true,
              collapsed: true,
            },
          }),
          // defineField({
          //     name: 'link',
          //     type: 'url',
          //     title: 'External Link',
          //     description: 'Add a link to an external resource',
          //     validation: (rule) => rule.uri({
          //       allowRelative: false, // Only allow absolute URLs
          //       scheme: ['http', 'https'], // Ensure the URL starts with http or https
          //     }).error('Please enter a valid URL'),
          // }),
          //////////////////////////////////////////////////
          // defineField({
          //     name: 'links',
          //     type: 'array',
          //     title: 'External Links',
          //     of: [{ type: 'url' }],
          //     validation: (rule) => rule.max(5).error('You can add up to 5 links.'),
          // }),
          //////////////////////////////////////////////////
          defineField({
              name: 'links',
              type: 'array',
              title: 'External Links',
              of: [
                defineField({
                  type: 'object',
                  name: 'link',
                  fields: [
                    defineField({
                      name: 'title',
                      type: 'string',
                      title: 'Link Title',
                      validation: (rule) =>
                        rule.required().error('Link title is required'),
                    }),
                    defineField({
                      name: 'url',
                      type: 'url',
                      title: 'Link URL',
                      validation: (rule) =>
                        rule
                          .uri({
                            scheme: ['http', 'https'],
                            allowRelative: false,
                          })
                          .error('Please enter a valid URL'),
                    }),
                  ],
                }),
              ],
              validation: (rule) => rule.max(5).error('You can add up to 5 links.'),
            }),
          
          defineField({
            name: 'technologies',
            title: 'Technologies Used',
            type: 'array',
            of: [
              {
                type: 'string',
              },
            ],
            options: {
              list: [
                { title: 'Figma', value: 'figma' },
                { title: 'Canva', value: 'canva' },
                { title: 'Adobe', value: 'adobe' },
                { title: 'HTML', value: 'html' },
                { title: 'CSS', value: 'css' },
                { title: 'JavaScript', value: 'javascript' },
                { title: 'Tailwind', value: 'tailwind' },
                { title: 'TypeScript', value: 'typescript' },
                { title: 'ReactJs', value: 'reactjs' },
                { title: 'React Native', value: 'react_native' },
                { title: 'Flutter', value: 'flutter' },
                { title: 'NextJs', value: 'nextjs' },
                { title: 'Django', value: 'django' },
                { title: 'Sanity', value: 'sanity' },
                { title: 'Strapi', value: 'strapi' },
                { title: 'Other Tech', value: 'other_tech' },
              ],
              layout: 'grid', // Displays options as a grid
            },
          }),
          
          defineField({
            name: 'projectType',
            type: 'string',
            title: 'Project Type',
            options: {
              list: [
                { title: 'Designed', value: 'designed' },
                { title: 'Developed', value: 'developed' },
                { title: 'Designed and Developed', value: 'designed_and_developed' },
              ],
              layout: 'radio', // Optional: Display as radio buttons; remove for a dropdown.
            },
            validation: (rule) => rule.required().error('Please select a project type.'),
          }),
          defineField({
            name: 'jobTitle',
            type: 'string',
            title: 'job Title',
            options: {
              list: [
                { title: 'Web Development', value: 'webDevelopment' },
                // { title: 'Mobile Development', value: 'mobileDevelopment' },
                { title: '3D modeling and animation', value: 'motionContent' },
                { title: 'Videography and Editing', value: 'videoEditing' },
              ],
              layout: 'radio', // Optional: Display as radio buttons; remove for a dropdown.
            },
            validation: (rule) => rule.required().error('Please select a project type.'),
          }),
          defineField({
            name: 'projectStatus',
            type: 'string',
            title: 'Project Type',
            options: {
              list: [
                { title: 'For Sale', value: 'forSale' },
                { title: 'sold out', value: 'soldOut' },
              ],
              layout: 'radio', // Optional: Display as radio buttons; remove for a dropdown.
            },
            validation: (rule) => rule.required().error('Please select a project type.'),
          }),
    ],
})