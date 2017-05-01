from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter


from .views import ProductoViewSet, CategoriaViewSet, RecordVentaViewSet, RecordVendedorViewSet, PedidoViewSet


# from .api_views import load_menu

#router = ExtendedSimpleRouter()
router = routers.DefaultRouter()

router.register(r'productos', ProductoViewSet)

router.register(r'categorias', CategoriaViewSet)

router.register(r'pedidos', PedidoViewSet)

router.register(r'recordventas', RecordVentaViewSet)

router.register(r'recordvendedores', RecordVendedorViewSet)

urlpatterns = [

    url(r'^producto/$', ProductoViewSet),

    url(r'^categoria/$', CategoriaViewSet),

    url(r'^pedido/$', PedidoViewSet),

    url(r'^recordventa/$', RecordVentaViewSet),

    url(r'^recordvendedor/$', RecordVendedorViewSet),

    url(r'^', include(router.urls)),
]
