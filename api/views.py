import json
import requests
from TracerIND.serializers import PatientSerializer,MandalSerializer,PHCSerializer, VillageSecSerializer, VillageSerializer
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

#LIST APIs
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

#FOR INIT PURPOSE
@api_view(['POST'])
def parseVillage(request):
    i=1
    for item in request.data :
        vs = {
            "village_id" : i,
            "name" : item.get("Village"),
            "village_sec" : (Village_sec.objects.get(name__iexact = (item.get("Village_Sec"))).villagesec_id)
        }
        print(vs)
        serializer = VillageSerializer(data = vs)
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)
        i=i+1
    return Response("TEST OK")

@api_view(['POST'])
def parseVillageSec(request):
    i=1
    for item in request.data :
        vs = {
            "villagesec_id" : i,
            "name" : item.get("Village"),
            "PHC" : (PHC.objects.get(name__iexact = (item.get("PHC"))).PHC_id)
        }
        print(vs)
        serializer = VillageSerializer(data = vs)
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)
        i=i+1
    return Response("TEST OK")

@api_view(['POST'])
def addmandal(request):
    serializer = MandalSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=200)
    return Response("Error")

@api_view(['POST'])
def addphc(request):
    print(Mandal.objects.get(name = request.data.get("mandal")))
    phc = {
        "PHC_id" : request.data.get("PHC_id"),
        "name" : request.data.get("name"),
        "mandal" : (Mandal.objects.get(name = request.data.get("mandal")).mandal_id)
    }
    serializer = PHCSerializer(data = phc)
    if serializer.is_valid():
        serializer.save()
        return Response(status = 200)
    print(serializer.errors)
    return Response("Error")

@api_view(['POST'])
def updatephc(request):
    phc = PHC.objects.get(PHC_id = request.data.get("PHC_id"))
    serializer = PHCSerializer(phc,data = request.data,partial = True)
    if serializer.is_valid():
        serializer.save()
        return Response(status = 200)
    return Response(serializer.errors)

#CRUD FOR PATIENT

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
