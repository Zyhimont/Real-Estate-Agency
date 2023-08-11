from django.contrib import admin
from .models import Agent


class AgentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Agent._meta.fields]

    class Meta:
        model = Agent


admin.site.register(Agent, AgentAdmin)
