FROM python:3.9

ENV PYTHONUNBUFFERED 1

COPY . /usr/code/
WORKDIR /usr/code/

RUN pip install pipenv
RUN /bin/sh -c pipenv install --system

EXPOSE 3000


