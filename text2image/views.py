from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .sample import text2image
import io
import base64
from PIL import Image
from django.views.decorators.csrf import csrf_exempt


def homePage(request):  
    return render(request, 'homepage.html')

def chatPage(request):
    return render(request, 'chat.html')

# Helper to convert image to base64
def image_to_base64(image):
    buffered = io.BytesIO()
    image.save(buffered, format="jpeg")  # Save image as JPEG
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    return img_str

@csrf_exempt
def chatView(request):
    if request.method == 'POST':
        try:
            prompt = request.POST.get('prompt', 'A young boy playing football')
            
            
            image = text2image(prompt)
            
            # Convert image to base64 string for HTML rendering
            image_base64 = image_to_base64(image)

            # Return JSON response to update frontend asynchronously
            return JsonResponse({'image_base64': image_base64})
        except Exception as e:
            print(f"Error: {e}")

    return HttpResponse("Error")
    
    