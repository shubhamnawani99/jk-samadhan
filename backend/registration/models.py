from django.db import models

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
    captcha = models.CharField(max_length=10, blank=True)

    def __str__(self):
        return self.first_name