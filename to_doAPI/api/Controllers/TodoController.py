import json
from tokenize import group
from django import dispatch
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View


#Import the DAO
from ..apidao.todoDAO import TodoDao


# Create your views here.
class TodoView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    
    def get(self, request, id=0):
        if (id > 0):
            todos= TodoDao.getTodosByID(id)
            if len(todos)>0:
                todo = todos[0]
                data= {'message': 'Success', 'todo': todo}
            else:
                data= {'message': 'todo not found'}
            return JsonResponse(data)
        else:
            todos= TodoDao.getTodos()
            if (len(todos) >0):
                data={'message':'success', 'todos': todos}
            else:
                data={'message':'empty'}
            return JsonResponse(data)
    
    def post(self,request):
        jd = json.loads(request.body)
        TodoDao.postTodo(jd['info'], jd['finished'], jd['group'])
        data={'message':'success'}
        return JsonResponse(data)
    
    
    def put(self, request, id):
        jd = json.loads(request.body)
        todos=  TodoDao.getTodosByID(id=id) 
        if len(todos)>0:
            todo=TodoDao.getOneTodoById(id)
            TodoDao.updateTodo(todo , jd['info'], jd['finished'])
            data={'data':todo.info}
        else:
            data= {'message': 'todo not found'}
        return JsonResponse(data)
        
    def delete(self, request, id):
        todos= TodoDao.getTodosByID(id)
        if len(todos) >0 :
            TodoDao.deleteTodo(id)
            data={'message':'todo deleted'}
        else:
            data = {'message': 'todo not found'}
        return JsonResponse(data)