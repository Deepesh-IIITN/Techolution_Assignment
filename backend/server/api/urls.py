from django.urls import path
from . import views

urlpatterns = [
    path('save/', views.saveData),
    path('mydata/', views.getData),
]
