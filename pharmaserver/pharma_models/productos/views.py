from django.shortcuts import render

from rest_framework import serializers, viewsets
from pharma_models.productos.models import Producto

# Create your views here.
class ProductoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Producto
        fields = ('codigo', 'nombre', 'estado')


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer