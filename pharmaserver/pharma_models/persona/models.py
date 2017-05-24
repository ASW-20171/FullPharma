from __future__ import unicode_literals

from django.db import models

# Create your models here.

class TipoDocMdl(models.Model):
    nombre = models.CharField(max_length=100)
    codigo = models.CharField(max_length=100)
    class Meta:
        verbose_name = "Tipo Doc"
        verbose_name_plural = "Tipo Docs"

    def __str__(self):
        return self.nombre

class UsuarioMdl(models.Model):
    usuario = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    nombres = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    tipo_doc = models.ForeignKey(TipoDocMdl, null=True, blank=True)
    tipo_usuario = models.IntegerField()
    
    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

    def __str__(self):
        return self.usuario

class ClienteMdl(models.Model):
    razon_social = models.CharField(max_length=100)
    doc = models.ForeignKey(TipoDocMdl, null=True, blank=True)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    
    class Meta:
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"

    def __str__(self):
        return self.razon_social

class ProveedorMdl(models.Model):
    razon_social = models.CharField(max_length=100)
    doc = models.ForeignKey(TipoDocMdl, null=True, blank=True)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    
    class Meta:
        verbose_name = "Proveedor"
        verbose_name_plural = "Proveedores"

    def __str__(self):
        return self.razon_social

# class RolesMdl(models.Model):
#     codigo = models.IntegerField()
#     nombre = models.CharField(max_length=100)
#     categoria = models.ForeignKey(CategoriaMdl, null=True, blank=True)
#     descripcion = models.TextField()
#     estado = models.BooleanField(default=True)
#     caducidad = models.DateField(null=True, blank=True)
#     precio = models.DecimalField(null=True, blank=True, max_digits=20,decimal_places=2)

#     class Meta:
#         verbose_name = "Producto"
#         verbose_name_plural = "Productos"

#     def __str__(self):
#         return self.nombre