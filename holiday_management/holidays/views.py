from django.shortcuts import render

# Create your views here.
import requests
from django.core.cache import cache
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def get_holidays(request):
    country = request.GET.get('country')
    year = request.GET.get('year')

    if not country or not year:
        return Response({"error": "Country and year are required."}, status=status.HTTP_400_BAD_REQUEST)

    cache_key = f"holidays_{country}_{year}"
    cached_data = cache.get(cache_key)
    if cached_data:
        return Response(cached_data)

    url = f"https://calendarific.com/api/v2/holidays?api_key={settings.CALENDARIFIC_API_KEY}&country={country}&year={year}"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json().get('response', {}).get('holidays', [])
        cache.set(cache_key, data, 60 * 60 * 24)  # Cache for 24 hours
        return Response(data)
    else:
        return Response({"error": "Failed to fetch holiday data."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
