from django.http import HttpResponse
from datetime import datetime

def saludo(request):
    now = str(datetime.now())
    return HttpResponse(f"Soy bastante grande amigo y mido: {now}")
