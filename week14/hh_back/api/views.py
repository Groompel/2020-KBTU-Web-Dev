
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Vacancy, Company
from .serializers import CompanySerializer, VacancySerializer, CompanyModelSerializer, VacancyModelSerializer, CompanyVacanciesSerializer



class CompanyListView(APIView):
    def get(self, req):
        companies = Company.objects.all()
        ser = CompanyModelSerializer(companies, many=True)
        return Response(ser.data)
    def post(self, req):
        ser = CompanyModelSerializer(data = req.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response({'errors': ser.errors}, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, req):
        Company.objects.all().delete()
        return Response({'deleted': True}, status=status.HTTP_200_OK)


class CompanyDetailsView(APIView):
    
    def get_company(self, id):
        try:
            return Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

    def get(self, req, company_id):
        ser = CompanyModelSerializer(self.get_company(company_id))
        return Response(ser.data)
    
    def put(self, req, company_id):
        ser = CompanyModelSerializer(instance=self.get_company(company_id), data=req.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_200_OK)
        return Response({'errors': ser.errors}, status=status.HTTP_400_BAD_REQUEST)

class CompanyVacanciesListView(APIView):
    def get_company(self, id):
        try:
            return Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)
    def get(self, req, company_id):
        ser = CompanyVacanciesSerializer(self.get_company(company_id))
        return Response(ser.data)


class VacanciesListView(APIView):
    
    def get(self, req):
        ser = VacancyModelSerializer(Vacancy.objects.all(), many=True)
        return Response(ser.data)
    def post(self, req):
        ser = VacancyModelSerializer(data=req.data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data, status=status.HTTP_201_CREATED)
        return Response({'errors': ser.errors}, status=status.HTTP_400_BAD_REQUEST)


# @csrf_exempt
# def companies_list(request):
#     if request.method == 'GET':
#         ser = CompanyModelSerializer(Company.objects.all(), many=True)
#         return JsonResponse(ser.data, safe=False)
#     elif request.method == 'POST':
#         print(request.body)
#         body = json.loads(request.body)
#         ser = CompanySerializer(data=body)
#         if ser.is_valid():
#             ser.save()
#             return JsonResponse(ser.data)

#         return JsonResponse({'errors': ser.errors})

#     elif request.method == 'DELETE':
#         pass;

# @csrf_exempt
# def company_details(request, company_id):
#     try:
#         company = Company.objects.get(id=company_id)
#     except Company.DoesNotExist as e:
#         return JsonResponse({'errors': str(e)})
#     if request.method == 'GET':
#         ser = CompanySerializer(company)
#         return JsonResponse(ser.data) 
#     elif request.method == 'PUT':
#         body = json.loads(request.body)
#         ser = CompanySerializer(instance=company, data=body)
#         if ser.is_valid():
#             ser.save()
#             return JsonResponse(ser.data)
#         return JsonResponse({'errors': ser.errors})
        
# @csrf_exempt
# def vacancies_by_company(request, company_id):
#     try:
#         company = Company.objects.get(id=company_id)
#     except Company.DoesNotExist as e:
#         return JsonResponse({'errors': str(e)})
#     if request.method == 'GET':
#         vacancies = Vacancy.objects.filter(company=company)
#         ser = VacancySerializer(vacancies, many=True)
#         return JsonResponse(ser.data, safe=False)
#     if request.method == 'POST':
#         body = json.loads(request.body)
#         body.update({'company_id': company.id})
#         print(body)
#         ser = VacancySerializer(data=body)
#         if ser.is_valid():
#             ser.save()
#             return JsonResponse(ser.data)
#         return JsonResponse({'errors': ser.errors})

# def vacancies_list(request):
#     if request.method == 'GET':
#         ser = VacancySerializer(Vacancy.objects.all(), many=True)
#         return JsonResponse(ser.data, safe=False)

# def vacancy_details(request, vacancy_id):
#     if request.method == 'GET':
#         vacancy = Vacancy.objects.get(id=vacancy_id)
#         ser = VacancySerializer(vacancy)
#         return JsonResponse(ser.data)

# def top_ten_vacancies(request):
#     if request.method == 'GET':
#         vacancies = Vacancy.objects.order_by('-salary')[:10]
#         ser = VacancySerializer(vacancies, many=True)
#         return JsonResponse(ser.data, safe=False)

