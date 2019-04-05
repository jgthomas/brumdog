
from PIL import Image

IMAGE_EXTENSION = ".jpg"
IMAGE_FILETYPE = "jpeg"
ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png']


def resize_image(maxsize, image_file, image_name):
    img = Image.open(image_file)
    img.thumbnail((maxsize,maxsize), Image.BICUBIC)
    img.save(image_name+IMAGE_EXTENSION, IMAGE_FILETYPE)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
