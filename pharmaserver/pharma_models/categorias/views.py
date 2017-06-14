from django.shortcuts import render
from rest_framework import serializers, viewsets
from pharma_models.categorias.models import Categoria

# Create your views here.
class CategoriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Categoria
        fields = ('codigo', 'nombre')


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer