from django.urls import path
from .views import get_tv_shows, get_recommendations

urlpatterns = [
    path('shows/', get_tv_shows),  # API to get shows by category, e.g., /shows?category=drama
    path('recommendations/', get_recommendations),  # API to get user recommendations
]