from rest_framework import serializers
from .models import ProjectInquiry, Project


# фрма
class ProjectInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectInquiry
        fields = '__all__'
 
# проекты       
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'