{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return {
      ...todo,
      ...fieldsToUpdate,
    };
  }

  const todo: ToDo = {
    title: 'study',
    description: 'study hard',
    label: 'study',
    priority: 'low',
  };

  console.log(todo);
  const newTodo = updateTodo(todo, { priority: 'high' });
  console.log(newTodo);
}
