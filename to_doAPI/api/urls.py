from django.urls import path
#from .views import TodoView
from .Controllers.TodoController import TodoView
from .Controllers.GroupController import GroupView

urlpatterns=[
    path('todos/', TodoView.as_view(), name='todos_list'),
    path('todos/<int:id>', TodoView.as_view(), name='todos_process'),
    path('groups/', GroupView.as_view(), name='groups_list'),
    path('groups/<int:id>', GroupView.as_view(), name='groups_process')
]