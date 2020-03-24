interface Task {
  id: number,
  title: String,
  description: String,
  status: String,
}

export const TASKS = [
  {
    id: 0,
    title: "Make an assignment",
    description: "Make an assignment for Web Development",
    status: "new",
  },
  {
    id: 1,
    title: "Buy groceries",
    description: "Buy groceries at Magnum Cash and Carry",
    status: "new",
  },
  {
    id: 2,
    title: "Write an essay",
    description: "Write an essay for english lesson",
    status: "new",
  },
  {
    id: 3,
    title: "Cook dinner",
    description: "Cook dinner for family",
    status: "new",
  },
  {
    id: 4,
    title: "Do cleaning",
    description: "Finally clean my room",
    status: "new",
  },
]
