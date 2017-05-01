from django.contrib import admin
from .models import ProductoMdl, CategoriaMdl, PedidoMdl, RecordVentaMdl, RecordVendedorMdl

# Register your models here.

admin.site.register(ProductoMdl)
admin.site.register(CategoriaMdl)
admin.site.register(PedidoMdl)
admin.site.register(RecordVentaMdl)
admin.site.register(RecordVendedorMdl)