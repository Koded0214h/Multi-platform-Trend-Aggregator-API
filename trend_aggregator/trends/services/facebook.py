import requests
from django.conf import settings

FACEBOOK_GRAPH_URL = "https://graph.facebook.com/v19.0"

def fetch_facebook_trends():
    access_token = settings.FACEBOOK_ACCESS_TOKEN  # store in settings or .env

    # Example: fetch recent posts from CNN page
    page_id = "cnn"  
    url = f"{FACEBOOK_GRAPH_URL}/{page_id}/posts"
    params = {
        "fields": "message,permalink_url,shares,likes.summary(true),comments.summary(true)",
        "access_token": access_token,
        "limit": 5
    }

    response = requests.get(url, params=params)
    if response.status_code != 200:
        return [{"title": "Facebook Trends not available"}]

    data = response.json().get("data", [])
    results = []
    for post in data:
        engagement = 0
        if "likes" in post:
            engagement += post["likes"]["summary"]["total_count"]
        if "comments" in post:
            engagement += post["comments"]["summary"]["total_count"]
        if "shares" in post:
            engagement += post["shares"].get("count", 0)

        results.append({
            "platform": "Facebook",
            "title": post.get("message", "No text"),
            "url": post.get("permalink_url"),
            "engagement": engagement
        })
    return results
