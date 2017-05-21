from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter


from .views import VentaViewSet, DetalleVentaViewSet


# from .api_views import load_menu

#router = ExtendedSimpleRouter()
router = routers.DefaultRouter()

router.register(r'ventas', VentaViewSet)

router.register(r'detalleventas', DetalleVentaViewSet)

urlpatterns = [

    url(r'^venta/$', VentaViewSet),

    url(r'^detalleventa/$', DetalleVentaViewSet),

    url(r'^', include(router.urls)),
]
