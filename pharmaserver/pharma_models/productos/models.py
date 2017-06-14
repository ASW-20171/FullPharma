
from django.db import models


# Create your models here.
class Producto(models.Model):
    codigo = models.CharField(max_length=20)
    nombre = models.CharField(max_length=100)
    estado = models.BooleanField(default = True)

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = 'Productos'

    def __str__(self):
        return self.nombre
