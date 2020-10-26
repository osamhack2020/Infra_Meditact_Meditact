import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="meditact-ashhyun", # Replace with your own username
    version="1.0.0",
    author="ashhyun",
    author_email="youkind98@gmail.com",
    description="A python package that helps classifying medical subjects",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/osamhack2020/Infra_Meditact_Meditact",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)