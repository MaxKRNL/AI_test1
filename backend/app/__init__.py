from flask import Flask
from app.routes import chatbot_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(chatbot_bp)
    return app
