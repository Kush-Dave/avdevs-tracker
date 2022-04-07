from email.policy import default
from pickle import TRUE
from django.db import models
from datetime import datetime

# Create your models here.
class Register(models.Model):
    emp_id= models.IntegerField(unique=True)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField(max_length=150)
    password = models.CharField(max_length=150)
    # project = models.CharField(max_length=150)
    project_choice = (
      ('RH','roadhow'),
      ('AT','avtracker'),
      ('CL','clara'),
      ('SA','streetai'),
      ('NF','ninetofive'),
    )
    project = models.CharField(choices=project_choice, max_length=100)
    
    image = models.ImageField(upload_to='photos',blank=True)
    # def __str__(self):
    #   return self.email
    
class datati(models.Model):
  data1 = models.CharField(max_length=250, blank=True)
  date = models.DateTimeField(default=datetime.now)