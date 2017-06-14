
from django.db import models

# Create your models here.
class Categoria(models.Model):
    codigo = models.CharField(max_length=20)
    nombre = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = 'Categorias'

    def __str__(self):
        return self.nombre
