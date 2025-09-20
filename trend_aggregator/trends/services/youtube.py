from django.conf import settings
from googleapiclient.discovery import build

def fetch_youtube_trends():
    youtube = build("youtube", "v3", developerKey=settings.YT_API_KEY)
    request = youtube.videos().list(
        part="snippet,statistics",
        chart="mostPopular",
        regionCode="US",  # can change later
        maxResults=10
    )
    response = request.execute()
    return [
        {
            "platform": "YouTube",
            "title": item["snippet"]["title"],
            "url": f"https://www.youtube.com/watch?v={item['id']}",
            "engagement": int(item["statistics"].get("viewCount", 0)),
        }
        for item in response["items"]
    ]
