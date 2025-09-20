from rest_framework.views import APIView
from rest_framework.response import Response

from .services.reddit import fetch_reddit_trends
from .services.youtube import fetch_youtube_trends
from .services.googleTrends import fetch_google_trends
# Create your views here.

class TrendsAPIView(APIView):
    def get(self, request):
        reddit = fetch_reddit_trends()
        youtube = fetch_youtube_trends()
        google = fetch_google_trends()
        data = reddit + youtube + google
        return Response({"results": data})
