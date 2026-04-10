import streamlit as st

st.title("Addition of two numbers")
num1 = st.number_input("Enter the first number")
num2 = st.number_input("Enter the second number")
if st.button("Add"):
    result = num1 + num2
    st.success(f"The sum of {num1} and {num2} is {result}")