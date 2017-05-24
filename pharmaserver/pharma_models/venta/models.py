from __future__ import unicode_literals

from django.db import models
from pharma_models.persona.models import ClienteMdl
from pharma_models.almacen.models import ProductoMdl

class DetalleVentaMdl(models.Model):
    cantidad = models.IntegerField()
    producto = models.ForeignKey(ProductoMdl, null=True, blank=True)
    descripcion = models.CharField(max_length=100)
    
    class Meta:
        verbose_name = "Detalle Venta"
        verbose_name_plural = "Detalle Ventas"

    def __str__(self):
        return self.descripcion

class VentaMdl(models.Model):
    codigo = models.IntegerField()
    fecha = models.DateField()
    cliente = models.ForeignKey(ClienteMdl, null=True, blank=True)
    detalle_venta = models.ForeignKey(DetalleVentaMdl, null=True, blank=True)
    
    class Meta:
        verbose_name = "Venta"
        verbose_name_plural = "Ventas"

    def __str__(self):
        return self.codigo

