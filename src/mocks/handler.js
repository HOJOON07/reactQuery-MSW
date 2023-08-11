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
  rest.get("http://localhost:3001/api/todos", async (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.post("http://localhost:3001/api/todo", async (req, res, ctx) => {
    const { todo } = req.body;
    console.log(JSON.stringify(todo));
    todos.push(todo);
    return res(ctx.json(todos));
  }),
  rest.get("http://localhost:3001/api/projects", async (req, res, ctx) => {
    const pageIndex = req.url.searchParams.get("page");
    return res(
      ctx.json({
        projects: [
          {
            id: `1${pageIndex}`,
            name: `jimmy 1-${pageIndex}`,
          },
          { id: `2${pageIndex}`, name: `jimmy 2-${pageIndex}` },
          { id: `3${pageIndex}`, name: `jimmy 3-${pageIndex}` },
          { id: `4${pageIndex}`, name: `jimmy 4-${pageIndex}` },
          { id: `5${pageIndex}`, name: `jimmy 5-${pageIndex}` },
        ],
        hasMore: pageIndex < 4,
      })
    );
  }),
];
