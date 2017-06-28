from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter


from pharma_models.personas.views import PersonaViewSet


# from .api_views import load_menu

#router = ExtendedSimpleRouter()
router = routers.DefaultRouter()

router.register(r'personas', PersonaViewSet)

urlpatterns = [

    url(r'^persona/$', PersonaViewSet),
    url(r'^', include(router.urls)),
]
