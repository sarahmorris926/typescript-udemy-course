import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from "./types";

const url = 'http://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    interface Todo {
      id: number;
      title: string;
      completed: boolean;
    }

    dispatch({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};
