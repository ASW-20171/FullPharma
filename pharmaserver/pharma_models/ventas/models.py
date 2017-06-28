from __future__ import unicode_literals

from django.db import models
from pharma_models.clientes.models import Cliente
from pharma_models.productos.models import Producto

# Create your models here.
class DetalleVenta(models.Model):
    cantidad = models.IntegerField()
    producto = models.ForeignKey(Producto, null=True, blank=True)
    
    class Meta:
        verbose_name = "Detalle Venta"
        verbose_name_plural = "Detalle Ventas"

    def __str__(self):
        return self.producto.nombre

class Venta(models.Model):
    codigo = models.IntegerField()
    fecha = models.DateField()
    cliente = models.ForeignKey(Cliente, null=True, blank=True)
    detalle_venta = models.ForeignKey(DetalleVenta, null=True, blank=True)
    
    class Meta:
        verbose_name = "Venta"
        verbose_name_plural = "Ventas"

    def __str__(self):
        return self.cliente.persona.nombres
