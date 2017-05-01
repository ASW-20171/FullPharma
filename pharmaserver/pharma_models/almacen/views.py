from django.shortcuts import render
from rest_framework import serializers, viewsets
from .models import ProductoMdl, CategoriaMdl, RecordVentaMdl, RecordVendedorMdl, PedidoMdl

# Create your views here.

class CategoriaSerializer(serializers.ModelSerializer):

    class Meta:
        model = CategoriaMdl

class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = CategoriaMdl.objects.all()
    serializer_class = CategoriaSerializer

class ProductoSerializer(serializers.ModelSerializer):
#    tipo_categoria = serializers.SerializerMethodField()
    categoria = CategoriaSerializer(read_only=True)

    class Meta:
        model = ProductoMdl

#    def get_tipo_categoria(self, obj):
#        return obj.get_tipo_categoria_display()

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = ProductoMdl.objects.all()
    serializer_class = ProductoSerializer
#    permission_classes = [ModelPermission, ]

class PedidoSerializer(serializers.ModelSerializer):

    class Meta:
        model = PedidoMdl

class PedidoViewSet(viewsets.ModelViewSet):
    queryset = PedidoMdl.objects.all()
    serializer_class = PedidoSerializer

class RecordVentaSerializer(serializers.ModelSerializer):

    class Meta:
        model = RecordVentaMdl

class RecordVentaViewSet(viewsets.ModelViewSet):
    queryset = RecordVentaMdl.objects.all()
    serializer_class = RecordVentaSerializer

class RecordVendedorSerializer(serializers.ModelSerializer):

    class Meta:
        model = RecordVendedorMdl

class RecordVendedorViewSet(viewsets.ModelViewSet):
    queryset = RecordVendedorMdl.objects.all()
    serializer_class = RecordVendedorSerializer