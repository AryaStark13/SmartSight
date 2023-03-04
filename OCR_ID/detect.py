# -*- coding: utf-8 -*-
import cv2
import numpy as np
import pytesseract
import matplotlib.pyplot as plt
import pandas as pd
from PIL import Image
import string

from google.colab.patches import cv2_imshow

img = cv2.imread('/content/aryanid.jpg') #enter image here
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
th, threshed = cv2.threshold(gray, 127,255, cv2.THRESH_BINARY)
text2 = pytesseract.image_to_string(threshed, lang="ind")
print(text2)
cv2_imshow(threshed)

import re
text2 = re.sub(r'[^\w\s]', '', text2)

list1 = text2.split()
list1

list2 = []

list2.append(list1[(list1.index("Name") + 1)])
list2.append(list1[(list1.index("Name") + 2)])
list2.append(list1[(list1.index("DOB") + 1)])
list2.append(list1[(list1.index("Phone") + 1)])

year = list2[2][4:]
month = list2[2][2:4]
day = list2[2][:2]

year = int(year)
month = int(month)
day = int(day)

from datetime import date
 
def get_age(birthdate):
    today = date.today()
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    return age

age = (get_age(date(year, month, day)))

list2[2] = age

list2# Name, LAstName, Age, PhoneNumber