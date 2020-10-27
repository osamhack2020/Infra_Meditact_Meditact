sudo apt-get install lsof
sudo kill -9 `sudo lsof -t -i:5000`
FLASK_APP=jsonSender.py FLASK_DEBUG=0 flask run --host=0.0.0.0
