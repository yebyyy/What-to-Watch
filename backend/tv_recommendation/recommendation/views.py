from django.shortcuts import render

# Create your views here.

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import TVShow
from .serializers import TVShowSerializer
from .recommendation import get_user_recommendations  # For "For You" recommendations

# API to fetch TV shows (by genre)
@api_view(['GET'])
def get_tv_shows(request):
    category = request.query_params.get('category', None)
    if category:
        shows = TVShow.objects.filter(genre__icontains=category)
    else:
        shows = TVShow.objects.all()

    serializer = TVShowSerializer(shows, many=True)
    return Response(serializer.data)

# API to fetch personalized recommendations for a user
@api_view(['GET'])
def get_recommendations(request):
    user_id = request.query_params.get('user_id')
    recommendations = get_user_recommendations(user_id)
    return Response(recommendations)