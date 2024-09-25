from app.chatbot import get_chatbot_response

def test_get_chatbot_response():
    response = get_chatbot_response("Hello, how are you?")
    assert isinstance(response, str)
