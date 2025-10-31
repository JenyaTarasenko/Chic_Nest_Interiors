
from django.db import models

class ProjectInquiry(models.Model):
    # --- 1️⃣ About Your Project ---
    SPACE_CHOICES = [
        ('house', 'House'),
        ('apartment', 'Apartment'),
        ('townhome', 'Townhome'),
        ('office', 'Office / Commercial'),
    ]
    PROJECT_TYPE_CHOICES = [
        ('new_build', 'New Build'),
        ('renovation', 'Renovation'),
        ('decoration', 'Decoration / Styling'),
    ]
    PROJECT_STAGE_CHOICES = [
        ('planning', 'Just starting to plan'),
        ('floor_plan', 'Have floor plan / drawings'),
        ('construction', 'Construction has started'),
        ('almost_finished', 'Almost finished — need design help'),
    ]
    ROOMS_CHOICES = [
        ('kitchen', 'Kitchen'),
        ('living_room', 'Living Room'),
        ('bathroom', 'Bathroom'),
        ('bedroom', 'Bedroom'),
        ('entryway', 'Entryway'),
        ('other', 'Other'),
    ]

    space_type = models.CharField(max_length=50, choices=SPACE_CHOICES)
    size = models.CharField(max_length=50)
    rooms = models.JSONField(default=list)  # список выбранных комнат
    project_type = models.CharField(max_length=50, choices=PROJECT_TYPE_CHOICES)
    project_stage = models.CharField(max_length=50, choices=PROJECT_STAGE_CHOICES)

    # --- 2️⃣ Your Style & Preferences ---
    preferred_style = models.CharField(max_length=100)
    favorite_colors = models.CharField(max_length=200, blank=True)
    disliked_colors = models.CharField(max_length=200, blank=True)
    atmosphere = models.CharField(max_length=200, blank=True)
    inspiration = models.FileField(upload_to='media/', blank=True, null=True)

    # --- 3️⃣ Budget & Timeline ---
    BUDGET_CHOICES = [
        ('under_15k', 'Under $15,000'),
        ('15_30k', '$15–30K'),
        ('30_60k', '$30–60K'),
        ('60k_plus', '$60K+'),
        ('not_sure', 'Not sure yet'),
    ]
    TIMELINE_CHOICES = [
        ('1_2_months', 'Within 1–2 months'),
        ('3_6_months', '3–6 months'),
        ('flexible', 'Flexible'),
    ]
    INVOLVEMENT_CHOICES = [
        ('full_service', 'Full service — you handle everything'),
        ('collaboration', 'Collaboration — we decide together'),
        ('e_design', 'Professional guidance (E-Design)'),
    ]

    budget = models.CharField(max_length=50, choices=BUDGET_CHOICES)
    timeline = models.CharField(max_length=50, choices=TIMELINE_CHOICES)
    involvement = models.CharField(max_length=50, choices=INVOLVEMENT_CHOICES)

    # --- 4️⃣ About You ---
    HEAR_ABOUT_CHOICES = [
        ('instagram', 'Instagram'),
        ('google', 'Google'),
        ('friend', 'Realtor / Friend'),
        ('other', 'Other'),
    ]
    hear_about = models.CharField(max_length=50, choices=HEAR_ABOUT_CHOICES)
    hear_about_other = models.CharField(max_length=100, blank=True)
    full_name = models.CharField(max_length=100)
    CONTACT_METHOD_CHOICES = [
        ('call', 'Call'),
        ('text', 'Text'),
        ('email', 'Email'),
    ]
    contact_method = models.CharField(max_length=20, choices=CONTACT_METHOD_CHOICES)
    phone = models.CharField(max_length=20, blank=True)
    city = models.CharField(max_length=100)
    additional_info = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.project_type}"


class Project(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название проекта")
    description = models.TextField(verbose_name="Описание проекта")
    area = models.CharField(max_length=100, verbose_name="Квадратных метров или других величин")  # можно хранить и текст, и цифры
    role = models.TextField(verbose_name="Роль в проекте")
    year = models.CharField(max_length=10, verbose_name="Год выполнения работы")
    location = models.CharField(max_length=255, verbose_name="Локация")

    
    image_1 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 1")
    image_2 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 2")
    image_3 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 3")
    image_4 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 4")
    image_5 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 5")
    image_6 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 6")
    image_7 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 7")
    image_8 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 8")
    image_9 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 9")
    image_10 = models.ImageField(upload_to='projects/', blank=True, null=True, verbose_name="Изображение 10")
    
    def __str__(self):
        return self.name

