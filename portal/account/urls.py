from django.urls import path

from account import views

urlpatterns = [
    # path('', views.index, name='index'),
    path('index', views.index, name='index'),
    path('login',views.loginpage, name='loginpage'),
    # path('test',views.test2, name='test2'),
    path('test',views.test, name='test'),
    path('hrhome',views.hrhome, name='hrhome'),
    path('userhome',views.userhome, name='userhome'),
    path('home',views.homepage, name='home'),
    # path('test',views.test2, name='test2'),
    path('userdashhome',views.userdash,name='userdashhome'),
    path('register',views.register, name='register'),
    path('userdashboard',views.userdashboard,name='userdashboard'),
]
