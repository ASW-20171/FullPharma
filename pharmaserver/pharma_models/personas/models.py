from __future__ import unicode_literals

from django.db import models

class Persona(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    celular = models.IntegerField()
    email = models.CharField(max_length=100)
    persona_natural = models.BooleanField(default = True)
    numero_doc = models.IntegerField()

    class Meta:
        verbose_name = "Persona"
        verbose_name_plural = "Personas"

    def __str__(self):
        return self.nombres