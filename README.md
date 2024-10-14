# image-2-text-bot

# Text-to-Image Generator

## Overview

The **Text-to-Image Generator** is a web application that allows users to generate images from textual descriptions using the **black-forest-labs/FLUX.1-schnell** model. The application is designed to facilitate creative expression by transforming user-provided prompts into unique images.

## live prototype
   [text-2-image](https://image-2-text-bot.vercel.app/)

## black-forest-labs/FLUX.1-schnell
   FLUX can generate comprehensive images from verbal prompts by understanding the underlying distribution of images in a particular dataset, based on the 
   concepts of diffusion models. Through a succession of denoising stages directed by the input text, random noise is eventually turned into coherent visuals 
   through an iterative refinement process.

   High Quality: The model can provide outputs with a high degree of resolution and visual appeal because it was trained on a wide range of photos.
   Speed: It is appropriate for real-time applications because the word "schnell" in its name suggests optimisations for quicker inference times than classic 
   models.

   Quality of Output: FLUX.1-schnell's capacity to produce images of the highest calibre makes it perfect for applications that emphasise visual inventiveness, 
   such a text-to-image platform that allows users to convey thoughts and concepts.

   Speed: In an interactive setting where prompt-response cycles are common, its optimised performance enables faster reaction times, improving the user 
   experience.


## Features

- **Generate Images**: Input a textual prompt to generate a corresponding image.
- **Fast Processing**: Optimized for speed, ensuring quick responses and a smooth user experience.
- **User-Friendly Interface**: Intuitive layout for easy navigation and interaction.

## Technologies Used

- **Backend**: Django (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Model**: black-forest-labs/FLUX.1-schnell (Hugging Face Transformers)

## Installation

### Prerequisites

- Python 3.x
- pip

### Steps to Set Up for local deployment

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/text-to-image-generator.git
   cd text-to-image-generator
2. **Create Virtual Enviourment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
3. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
4. **Setup Django**
   ```bash
   python manage.py migrate
   python manage.py createsuperuser
5. **Run development server**
   ```bash
   python manage.py runserver


Visit http://127.0.0.1:8000 in your browser.

