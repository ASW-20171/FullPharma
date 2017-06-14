from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter


from pharma_models.categorias.views import CategoriaViewSet


# from .api_views import load_menu

#router = ExtendedSimpleRouter()
router = routers.DefaultRouter()

router.register(r'categorias', CategoriaViewSet)

urlpatterns = [

    url(r'^categoria/$', CategoriaViewSet),
    url(r'^', include(router.urls)),
]
