from django.shortcuts import render
from rest_framework import serializers, viewsets
from pharma_models.persona.views import ClienteSerializer
from pharma_models.almacen.views import ProductoSerializer
from .models import VentaMdl, DetalleVentaMdl

# Create your views here.

class DetalleVentaSerializer(serializers.ModelSerializer):
    producto = ProductoSerializer(read_only=True)
    class Meta:
        model = DetalleVentaMdl

class DetalleVentaViewSet(viewsets.ModelViewSet):
    queryset = DetalleVentaMdl.objects.all()
    serializer_class = DetalleVentaSerializer

class VentaSerializer(serializers.ModelSerializer):
    cliente = ClienteSerializer(read_only=True)
    detalle_venta = DetalleVentaSerializer(read_only=True)
    class Meta:
        model = VentaMdl

#    def get_tipo_categoria(self, obj):
#        return obj.get_tipo_categoria_display()

class VentaViewSet(viewsets.ModelViewSet):
    queryset = VentaMdl.objects.all()
    serializer_class = VentaSerializer
