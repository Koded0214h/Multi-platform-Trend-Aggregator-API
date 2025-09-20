from pytrends.request import TrendReq
from pytrends.exceptions import ResponseError

def fetch_google_trends():
    try:
        pytrends = TrendReq()
        trending = pytrends.trending_searches(pn="united_states")
        return [{"title": t} for t in trending[0].tolist()]
    except ResponseError:
        return [{"title": "Google Trends not available"}]
