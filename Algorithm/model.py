import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder

import sys
import json

dataset = pd.read_csv("diabetes_data_upload.csv")
# print(dataset)

n_dataset = LabelEncoder()
# dataset['Age'] = n_dataset.fit_transform(dataset['Age'].astype('str'))
dataset['Gender'] = n_dataset.fit_transform(dataset['Gender'].astype('str'))
dataset['Polyuria'] = n_dataset.fit_transform(dataset['Polyuria'].astype('str'))
dataset['Polydipsia'] = n_dataset.fit_transform(dataset['Polydipsia'].astype('str'))
dataset['sudden weight loss'] = n_dataset.fit_transform(dataset['sudden weight loss'].astype('str'))
dataset['weakness'] = n_dataset.fit_transform(dataset['weakness'].astype('str'))
dataset['Polyphagia'] = n_dataset.fit_transform(dataset['Polyphagia'].astype('str'))
dataset['Genital thrush'] = n_dataset.fit_transform(dataset['Genital thrush'].astype('str'))
dataset['visual blurring'] = n_dataset.fit_transform(dataset['visual blurring'].astype('str'))
dataset['Itching'] = n_dataset.fit_transform(dataset['Itching'].astype('str'))
dataset['Irritability'] = n_dataset.fit_transform(dataset['Irritability'].astype('str'))
dataset['delayed healing'] = n_dataset.fit_transform(dataset['delayed healing'].astype('str'))
dataset['partial paresis'] = n_dataset.fit_transform(dataset['partial paresis'].astype('str'))
dataset['muscle stiffness'] = n_dataset.fit_transform(dataset['muscle stiffness'].astype('str'))
dataset['partial paresis'] = n_dataset.fit_transform(dataset['partial paresis'].astype('str'))
dataset['Alopecia'] = n_dataset.fit_transform(dataset['Alopecia'].astype('str'))
dataset['Obesity'] = n_dataset.fit_transform(dataset['Alopecia'].astype('str'))
dataset['class'] = n_dataset.fit_transform(dataset['class'].astype('str'))

X = dataset.drop(columns='class' , axis=1)
Y = dataset['class']
X_train,X_test,Y_train,Y_test = train_test_split(X,Y, test_size = 0.2 , stratify = Y, random_state=2 )

rfc = RandomForestClassifier(random_state=2,n_estimators=100,max_depth=13)
rfc.fit(X_train, Y_train)
Y_pred = rfc.predict(X_test)
format(accuracy_score(Y_test, Y_pred))

userData = sys.stdin.read()
dict_input = json.loads(userData)
mapping = {'yes': 1, 'no': 0, 'male':1, 'female':0}
user_data = [mapping[value] if value in mapping else value for value in dict_input.values()]


# user prediction
input = ([user_data])
# input = ([['33', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])
input_data_as_numpy_array =  np.asarray(input)
reshaped = input_data_as_numpy_array.reshape(1,-1)
prediction = rfc.predict(reshaped)
print(prediction)