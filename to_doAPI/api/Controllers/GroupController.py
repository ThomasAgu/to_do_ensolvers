import json
from tokenize import group
from django import dispatch
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views import View

#DAO
from ..apidao.todoDAO import TodoDao
from ..apidao.groupDAO import GroupDAO

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
        groups= GroupDAO.getGroupsById(id)
        if len(groups) >0 :
            TodoDao.delByGrouID(id)
            GroupDAO.delGroup(id)
            data={'message':'Group deleted'}
        else:
            data = {'message': 'Group not found'}
        return JsonResponse(data)
