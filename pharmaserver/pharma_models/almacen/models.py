from __future__ import unicode_literals

from django.db import models

class ProductoMdl(models.Model):
    codigo = models.IntegerField()
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    
    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"

    def __str__(self):
        return self.nombre

class AlmacenMdl(models.Model):
    descripcion = models.TextField()
    fecha_ingreso = models.DateField()
    fecha_salida = models.DateField()
    producto = models.ForeignKey(ProductoMdl, null=True, blank=True)
    precio = models.IntegerField()
    estado = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = "Almacen"
        verbose_name_plural = "Almacenes"

    def __str__(self):
        return self.descripcion


# class PedidoMdl(models.Model):
#     codigo = models.IntegerField()
#     titulo = models.CharField(max_length=100)
#     descripcion = models.TextField()
#     cantidad = models.IntegerField()
#     fecha = models.DateField()

#     class Meta:
#         verbose_name = "Pedido"
#         verbose_name_plural = "Pedidos"

#     def __str__(self):
#         return self.titulo

# class RecordVentaMdl(models.Model):
#     producto = models.CharField(max_length=100)
#     cantidad = models.IntegerField()
#     ultimafecha = models.DateField()

#     class Meta:
#         verbose_name = "RecordVenta"
#         verbose_name_plural = "RecordVentas"

#     def __str__(self):
#         return self.producto

# class RecordVendedorMdl(models.Model):
#     vendedor = models.CharField(max_length=100)
#     cantidad = models.IntegerField()
#     ultimafecha = models.DateField()

#     class Meta:
#         verbose_name = "RecordVendedor"
#         verbose_name_plural = "RecordVendedores"

#     def __str__(self):
#         return self.vendedor
