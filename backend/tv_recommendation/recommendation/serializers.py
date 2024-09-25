from rest_framework import serializers
from .models import TVShow, User, UserRating

class TVShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = TVShow
        fields = ['id', 'title', 'genre', 'description', 'image_url']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email']

class UserRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRating
        fields = ['user', 'tv_show', 'rating']