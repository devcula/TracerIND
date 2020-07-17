from django.shortcuts import render

def index(request):
    return render(request,'frontend/client/build/index.html')
