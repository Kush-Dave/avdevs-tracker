from django.contrib import admin
from account.models import Register,datati
# Register your models here.

class emp(admin.ModelAdmin):
    list_display = ('emp_id','email','project')
  
admin.site.register(Register,emp)

# class datat(admin.ModelAdmin):
admin.site.register(datati)