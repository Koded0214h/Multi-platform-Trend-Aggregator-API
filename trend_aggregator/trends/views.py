from rest_framework.views import APIView
from rest_framework.response import Response

from .services.reddit import fetch_reddit_trends
from .services.youtube import fetch_youtube_trends
from .services.googleTrends import fetch_google_trends
# Create your views here.

class TrendsAPIView(APIView):
    def get(self, request):
        platform = request.query_params.get("platform")  # e.g., "reddit"
        limit = int(request.query_params.get("limit", 10))  # default = 10

        data = []

        if platform in [None, "reddit"]:
            reddit = fetch_reddit_trends()[:limit]
            data.extend(reddit)

        if platform in [None, "youtube"]:
            youtube = fetch_youtube_trends()[:limit]
            data.extend(youtube)

        if platform in [None, "google"]:
            google = fetch_google_trends()[:limit]
            data.extend(google)

        return Response({"results": data})
