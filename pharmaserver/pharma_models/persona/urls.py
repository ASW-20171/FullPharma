from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter


from .views import TipoDocViewSet, ClienteViewSet, ProveedorViewSet
#UsuarioViewSet

# from .api_views import load_menu

#router = ExtendedSimpleRouter()
router = routers.DefaultRouter()

#router.register(r'usuarios', UsuarioViewSet)

router.register(r'tipodocs', TipoDocViewSet)

router.register(r'clientes', ClienteViewSet)

router.register(r'proveedor', ProveedorViewSet)

urlpatterns = [

    #url(r'^usuario/$', UsuarioViewSet),

    url(r'^tipodoc/$', TipoDocViewSet),

    url(r'^cliente/$', ClienteViewSet),

    url(r'^proveedor/$', ProveedorViewSet),

    url(r'^', include(router.urls)),
]
