from __future__ import unicode_literals

from django.db import models
from pharma_models.almacen.models import ProductoMdl
from pharma_models.persona.models import ProveedorMdl

class DetalleCompraMdl(models.Model):
    cantidad = models.IntegerField()
    producto = models.ForeignKey(ProductoMdl, null=True, blank=True)
    descripcion = models.CharField(max_length=100)
    
    class Meta:
        verbose_name = "Detalle Compra"
        verbose_name_plural = "Detalle Compras"

    def __str__(self):
        return self.descripcion

class CompraMdl(models.Model):
    codigo = models.IntegerField()
    fecha = models.DateField()
    proveedor = models.ForeignKey(ProveedorMdl, null=True, blank=True)
    detalle_compra = models.ForeignKey(DetalleCompraMdl, null=True, blank=True)
    
    class Meta:
        verbose_name = "Compra"
        verbose_name_plural = "Compras"

    def __str__(self):
        return self.codigo


