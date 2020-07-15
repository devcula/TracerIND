from django.contrib import admin
from django.urls import path, include
from api import urls as API
from . import views

#CRUD Functionality First, API For ANDROID Next and then API for GettingData and Filtering Data

urlpatterns = [
    path('',views.APIView,name = "APIList"), 
    path('AddPatient/',views.AddPatient,name = "AddPatient"),
    path('DeletePatient/',views.DeletePatient,name = "DeletePatient"),
    path('UpdatePatient/',views.UpdatePatient,name = "UpdatePatient"),
    path('GetPatient/',views.GetPatient,name = "GetPatient"),
    #ANDROID API
    path('DroidDump/',views.DroidDump,name = "DroidDump"),

]