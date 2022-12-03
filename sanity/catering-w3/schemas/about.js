export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'descSpecificWord',
      title: 'Description Specific Word',
      type: 'string',
    },
    {
      name: 'descLighter',
      title: 'Secound Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'About Section Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
}
