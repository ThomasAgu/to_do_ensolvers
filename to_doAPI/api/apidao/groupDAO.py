from ..Models.Group import Group

class GroupDAO():
    def getGroups():
        return list(Group.objects.values())
    
    def getGroupsById(id):
        return list(Group.objects.filter(id=id).values())

    def postGroup(name):
        Group.objects.create(name=name)

    def delGroup(id):
        Group.objects.filter(id=id).delete()
