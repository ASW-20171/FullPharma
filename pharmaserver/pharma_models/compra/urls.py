from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter


from .views import CompraViewSet, DetalleCompraViewSet


# from .api_views import load_menu

#router = ExtendedSimpleRouter()
router = routers.DefaultRouter()

router.register(r'compras', CompraViewSet)

router.register(r'detallecompras', DetalleCompraViewSet)

urlpatterns = [

    url(r'^compra/$', CompraViewSet),

    url(r'^detallecompra/$', DetalleCompraViewSet),

    url(r'^', include(router.urls)),
]
