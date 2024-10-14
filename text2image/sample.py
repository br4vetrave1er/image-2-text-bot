import requests
import io
from PIL import Image
import asyncio  

HF_TOKEN = "Bearer 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"
API_URL = API_URL = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell"



def query(payload, headers):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content

# You can access the image with PIL.Image for example
def text2image(prompt):
    headers = {"Authorization": HF_TOKEN}
    image_bytes = query({"inputs": prompt}, headers)
    # print(image_bytes)
    image = Image.open(io.BytesIO(image_bytes))
    return image