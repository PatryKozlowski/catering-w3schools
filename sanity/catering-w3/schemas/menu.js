export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Menu Section Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
}
