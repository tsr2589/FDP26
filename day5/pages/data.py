import streamlit as st
import pandas as pd


uploaded_file = st.file_uploader("Upload a CSV file", type=["csv"])

if uploaded_file is not None:
    df = pd.read_csv(uploaded_file)
    st.write("Data Preview:")
    st.dataframe(df.head())
    st.dataframe(df.describe())
    st.dataframe(df.info())
    st.dataframe(df.tail())
    st.dataframe(df.columns)
    st.dataframe(df.shape)