import streamlit as st

st.set_page_config(page_title="BMI Calculator", layout="centered")

st.markdown("<h1 style='text-align: center; color: #FF6B6B;'>📊 BMI Calculator</h1>", unsafe_allow_html=True)
st.markdown("<p style='text-align: center; color: #666;'>Calculate your Body Mass Index</p>", unsafe_allow_html=True)

st.divider()

col1, col2 = st.columns(2)

with col1:
    st.markdown("### 📏 Height")
    height = st.number_input("Height (meters)", min_value=0.0, value=1.70, step=0.01)

with col2:
    st.markdown("### ⚖️ Weight")
    weight = st.number_input("Weight (kg)", min_value=0.0, value=70.0, step=0.1)

st.divider()

if st.button("Calculate BMI", use_container_width=True, type="primary"):
    if height > 0 and weight > 0:
        bmi = weight / (height ** 2)
        
        col1, col2 = st.columns([1, 1])
        with col1:
            st.metric("Your BMI", f"{bmi:.1f}")
        
        with col2:
            if bmi < 18.5:
                category = "🔵 Underweight"
            elif 18.5 <= bmi < 24.9:
                category = "🟢 Normal"
            elif 25 <= bmi < 29.9:
                category = "🟡 Overweight"
            else:
                category = "🔴 Obese"
            
            st.metric("Category", category)
        
        st.divider()
        st.markdown("### BMI Classification:")
        
        categories = {
            "🔵 Underweight": "BMI < 18.5",
            "🟢 Normal weight": "18.5 - 24.9",
            "🟡 Overweight": "25 - 29.9",
            "🔴 Obese": "BMI ≥ 30"
        }
        
        for cat, range_text in categories.items():
            st.caption(f"{cat}: {range_text}")
    
    else:
        st.error("⚠️ Please enter valid height and weight values")