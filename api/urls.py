from django.contrib import admin
from django.urls import path, include
from .views import ProjectInquiryView, ProjectsListAPIView, ProjectsListDetailView

app_name = 'api'


urlpatterns = [
    
    #страница формы
    path('project-inquiry/', ProjectInquiryView.as_view(), name='project-inquiry'),
    #список проектов
    path('projects-all/', ProjectsListAPIView.as_view(), name="projects"),
    #детальная страница проекта
    path('projects/<int:pk>/', ProjectsListDetailView.as_view(), name='project-detail'),
]
