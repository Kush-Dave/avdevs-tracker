from django.shortcuts import render
from account.models import Register
from empdata.models import Project_ch
# Create your views here.

def index(request):
  return render(request,'index.html')

def sidebarbase(request) :
    return render(request, 'sidebarbase.html')

def dashcontent(request) :
    return render(request, 'dashcontent.html')

def userdashpage(request) :
    return render(request, 'userhomepage.html')

def hrhomepage(request):
    
    roadhow = Register.objects.all().filter(project='roadhow')
    avtracker = Register.objects.all().filter(project='avtracker')
    clara = Register.objects.all().filter(project='clara')
    streetai = Register.objects.all().filter(project='streetai')
    ninetofive = Register.objects.all().filter(project='9tofive')
    
    empd = {'0': roadhow, '1': avtracker, '2':clara, '3':streetai, '4':ninetofive}
    # emp_count = roadhow.count()
    
    context = {
        'empd' : empd,
        # 'emp_count' : emp_count,
    }
    
    return render(request, 'hrhomepage.html',context)
  
def testpage(request):
  # proj=Register.objects.all()
  roadhow = Register.objects.all().filter(project='roadhow')
  avtracker = Register.objects.all().filter(project='avtracker')
  clara = Register.objects.all().filter(project='clara')
  streetai = Register.objects.all().filter(project='streetai')
  ninetofive = Register.objects.all().filter(project='9tofive')

  # proj=Project_ch.objects.all()
  project_search=Register.objects.values_list('project',flat=True).distinct()
  # if streetai:
  # for person in streetai:
  #   pre=person.emp_id
  #   print(pre)


  data = {'roadhow': roadhow,
          'avtracker': avtracker,
          'clara':clara,
          'streetai':streetai,
          'ninetofive':ninetofive,
          'project_search':project_search,
          }
  

  # emp_count = roadhow.count()
  # data_a = [data.values()]
  # print(data_a)
  # context = {
  #     'data' : data,
  #     # 'emp_count' : emp_count,
  # }
  return render(request, 'test.html', data)
