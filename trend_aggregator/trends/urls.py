from django.urls import path
from . import views

urlpatterns = [
    path("trends/", views.TrendsAPIView.as_view(), name='trends')
]