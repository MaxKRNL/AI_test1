import openai

# Chatbot logic - using OpenAI API as an example
def get_chatbot_response(message):
    openai.api_key = 'your-openai-api-key'
    
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=message,
        max_tokens=150
    )
    
    return response.choices[0].text.strip()
