from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('csrf/', views.csrf),
    path('ping/', views.ping),
    path('rooms/', views.RoomsList.as_view()),
    path('rooms/<int:pk>/', views.RoomDetail.as_view()),
    path('users/', views.UsersList.as_view()),
    path('topics/', views.TopicsList.as_view()),
]
