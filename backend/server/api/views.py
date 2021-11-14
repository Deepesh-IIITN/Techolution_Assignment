from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pickle
import os.path

@csrf_exempt
def saveData(request):
    if request.method == 'POST':
        payload = json.loads(request.body)
        file = "data.pkl"

        if(os.path.exists(file) == False):
            fileobj = open(file, 'wb')
            pickle.dump([],fileobj)
            fileobj.close()

        fileobj1 = open(file, 'rb')
        data = pickle.load(fileobj1)
        data.append(payload)
        fileobj = open(file, 'wb')
        pickle.dump(data,fileobj)
        fileobj.close()            

        response = json.dumps({"messages" : "success"})
        return HttpResponse(response, content_type='text/json')
    return HttpResponse(response, content_type='text/json')

def getData(request):
    if request.method == 'GET':
        file = "data.pkl"
        if(os.path.exists(file) == False):
            response = json.dumps([])
            return HttpResponse(response, content_type='text/json')
            
        fileobj = open(file, 'rb')
        data = pickle.load(fileobj)
        response = json.dumps(data)
        return HttpResponse(response, content_type='text/json')
    return HttpResponse(response, content_type='text/json')
