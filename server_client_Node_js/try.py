from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
from keras.models import load_model
import codecs

def swearornot(model,tokenizer,sentences):
  max_length = 100
  trunc_type='post'
  padding_type='post'
  sequences = tokenizer.texts_to_sequences(sentences)
  padded = pad_sequences(sequences, maxlen=max_length, padding=padding_type, truncating=trunc_type)
  res = (model.predict(padded))
  return res

if __name__=='__main__':
  model = load_model('model.h5')
  with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)
  with codecs.open('array.txt', 'r', 'utf8') as f:
    lines = f.readlines()
  for i in range(len(lines)):
    lines[i] = lines[i][:len(lines[i]) - 3]
  res = swearornot(model, tokenizer, lines)
  tol =[]
  for i in range(len(res)):
    if res[i] > 0.5:
        tol.append(1)
    else:
        tol.append(0)
  print(tol)