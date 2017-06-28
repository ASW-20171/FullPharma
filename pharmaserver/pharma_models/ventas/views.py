from django.shortcuts import render

from rest_framework import serializers, viewsets
from pharma_models.ventas.models import Venta

# Create your views here.
class VentaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Venta
        fields = ('cliente', 'detalle_venta', 'fecha', 'igv', 'numero', 'total')


class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer