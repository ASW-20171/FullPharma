from django.shortcuts import render
from rest_framework import serializers, viewsets
from .models import ProductoMdl

# Create your views here.

class ProductoSerializer(serializers.ModelSerializer):
#    tipo_categoria = serializers.SerializerMethodField()

    class Meta:
        model = ProductoMdl

#    def get_tipo_categoria(self, obj):
#        return obj.get_tipo_categoria_display()

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = ProductoMdl.objects.all()
    serializer_class = ProductoSerializer
#    permission_classes = [ModelPermission, ]
