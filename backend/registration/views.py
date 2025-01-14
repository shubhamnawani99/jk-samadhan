from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegistrationSerializer
from .models import Registration

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        print(serializer.initial_data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful!', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_info(request):
    try:
        registration = Registration.objects.latest('id')
        serializer = RegistrationSerializer(registration)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Registration.DoesNotExist:
        return Response({'error': 'No registration data found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_all_users(request):
    registrations = Registration.objects.all()
    serializer = RegistrationSerializer(registrations, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)