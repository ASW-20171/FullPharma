from django.conf.urls import url, include
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter


from .views import ProductoViewSet


# from .api_views import load_menu

#router = ExtendedSimpleRouter()
router = routers.DefaultRouter()

router.register(r'almacen', ProductoViewSet)

#router.register(r'almacenes', AlmacenViewSet)

urlpatterns = [

    url(r'^almacen/$', ProductoViewSet),

#    url(r'^almacen/$', AlmacenViewSet),

    url(r'^', include(router.urls)),
]
