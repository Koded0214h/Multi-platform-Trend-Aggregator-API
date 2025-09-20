from django.db import models

# Create your models here.

class Trend(models.Model):
    platform = models.CharField(max_length=50)  # e.g. Reddit, YouTube
    title = models.CharField(max_length=255)
    url = models.URLField()
    category = models.CharField(max_length=100, blank=True, null=True)
    engagement = models.IntegerField(default=0)  # likes/views/comments
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.platform} - {self.title[:50]}"