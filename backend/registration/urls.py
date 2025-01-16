from django.urls import path
from .views import register, get_info, get_all_users, register_user, get_specific_user_info, CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', register, name='register'),
    path('get-info/', get_info, name='get_info'),
    path('get-all-users/', get_all_users, name='get_all_users'),
    path('register-user/', register_user, name='register_user'),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('user/<int:user_id>/', get_specific_user_info, name='get_specific_user_info'),
]