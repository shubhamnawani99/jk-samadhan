from django.urls import path
from .views import register, get_info, get_all_users

urlpatterns = [
    path('register/', register, name='register'),
    path('get-info/', get_info, name='get_info'),
    path('get-all-users/', get_all_users, name='get_all_users'),
]