from django.db import models

class Product(models.Model):
    name = models.CharField(max_length = 50)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()


    def __str__(self):
        return self.name + " " + self.description

    def is_expensive(self):
        if price < 50:
            return 'Not expensive.'
        else:
            return 'Expensive'
        

class Category(models.Model):
    name = models.CharField(max_length = 50)
    def __str_(self):
        return self.name