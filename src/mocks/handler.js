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
  // rest.get("http://localhost:3000/api/users", async (req, res, ctx) => {}),
];
