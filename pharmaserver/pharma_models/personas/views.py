from django.shortcuts import render

from rest_framework import serializers, viewsets
from pharma_models.personas.models import Persona

# Create your views here.
class PersonaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Persona
        fields = ('codigo', 'nombre', 'estado')


class PersonaViewSet(viewsets.ModelViewSet):
    queryset = Persona.objects.all()
    serializer_class = PersonaSerializer