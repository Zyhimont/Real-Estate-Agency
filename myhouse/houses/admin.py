from django.contrib import admin
from .models import *


class PropertyTypeAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PropertyType._meta.fields]

    class Meta:
        model = PropertyType


admin.site.register(PropertyType, PropertyTypeAdmin)


class HouseImageInline(admin.TabularInline):
    model = HouseImage
    extra = 0


class HouseAdmin(admin.ModelAdmin):
    list_display = ["title", "address", "construction_year", "property_type", "price_per_meter", "publish_date", "area",
                    "cost", "contact"]
    inlines = [HouseImageInline]

    class Meta:
        model = House


admin.site.register(House, HouseAdmin)


class HouseImageAdmin(admin.ModelAdmin):
    list_display = [field.name for field in HouseImage._meta.fields]

    class Meta:
        model = HouseImage


admin.site.register(HouseImage, HouseImageAdmin)
