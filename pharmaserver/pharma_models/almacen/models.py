from __future__ import unicode_literals

from django.db import models

class ProductoMdl(models.Model):
    codigo = models.IntegerField()
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    estado = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

    def __str__(self):
        return self.nombre