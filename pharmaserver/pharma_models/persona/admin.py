from django.contrib import admin
from .models import TipoDocMdl, ClienteMdl, ProveedorMdl

# Register your models here.

#admin.site.register(UsuarioMdl)
admin.site.register(TipoDocMdl)
admin.site.register(ClienteMdl)
admin.site.register(ProveedorMdl)