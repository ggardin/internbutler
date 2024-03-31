import { defineDb, defineTable, column } from 'astro:db';

const Company = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    website: column.text({optional: true}),
    description: column.text({optional: true}),
  }
})

const Employee = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    email: column.text(),
    company: column.number({ references: () => Company.columns.id })
  }
})

const Project = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    name: column.text(),
    description: column.text({optional: true}),
    company: column.number({ references: () => Company.columns.id })  }
})

const Comment = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    text: column.text(),
    project: column.number({ references: () => Project.columns.id })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Company,
    Employee,
    Project,
    Comment
  },
});
