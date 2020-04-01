from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import Vacancy, Company

# Create your views here.
def index(request):
    return HttpResponse("This works.");

def getAllCompanies(request):
    companies = Company.objects.all()
    companies = jsonifyList(companies)
    return JsonResponse(companies, safe=False)

def getOneCompany(request, id):
    try:
        company = Company.objects.get(id = id).to_json()
        return JsonResponse(company)
    except Company.DoesNotExist as e:
        data = {
            'error': str(e)
        }
        return JsonResponse(data)

def getVacanciesByCompany(request, id):
    try:
        company = Company.objects.get(id = id)
        vacancies = Vacancy.objects.filter(company = company)
        vacancies = jsonifyList(vacancies)
        return JsonResponse(vacancies, safe=False)
    except Company.DoesNotExist as e:
        data = {
            'error': str(e)
        }
        return JsonResponse(data)

def getAllVacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies = jsonifyList(vacancies)
    return JsonResponse(vacancies, safe=False)

def getOneVacancy(request, id):
    try: 
        vacancy = Vacancy.objects.get(id = id).to_json()
        return JsonResponse(vacancy)
    except Vacancy.DoesNotExist as e:
        data = {
            'error': str(e)
        }
        return JsonResponse(data)

def getTopTenVacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies = jsonifyList(vacancies)
    return JsonResponse(vacancies, safe=False)


def jsonifyList(listOfData):
    return [l.to_json() for l in listOfData]

