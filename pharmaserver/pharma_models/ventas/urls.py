from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter


from pharma_models.ventas.views import VentaViewSet


# from .api_views import load_menu

#router = ExtendedSimpleRouter()
router = routers.DefaultRouter()

router.register(r'ventas', VentaViewSet)

urlpatterns = [

    url(r'^venta/$', VentaViewSet),
    url(r'^', include(router.urls)),
]
