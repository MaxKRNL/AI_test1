from flask import Blueprint, request, jsonify
from app.chatbot import get_chatbot_response

chatbot_bp = Blueprint('chatbot_bp', __name__)

@chatbot_bp.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message', '')
    if message:
        response = get_chatbot_response(message)
        return jsonify({"response": response})
    else:
        return jsonify({"error": "No message provided"}), 400
