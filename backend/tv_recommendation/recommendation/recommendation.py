from .models import UserRating, TVShow
from django.db.models import Avg

def get_user_recommendations(user_id):
    # Get shows the user has rated highly
    rated_shows = UserRating.objects.filter(user_id=user_id).order_by('-rating')
    
    if rated_shows.exists():
        # Recommend based on the top-rated genre
        top_genre = rated_shows.first().tv_show.genre
        recommended_shows = TVShow.objects.filter(genre=top_genre).exclude(id__in=[r.tv_show.id for r in rated_shows])
    else:
        # If no ratings, recommend top-rated shows overall
        recommended_shows = TVShow.objects.annotate(avg_rating=Avg('userrating__rating')).order_by('-avg_rating')

    return [{'id': show.id, 'title': show.title, 'image_url': show.image_url} for show in recommended_shows]