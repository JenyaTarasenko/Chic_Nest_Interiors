from django.contrib import admin
from .models import ProjectInquiry, Project

@admin.register(ProjectInquiry)
class ProjectInquiryAdmin(admin.ModelAdmin):
    list_display = [field.name for field in ProjectInquiry._meta.fields]
    search_fields = ("full_name", "email", "city")

@admin.register(Project)
class ProjectInquiryAdmin(admin.ModelAdmin):
    list_display = ('name', "description", "area", "role", "year", "location", "image_1","image_2","image_3", "image_4", "image_5", "image_6", "image_7", "image_8", "image_9", "image_10",)
  
