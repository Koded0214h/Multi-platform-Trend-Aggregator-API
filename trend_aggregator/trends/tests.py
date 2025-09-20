from rest_framework.test import APITestCase
from django.urls import reverse

class YouTubeTrendsTest(APITestCase):
    def test_get_trends(self):
        url = reverse("trends")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertIn("results", response.data)
