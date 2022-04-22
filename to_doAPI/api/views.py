import json
from tokenize import group
from django import dispatch
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from .models import Todo
from .models import Group

# Create your views here.
class TodoView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    
    def get(self, request, id=0):
        if (id > 0):
            todos= list(Todo.objects.filter(id=id).values())
            if len(todos)>0:
                todo = todos[0]
                data= {'message': 'Success', 'todo': todo}
            else:
                data= {'message': 'todo not found'}
            return JsonResponse(data)
        else:
            todos= list(Todo.objects.values())
            if (len(todos) >0):
                data={'message':'success', 'todos': todos}
            else:
                data={'message':'empty'}
            return JsonResponse(data)
    
    def post(self,request):
        jd = json.loads(request.body)
        Todo.objects.create(info=jd['info'], finished=jd['finished'], group=jd['group'])
        data={'message':'success'}
        return JsonResponse(data)
    
    
    def put(self, request, id):
        jd = json.loads(request.body)
        todos= list(Todo.objects.filter(id=id).values())
        if len(todos)>0:
            todo=Todo.objects.get(id=id)
            todo.info=jd['info']
            todo.finished=jd['finished']
            todo.save()
            data={'data':todo.info}
        else:
            data= {'message': 'todo not found'}
        return JsonResponse(data)
        
    def delete(self, request, id):
        todos= list(Todo.objects.filter(id=id).values())
        if len(todos) >0 :
            Todo.objects.filter(id=id).delete()
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
            groups= list(Group.objects.filter(id=id).values())
            todos= list(Todo.objects.filter(group=id).values())
            if len(groups)>0:
                group = groups[0]
                data= {'message': 'Success', 'groups': groups, 'todos': todos}
            else:
                data= {'message': 'todo not found'}
            return JsonResponse(data)
        else:
            groups= list(Group.objects.values())
            if (len(groups) >0):
                data={'message':'success', 'groups': groups}
            else:
                data={'message':'empty'}
            return JsonResponse(data)

    def post(self,request):
        jd = json.loads(request.body)
        Group.objects.create(name=jd['name'])
        data={'message':'success'}
        return JsonResponse(data)
    

    def delete(self, request, id):
        groups= list(Group.objects.filter(id=id).values())
        if len(groups) >0 :
            Todo.objects.filter(group=id).delete()
            Group.objects.filter(id=id).delete()
            #Borrar los todos que entran aca
            data={'message':'Group deleted'}
        else:
            data = {'message': 'Group not found'}
        return JsonResponse(data)
