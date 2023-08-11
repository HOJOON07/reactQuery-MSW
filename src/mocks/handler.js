import { rest } from "msw";

const todos = [
  {
    id: "1",
    title: "jimmy",
  },
  { id: "2", title: "jimmy2" },
  { id: "3", title: "jimmy3" },
  { id: "4", title: "jimmy4" },
  { id: "5", title: "jimmy5" },
];

export const handlers = [
  rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
    const { todo } = req.body;
    console.log(JSON.stringify(todo));
    todos.push(todo);
    return res(ctx.json(todos));
  }),
];
