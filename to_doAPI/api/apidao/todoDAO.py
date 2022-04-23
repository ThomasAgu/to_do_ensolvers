from ..Models.Todo import Todo


class TodoDao():
    def getTodos():
        return list(Todo.objects.values())
    
    def getTodosByID(id):
        return list(Todo.objects.filter(id=id).values())

    def getTodosByGroupID(id):
        return list(Todo.objects.filter(group=id).values())

    def getOneTodoById(id):
        return Todo.objects.get(id=id)

    def postTodo(info, finished, group):
        Todo.objects.create(info=info, finished=finished, group=group )

    def  updateTodo(todo , info, finished):
        todo.info= info
        todo.finished=finished
        todo.save()
        pass

    def deleteTodo(id):
        Todo.objects.filter(id=id).delete()

    def delByGrouID(id):
        Todo.objects.filter(group=id).delete()