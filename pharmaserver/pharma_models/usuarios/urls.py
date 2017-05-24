from django.conf.urls import include, url
from rest_framework import routers
from pharma_models.usuarios.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'', UserViewSet)

urlpatterns = [
    url(r'^usuarios', include(router.urls)),
]
