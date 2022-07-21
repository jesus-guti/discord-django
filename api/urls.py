from django.urls import URLPattern, path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('rooms/', views.RoomsList.as_view()),
    path('rooms/<int:pk>/', views.RoomDetail.as_view()),
]
