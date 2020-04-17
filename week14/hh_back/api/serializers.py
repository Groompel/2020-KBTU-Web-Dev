from .models import Company, Vacancy

from rest_framework import serializers

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()
    def create(self, data):
        company = Company.objects.create(
            name=data.get('name'),
            description=data.get('description'),
            city=data.get('city'),
            address=data.get('address'),
        )
        return company

    def update(self, instance, data):
        instance.name = data.get('name')
        instance.description = data.get('description')
        instance.city = data.get('city')
        instance.address = data.get('address')
        instance.save()
        return instance


class CompanyModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address')

class VacancyModelSerializer(serializers.ModelSerializer):
    
    company_id = serializers.IntegerField()

    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company_id')


class CompanyVacanciesSerializer(serializers.ModelSerializer):
    
    vacancies = VacancyModelSerializer(many=True, read_only=True)
    
    class Meta: 
        model = Company
        fields = ('id', 'name', 'description', 'vacancies')


class VacancySerializer(serializers.Serializer):
    id= serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company_id = serializers.IntegerField()
    company = serializers.CharField(required=False)

    def create(self, data):
        print(data)
        company = Company.objects.get(id = data.get('company_id'))
        vacancy = Vacancy.objects.create(
            name=data.get('name'),
            description=data.get('description'),
            salary=data.get('salary'),
            company_id = data.get('company_id'),
            company=company
        )
        return vacancy

    def update(self, instance, data):
        instance.name = data.get('name')
        instance.description = data.get('description')
        instance.salary = data.get('salary')
        instance.company = data.get('company')
        instance.save()
        return instance