from flask import Flask, request, jsonify
import os
# import openai

app = Flask(__name__)

@app.route('/api/generate', methods=['POST'])
def generate():
  # openai.api_key = os.getenv("OPENAI_API_KEY")
  # response = openai.Completion.create(engine="davinci", prompt="This is a test", max_tokens=5)


  return {}