from django.conf.urls import url
from django.urls import path
from .views import *

urlpatterns = [
    path('get-characters-and-stashtabs/', get_characters_and_stashtabs),
    path('get-character-items/', get_character_items),
    path('get-stashtab-items/', get_stashtab_items),
]
