import json
import requests
from TracerIND.serializers import PatientSerializer
from doctor.models import Doctor
from hospital.models import Hospital
from mandal.models import Mandal
from patient.models import Patient
from PHC.models import PHC
from village.models import Village
from village_sec.models import Village_sec
from rest_framework.response import Response
from django.shortcuts import render , redirect , HttpResponse
from rest_framework.decorators import api_view
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, HttpResponseServerError

@api_view(['GET'])
def APIView(request):
    urlpatterns = {
    "LIST":"/",
    "CREATE":"AddPatient/",
    "DELETE":"DeletePatient/",
    "UPDATE":"UpdatePatient/",
    "GET":"GetPatient/",

}
    return Response(urlpatterns)


@api_view(['POST'])
def AddPatient(request):
    print(request.data)
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status = 200)
    print(serializer.errors)
    return Response("Something Went Wrong")

@api_view(['POST'])
def DeletePatient(request):
    print(request.data)
    pk = request.data.get("pkid")
    try:
        patient = Patient.objects.get(pkid = pk)
        patient.delete()
        return Response(status = 200)
    except Exception as e :
        return Response(e)

@api_view(['POST'])
def UpdatePatient(request):
    print(request.data)
    pk = request.data.get("pkid")
    patient = Patient.objects.get(pkid = pk)
    serializer = PatientSerializer(instance = patient , data = request.data , partial = True)
    if serializers.is_valid():
        serializers.save()
        return HttpResponse(status = 200)
    else:
        return Response("Something Went Wrong")

@api_view (['POST'])
def GetPatient(request):
    print(request.data)
    pk = request.data.get("pkid")
    patient = Patient.objects.get(pkid = pk)
    serializer = PatientSerializer(patient)
    if serializer.is_valid():
        return Response(serializer.data)
    else:
        return Response("Something Went Wrong")



# #ANDROID APIS

@api_view
def DroidDump(request):
    data = request.data
    for item in data :
        serializer = PatientSerializer(item)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response("Something Went Wrong")
    return Response(status=200)    
