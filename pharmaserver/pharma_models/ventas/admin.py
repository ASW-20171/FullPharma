from django.contrib import admin

# Register your models here.

from pharma_models.ventas.models import Venta, DetalleVenta
# Register your models here.

admin.site.register(Venta)

admin.site.register(DetalleVenta)