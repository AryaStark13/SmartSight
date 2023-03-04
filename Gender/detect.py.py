# -*- coding: utf-8 -*-
"""Untitled24.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1-AlfOwA9vhnZaZJ-bJGln1Nv5mplyxna
"""

from deepface import DeepFace

try:
  analysis = DeepFace.analyze(img_path = "/content/unnamed.jpg", actions = ["gender"]) #mnist image
except ValueError:
  pass

analysis = DeepFace.analyze(img_path = "/content/dua_lipa1.jpg", actions = ["gender"]) #actual image

gender = analysis[0]['dominant_gender']

male = 'male'
female = 'female'

def gender_reveal(gender):
  if gender == 'Woman':
    return female
  if gender == 'Man':
    return male

sex = gender_reveal(gender)