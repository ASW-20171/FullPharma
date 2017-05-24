from django.shortcuts import render
from rest_framework import serializers, viewsets
from .models import CompraMdl, DetalleCompraMdl

# Create your views here.

class CompraSerializer(serializers.ModelSerializer):
#    tipo_categoria = serializers.SerializerMethodField()

    class Meta:
        model = CompraMdl

#    def get_tipo_categoria(self, obj):
#        return obj.get_tipo_categoria_display()

class CompraViewSet(viewsets.ModelViewSet):
    queryset = CompraMdl.objects.all()
    serializer_class = CompraSerializer

class DetalleCompraSerializer(serializers.ModelSerializer):

    # producto = ProductoSerializer(read_only=True)

    class Meta:
        model = DetalleCompraMdl

class DetalleCompraViewSet(viewsets.ModelViewSet):
    queryset = DetalleCompraMdl.objects.all()
    serializer_class = DetalleCompraSerializer