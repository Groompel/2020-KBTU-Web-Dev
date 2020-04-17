from django.urls import path
from . import views
from rest_framework.views import obtain_jwt_token

urlpatterns = [

    path('login/', obtain_jwt_token),
    path('companies/', views.CompanyListView.as_view()),
    path('companies/<int:company_id>/', views.CompanyDetailsView.as_view()),
    path('companies/<int:company_id>/vacancies/', views.CompanyVacanciesListView.as_view()),
    path('vacancies/', views.VacanciesListView.as_view()),

]