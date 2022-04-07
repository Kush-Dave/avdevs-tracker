from django.shortcuts import render,redirect
from account.models import Register,datati
# from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


# Create your views here.
def index(request):
  return render(request,'index.html')

def homepage(request):
  return render(request,'home.html')

def userhome(request):
  return render(request,'userhome.html')

def userdash(request):
  return render(request,'sidebar-dashcontent.html')

def userdashboard(request):
  return render(request,'sidebar-dashcontent.html')

def register(request):
  if request.method == 'POST':
    emp_id = request.POST.get('emp_id')
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    email = request.POST.get('email')
    password = request.POST.get('password')
    project = request.POST.get('project')
    
    regi = Register(request, emp_id=emp_id,first_name=first_name,last_name=last_name,email=email,password=password,project=project)
    regi.save()
  return render(request,'register.html')

def loginpage(request):
  if request.method == 'POST':
    email1 = request.POST.get('email1')
    password1 = request.POST.get('password1')
    r_email = Register.objects.get(email = email1)
    
    #user = authenticate(request, email = email1, password = password1)
      
    if r_email.email == email1 and r_email.password == password1:
      return redirect('index')
    else:
      messages.error(request, "Bad Credentials!")
  return render(request,'login.html')

# def test(request):
#   rh = Register.objects.all().filter(project='roadhow')
#   context={
#     'rh' : rh,
#   }
#   return render(request, 'test.html',context)

'''
def test(request):
  all_data = Register.objects.all()
  selected_value = None
  projectt = None
  project_search=Register.objects.values_list('project',flat=True).distinct()
  print(project_search)
  if request.method == 'POST':
    selected_value = request.POST.get('project_na')
    print(selected_value)
    projectt = Register.objects.filter(project__iexact = selected_value)
    
  data ={
          'project_search':project_search,
          'all_data' : all_data,      
          'projectt':projectt,
        }


  
  for data in all_data:
    print(data)
  print(project_search[0])
  
  return render(request, 'test.html', data)
'''
'''
def test2(request):
  if request.method == 'GET':
    project = request.GET.get['project_name']
    print(project)
'''

  # emp_count = roadhow.count()
  # data_a = [data.values()]
  # print(data_a)
  # context = {
  #     'data' : data,
  #     # 'emp_count' : emp_count,
  # }
  
  # proj=Register.objects.all()
  # roadhow = Register.objects.all().filter(project='roadhow')
  # avtracker = Register.objects.all().filter(project='avtracker')
  # clara = Register.objects.all().filter(project='clara')
  # streetai = Register.objects.all().filter(project='streetai')
  # ninetofive = Register.objects.all().filter(project='9tofive')


def hrhome(request):
  street = Register.objects.all().filter(project='Street_AI').count()
  roadhow = Register.objects.all().filter(project='roadhow').count()
  avtracker = Register.objects.all().filter(project='av_tracker').count()
  clara = Register.objects.all().filter(project='clara').count()
  nineto = Register.objects.all().filter(project='ninetofive').count()
  # messa = models.Contact.objects.all()
  empd = {'0':street, '1':roadhow, '2':avtracker, '3':clara, '4':nineto}
  
  context={
    'empd':empd,
  }
  return render(request,'hrhomepage.html',context)


def test(request):
  dat = datati.objects.all()
  return render(request,'test.html')