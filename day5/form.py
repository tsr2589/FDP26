import streamlit as st


st.title("Student Registration Form")

st.subheader("Please fill in the details below:")

st.text_input("First Name")

st.text_input("Last Name")

st.text_input("Email")

st.text_input("Phone Number")

st.selectbox("Gender", ["Male", "Female", "Other"])

st.text_area("Address")

st.date_input("Date of Birth")

st.time_input("Preferred Contact Time")

st.selectbox("Course Interested In", ["Mathematics", "Science", "Literature", "Art"])

st.checkbox("language Proficiency: English")

st.checkbox("language Proficiency: Spanish")

st.checkbox("language Proficiency: French")

st.checkbox("language Proficiency: German")

st.slider("Years of Experience in the Field", 0, 10, 5)

st.radio("Are you currently enrolled in any courses?", ["Yes", "No", "Prefer not to say","Other"])

st.file_uploader("upload Image",type=["jpg", "jpeg", "png"] )

st.file_uploader("upload Resume",type=["pdf", "docx"] )

if st.button("Apply"):

    st.success("Your application has been submitted successfully!")

    st.balloons()

    st.snow()

 