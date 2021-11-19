{
  type ToDo = {
    id: string;
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  type ToDoID = Pick<ToDo, 'id'>;
  type ToDoData = Pick<ToDo, 'description' | 'title'>;

  const todo: ToDo = {
    id: '1',
    title: 'study',
    description: 'study hard',
    label: 'study',
    priority: 'low',
  };

  function getTodo(id: ToDoID): ToDo {
    return todo;
  }

  function getTodoData(id: ToDoID): ToDoData {
    return todo;
  }
}
