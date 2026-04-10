import streamlit as st
import pandas as pd


st.title("Data Visualization with Charts")
st.header("Bar Chart Example")
data = {
    "fruits": ["Apple", "Banana", "Cherry", "Date", "Elderberry","Mango","Grapes","Pineapple","Strawberry","Watermelon"],
    "quantity": [10, 20, 15, 5, 8, 12, 18, 22, 25, 30]
}
df = pd.DataFrame(data)
st.bar_chart(df.set_index("fruits"))

st.header("Line Chart Example")
data = {
    "year": [2010, 2011, 2012, 2013, 2014],
    "sales": [100, 150, 200, 250, 300]
}
df = pd.DataFrame(data)
st.line_chart(df.set_index("year"))

st.header("Area Chart Example")
data = {
    "month": ["Jan", "Feb", "Mar", "Apr", "May"],
    "revenue": [5000, 7000, 6000, 8000, 9000]
}
df = pd.DataFrame(data)
st.area_chart(df.set_index("month"))

st.header("Scatter Plot Example")
data = {
    "x": [1, 2, 3, 4, 5],
    "y": [10, 20, 15, 25, 30]
}
df = pd.DataFrame(data)
st.scatter_chart(df)
 