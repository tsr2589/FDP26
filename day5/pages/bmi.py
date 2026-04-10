import streamlit as st

st.title("BMI Calculator")
weight = st.number_input("Enter your weight in kg")
height = st.number_input("Enter your height in meters")
if st.button("Calculate BMI"):
    if height > 0:
        bmi = weight / (height ** 2)
        st.success(f"Your BMI is {bmi:.2f}")
        if bmi < 18.5:
            st.info("You are underweight")
        elif 18.5 <= bmi < 24.9:
            st.info("You have a normal weight")
        elif 25 <= bmi < 29.9:
            st.info("You are overweight")
        else:
            st.info("You are obese")
    else:
        st.error("Height must be greater than zero")