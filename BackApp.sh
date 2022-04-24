#!/usr/bin/env bash

chmod 755 todoapp.sh

sudo apt-get update
sudo apt-get upgrade

sudo apt install python3-pip
sudo apt install python3
sudo pip install virtualenv

sudo apt-get mysql-server
sudo apt-get mysql-client

sudo -u root -p root< dbConf.sql

sudo virtualenv BackApp
source BackApp\bin\activate.sh

sudo pip install django
sudo pip install django-cors-headers

sudo apt-get install python3-dev default-libmysqlclient-dev build-essential


sudo pip install mysqlclient
sudo pip install mysqlServer

cd to_doAPI
sudo python3 manage.py makemigrations
sudo python3 manage.py migrate
sudo python3 manage.py runserver
