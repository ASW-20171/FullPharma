from django.shortcuts import render
from rest_framework import serializers, viewsets
from pharma_models.persona.views import ProveedorSerializer
from pharma_models.almacen.views import ProductoSerializer
from .models import CompraMdl, DetalleCompraMdl

# Create your views here.

class DetalleCompraSerializer(serializers.ModelSerializer):
    producto = ProductoSerializer(read_only=True)
    class Meta:
        model = DetalleCompraMdl

class DetalleCompraViewSet(viewsets.ModelViewSet):
    queryset = DetalleCompraMdl.objects.all()
    serializer_class = DetalleCompraSerializer

class CompraSerializer(serializers.ModelSerializer):
    detalle_compra = DetalleCompraSerializer(read_only=True)
    proveedor = ProveedorSerializer(read_only=True)
    class Meta:
        model = CompraMdl

#    def get_tipo_categoria(self, obj):
#        return obj.get_tipo_categoria_display()

class CompraViewSet(viewsets.ModelViewSet):
    queryset = CompraMdl.objects.all()
    serializer_class = CompraSerializer