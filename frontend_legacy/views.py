from django.shortcuts import render

def homepage(request):
    return render("frontend_legacy/index.html")
