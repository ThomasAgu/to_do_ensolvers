import json
from tokenize import group
from django import dispatch
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View
#from .models import Todo
from .Models.Todo import Todo
from .Models.Group import Group

#DAO
from .apidao.todoDAO import TodoDao
from .apidao.groupDAO import GroupDAO

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
            todo=Todo.objects.get(id=id)
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


class GroupView(View):
    
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if (id > 0):
            groups=GroupDAO.getGroupsById(id)
            todos= TodoDao.getTodosByGroupID(id)
            if len(groups)>0:
                group = groups[0]
                data= {'message': 'Success', 'groups': groups, 'todos': todos}
            else:
                data= {'message': 'todo not found'}
            return JsonResponse(data)
        else:
            groups= GroupDAO.getGroups()
            if (len(groups) >0):
                data={'message':'success', 'groups': groups}
            else:
                data={'message':'empty'}
            return JsonResponse(data)

    def post(self,request):
        jd = json.loads(request.body)
        GroupDAO.postGroup(name=jd['name'])
        data={'message':'success'}
        return JsonResponse(data)
    

    def delete(self, request, id):
        groups= list(Group.objects.filter(id=id).values())
        if len(groups) >0 :
            TodoDao.delByGrouID(id)
            GroupDAO.delGroup(id)
            data={'message':'Group deleted'}
        else:
            data = {'message': 'Group not found'}
        return JsonResponse(data)
