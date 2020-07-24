from rest_framework import serializers
from doctor.models import Doctor
from hospital.models import Hospital
from mandal.models import Mandal
from patient.models import Patient
from PHC.models import PHC
from village.models import Village
from village_sec.models import Village_sec

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class HospitalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hospital
        fields = '__all__'

class MandalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mandal
        fields = '__all__'

class VillageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Village
        fields = '__all__'
        

class PHCSerializer(serializers.ModelSerializer):

    class Meta:
        model = PHC
        fields = '__all__'

class VillageSecSerializer(serializers.ModelSerializer):

    class Meta:
        model = Village_sec
        fields = '__all__'
