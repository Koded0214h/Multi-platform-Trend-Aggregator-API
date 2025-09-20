from pytrends.request import TrendReq
from pytrends.exceptions import ResponseError
import feedparser

def fetch_google_trends():
    try:
        pytrends = TrendReq(hl="en-US", tz=360)
        trending = pytrends.trending_searches(pn="united_states")

        return [
            {
                "platform": "Google Trends",
                "title": row,
                "url": None,
                "engagement": None,
            }
            for row in trending[0].tolist()
        ]

    except ResponseError as e:
        print("Pytrends failed:", e)

        # fallback to Google News RSS
        feed = feedparser.parse("https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en")
        return [
            {
                "platform": "Google News",
                "title": entry.title,
                "url": entry.link,
                "engagement": None,
            }
            for entry in feed.entries[:10]
        ]
