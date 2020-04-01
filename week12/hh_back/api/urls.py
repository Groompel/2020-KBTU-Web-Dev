from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('companies', views.getAllCompanies, name='List of all companies'),
    path('companies/<int:id>', views.getOneCompany, name='One company'),
    path('companies/<int:id>/vacancies', views.getVacanciesByCompany, name='List of vacancies by company'),
    path('vacancies', views.getAllVacancies, name='List of all vacancies'),
    path('vacancies/<int:id>', views.getOneVacancy, name='One vacancy'),
    path('vacancies/top_ten', views.getTopTenVacancies, name='Top ten vacancies by salary')
]