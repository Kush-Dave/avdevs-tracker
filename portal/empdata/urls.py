from django.urls import path

from empdata import views

urlpatterns = [
    # path('',views.base, name='home'),
    # path('register', views.register , name='register'),
    # path('login', views.login , name='login'),
    path('home', views.index, name='home'),
    # path('test', views.testpage, name='test'),
    path('sidebarbase', views.sidebarbase, name='sidebarbase'),
    # path('hrhomepage', views.hrhomepage, name='hrhomepage'),
    # path('userhome', views.userhome, name='userhome'),
    path('dashcontent', views.dashcontent, name='dashcontent'),
    # path('contentpage', views.contentpage, name='contentpage'),
]