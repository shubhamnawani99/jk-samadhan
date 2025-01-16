from django.db import models
from django.contrib.auth.models import AbstractUser

class Registration(models.Model):
    first_name = models.CharField(max_length=50)
    middle_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50)
    gender = models.CharField(max_length=10)
    date_of_birth = models.DateField()
    state = models.CharField(max_length=50)
    district = models.CharField(max_length=50, blank=True)
    address = models.CharField(max_length=255)
    pincode = models.CharField(max_length=6)
    prefCommlangauge = models.CharField(max_length=10)
    mobile = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)

    def __str__(self):
        return self.first_name

class CustomUser(AbstractUser):
    is_citizen = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',  # Add related_name to avoid clashes
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',  # Add related_name to avoid clashes
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )