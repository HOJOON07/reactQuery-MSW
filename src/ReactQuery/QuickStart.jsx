import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, postTodo } from "./myapi";

export default function QuickStart() {
  const queryClinet = useQueryClient(); //App밖에서 감싸고 있는 쿼리 클라이언트를 가져올 수 있다.

  const query = useQuery("todos", getTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClinet.invalidateQueries("todos");
    },
  });

  if (query.isLoading) {
    return "Loading...";
  }
  if (query.error) {
    return "Error...";
  }

  //mutation은 쿼리키 없이 postTodo로 요청을 보냈고 요청이 성공하면 유즈쿼리로 매핑하는 todos라는 키를 가진 값의 다 invalidate해라.
  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Learn React-Query",
          });
        }}
      >
        ADD TODO
      </button>
    </div>
  );
}
