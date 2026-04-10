import streamlit as st
 
st.title("🤖 Chat with an LLM")
 
import google.generativeai as genai
 
genai.configure(api_key="AIzaSyDNzEvXbUV7QVbdQopAKLcFBYIdJYJ-S00")
model = genai.GenerativeModel("gemini-2.5-flash")
 
user_text = st.text_input("Ask something")
 
if st.button("Generate"):
    response = model.generate_content(user_text)
    st.write(response.text)