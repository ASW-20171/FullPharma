from __future__ import unicode_literals

from django.db import models
from pharma_models.personas.models import Persona

class Cliente(models.Model):
    persona = models.ForeignKey(Persona)

    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"

    def __str__(self):
        return self.persona.nombres