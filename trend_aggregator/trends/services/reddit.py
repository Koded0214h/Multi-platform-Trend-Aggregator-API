from django.conf import settings
import praw

def fetch_reddit_trends():
    reddit = praw.Reddit(
        client_id=settings.REDDIT_CLIENT_ID,
        client_secret=settings.REDDIT_SECRET_KEY,
        user_agent="TrendAggregator/0.1"
    )
    hot_posts = reddit.subreddit("all").hot(limit=10)
    return [
        {"platform": "Reddit", "title": p.title, "url": f"https://reddit.com{p.permalink}", "engagement": p.score}
        for p in hot_posts
    ]


fetch_reddit_trends()