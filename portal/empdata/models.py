# from random import choices
from django.db import models
#from multiselectfield import MultiSelectField
# Create your models here.

class Project_ch(models.Model):
   
    project_choice = (
      ('RH','roadhow'),
      ('AT','avtracker'),
      ('CL','clara'),
      ('SA','streetai'),
      ('NF','ninetofive'),
    )
    
    
    project1 = models.CharField(choices=project_choice, max_length=100)
      
    def __str__(self):
      return self.project1, self.project_choice
