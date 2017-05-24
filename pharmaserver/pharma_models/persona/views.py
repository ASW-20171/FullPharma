from django.shortcuts import render
from rest_framework import serializers, viewsets
from .models import UsuarioMdl, TipoDocMdl, ClienteMdl, ProveedorMdl

# Create your views here.

class UsuarioSerializer(serializers.ModelSerializer):
#    tipo_categoria = serializers.SerializerMethodField()

    class Meta:
        model = UsuarioMdl

#    def get_tipo_categoria(self, obj):
#        return obj.get_tipo_categoria_display()

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = UsuarioMdl.objects.all()
    serializer_class = UsuarioSerializer

class TipoDocSerializer(serializers.ModelSerializer):

    # producto = ProductoSerializer(read_only=True)

    class Meta:
        model = TipoDocMdl

class TipoDocViewSet(viewsets.ModelViewSet):
    queryset = TipoDocMdl.objects.all()
    serializer_class = TipoDocSerializer

class ClienteSerializer(serializers.ModelSerializer):

    # producto = ProductoSerializer(read_only=True)

    class Meta:
        model = ClienteMdl

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = ClienteMdl.objects.all()
    serializer_class = ClienteSerializer

class ProveedorSerializer(serializers.ModelSerializer):

    # producto = ProductoSerializer(read_only=True)

    class Meta:
        model = ProveedorMdl

class ProveedorViewSet(viewsets.ModelViewSet):
    queryset = ProveedorMdl.objects.all()
    serializer_class = ProveedorSerializer
