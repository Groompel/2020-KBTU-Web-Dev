from django.shortcuts import render
from django.http import HttpResponse


def f(request):
    return HttpResponse('Another link?');

def index(request):
    return HttpResponse("This is an example of my work.")