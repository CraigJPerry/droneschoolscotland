Drone School Scotland
=====================

The website of Drone School Scotland.


Project Layout
--------------

* ``/`` Project configuration
* ``client/`` Source html, css, js and other front end assets
* ``public/`` Compiled & minified client distribution, suitable for serving to clients


Developer Setup
---------------

You'll need to install:

* An IDE, i recommend PyCharm or IntelliJ with the Python plugin
* Python 2.7 installed
* The Google App Engine SDK for Python
* NodeJS + NPM installed
** Gulp & Bower installed globally: ``npm install -g gulp bower``
** Run ``npm install`` in the project root directory to download the project dependencies into the project directory.
** Run ``gulp`` to build the client distribution

Launch the Google App Engine dev appserver to view the application.
