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
            i=i+1
        else:
            print(serializer.errors)
    return Response("TEST OK")

@api_view(['POST'])
def parseVillageSec(request):
    i=1
    for item in request.data :
        vs = {
            "villagesec_id" : i,
            "name" : item.get("Village_Sec"),
            "PHC" : (PHC.objects.get(name__iexact = (item.get("PHC"))).PHC_id)
        }
        print(vs)
        serializer = VillageSecSerializer(data = vs)
        if serializer.is_valid():
            serializer.save()
            i=i+1
        else:
            print(serializer.errors)
    return Response("TEST OK")

@api_view(['POST'])
def addmandal(request):
    serializer = MandalSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=200)
    return Response(serializer.errors)

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
    return Response(serializer.errors)

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
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['POST'])
def DeletePatient(request):
    pk = request.data.get("pkid")
    try:
        patient = Patient.objects.get(pkid = pk)
        patient.delete()
        return Response(status = 200)
    except Exception as e :
        return Response(e)

@api_view(['POST'])
def UpdatePatient(request):
    pk = request.data.get("pkid")
    patient = Patient.objects.get(pkid = pk)
    serializer = PatientSerializer(instance = patient , data = request.data , partial = True)
    if serializers.is_valid():
        serializers.save()
        return HttpResponse(status = 200)
    else:
        return Response(serializer.errors)
#DATA MATRIX APIs
@api_view(['POST'])
def GetPHCData(request):
    phc = (
        PHC.objects.filter(mandal = (Mandal.objects.get(name__iexact = request.data.get("mandal")).mandal_id))
    )
    serializer = PHCSerializer(phc, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def GetVillageSecData(request):
    villagesec=(
        Village_sec.objects.filter(PHC = (PHC.objects.get(name__iexact = request.data.get("PHC")).PHC_id))
    )
    serializer = VillageSecSerializer(villagesec, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def GetVillageData(request):
    village = (
        Village.objects.filter(village_sec = (Village_sec.objects.get(name__iexact = request.data.get("village_sec")).villagesec_id))
    )
    serializer = VillageSerializer(village, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def GetAllPatient(request):
    patientlist = Patient.objects.all()
    print(patientlist)
    serializer = PatientSerializer(data = patientlist,many = True)
    serializer.is_valid()
    return Response(serializer.data)


@api_view (['POST'])
def GetPatient(request):
    pk = request.data.get("pkid")
    patient = Patient.objects.get(pkid = pk)
    serializer = PatientSerializer(patient)
    if serializer.is_valid():
        return Response(serializer.data)
    else:
        return Response(serializer.errors)

@api_view(['POST'])
def GetPatientData_Village(request):
    village = request.data.get("village")
    patientlist = Patient.objects.filter(village = (Village.objects.get(name__iexact = request.data.get("village")).village_id))
    serializer = PatientSerializer(patientlist,many = True)
    return Response(serializer.data)

@api_view(['POST'])
def GetVIllageNames(request):
    village = (Village.objects.all())
    serializer = VillageSerializer(data = village, many = True)
    if serializer.is_valid():
        return Response(serializer.data)
    return Response(serializer.errors)

# #ANDROID APIS

@api_view
def DroidDump(request):
    data = request.data
    for item in data :
        serializer = PatientSerializer(item)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors)
    return Response(status=200)    
