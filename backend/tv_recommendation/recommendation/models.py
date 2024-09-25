from django.db import models

class TVShow(models.Model):
    title = models.CharField(max_length=255)
    genre = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.URLField()  # URL to the show's image poster

    def __str__(self):
        return self.title

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.name

class UserRating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tv_show = models.ForeignKey(TVShow, on_delete=models.CASCADE)
    rating = models.FloatField()

    class Meta:
        unique_together = ('user', 'tv_show')  # Prevents duplicate ratings

    def __str__(self):
        return f"{self.user.name} rated {self.tv_show.title} - {self.rating}"