from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage
from .serializers import ProjectInquirySerializer, ProjectSerializer
from rest_framework.views import APIView
from .models import Project
from rest_framework import generics,permissions
from rest_framework.generics import RetrieveAPIView

# class ProjectInquiryView(APIView):
#     def post(self, request):
#         serializer = ProjectInquirySerializer(data=request.data)
#         if serializer.is_valid():
#             inquiry = serializer.save()

#             # Отправка на email
#             subject = f"New Project Inquiry from {inquiry.full_name}"
#             body = f"""
#             Project Type: {inquiry.project_type}
#             Space Type: {inquiry.space_type}
#             Size: {inquiry.size}
#             Rooms: {inquiry.rooms}
#             Stage: {inquiry.project_stage}
#             Preferred Style: {inquiry.preferred_style}
#             Favorite Colors: {inquiry.favorite_colors}
#             Disliked Colors: {inquiry.disliked_colors}
#             Atmosphere: {inquiry.atmosphere}
#             Budget: {inquiry.budget}
#             Timeline: {inquiry.timeline}
#             Involvement: {inquiry.involvement}
#             Hear About: {inquiry.hear_about} {inquiry.hear_about_other}
#             Full Name: {inquiry.full_name}
#             Contact Method: {inquiry.contact_method}
#             Phone: {inquiry.phone}
#             City: {inquiry.city}
#             Additional Info: {inquiry.additional_info}
#             """
#             email = EmailMessage(
#                 subject,
#                 body,
#                 'your_email@example.com',
#                 ['recipient@example.com'],
#             )

#             if inquiry.inspiration:
#                 email.attach(inquiry.inspiration.name, inquiry.inspiration.read(), inquiry.inspiration.content_type)

#             email.send(fail_silently=True)

#             return Response({"success": True}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# вся форма
class ProjectInquiryView(APIView):
    def post(self, request):
        serializer = ProjectInquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Saved successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
# список всех проектов
class ProjectsListAPIView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

# детальная  страница проекта 
class ProjectsListDetailView(RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    lookup_field = 'pk'
