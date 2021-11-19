{
  type ToDo = {
    id: string;
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  type ToDoID = Pick<ToDo, 'id'>;
  type ToDoData = Omit<ToDo, 'priority' | 'label'>;

  const todo: ToDo = {
    id: '1',
    title: 'study',
    description: 'study hard',
    label: 'study',
    priority: 'low',
  };

  function getTodo2(id: ToDoID): ToDo {
    return todo;
  }

  function getTodoData2(id: ToDoID): ToDoData {
    return todo;
  }
}
