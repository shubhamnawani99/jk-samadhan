from rest_framework import serializers
from .models import CustomUser   

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'password', 'is_citizen', 'is_admin']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['email'],  # Use email as username
            email=validated_data['email'],
            password=validated_data['password'],
            is_citizen=validated_data.get('is_citizen', False),
            is_admin=validated_data.get('is_admin', False)
        )
        return user