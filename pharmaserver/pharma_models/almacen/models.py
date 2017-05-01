from __future__ import unicode_literals

from django.db import models

class CategoriaMdl(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    
    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.nombre

class ProductoMdl(models.Model):
    codigo = models.IntegerField()
    nombre = models.CharField(max_length=100)
    categoria = models.ForeignKey(CategoriaMdl, null=True, blank=True)
    descripcion = models.TextField()
    estado = models.BooleanField(default=True)
    caducidad = models.DateField(null=True, blank=True)
    precio = models.DecimalField(null=True, blank=True, max_digits=20,decimal_places=2)

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

    def __str__(self):
        return self.nombre


class PedidoMdl(models.Model):
    codigo = models.IntegerField()
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    cantidad = models.IntegerField()
    fecha = models.DateField()

    class Meta:
        verbose_name = "Pedido"
        verbose_name_plural = "Pedidos"

    def __str__(self):
        return self.titulo

class RecordVentaMdl(models.Model):
    producto = models.CharField(max_length=100)
    cantidad = models.IntegerField()
    ultimafecha = models.DateField()

    class Meta:
        verbose_name = "RecordVenta"
        verbose_name_plural = "RecordVentas"

    def __str__(self):
        return self.producto

class RecordVendedorMdl(models.Model):
    vendedor = models.CharField(max_length=100)
    cantidad = models.IntegerField()
    ultimafecha = models.DateField()

    class Meta:
        verbose_name = "RecordVendedor"
        verbose_name_plural = "RecordVendedores"

    def __str__(self):
        return self.vendedor
