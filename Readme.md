Simple static stuff server
==========================

**NOTE: This project is no longer maintained. It was created against a very old version of
Node. It no longer functions. This repository is kept for historical reasons, but no one
should actually use it.**

Ever needed to send a colleague a file, but can't be bothered emailing the 100MB beast?
Wanted to run a simple example JavaScript application, but had problems with running it
through the file:/// protocol? Wanted to share your media directory at a LAN without
setting up Samba, or FTP, or anything else requiring you to edit configuration files?
Then this file server will make your life that little bit easier.

To install the simple static stuff server, use npm:

	npm install -g static-server

Then to serve a file or a directory, simply run

	$ serve path/to/stuff
	Serving path/to/stuff on port 8001

Or serve your current directory by running it with no arguments:

	$ pwd
	/home/tim/public
	$ serve
	Serving /home/tim/public on port 8001

Serve an individual file, or a whole directory. Files are sent with their correct
mime-types. Directories are browsable. Stuff is downloadable. Any index.html file is
served by default, so you can serve stand-alone JavaScript apps or static web sites.
Point your browser to `http://localhost:8001/`, or someone else's browser to 
`http://[your-ip-address]:8001/` and your work is done.

For a quick, handy way of finding your ip address, try running `ip addr` or `ifconfig`

The port to serve stuff on can be set using the `--port` flag, in case you need to
change it.

	$ serve /etc/passwd --port 1234
	Serving /etc/passwd on port 1234

Serving out of the default http port of 80 is supported, but most Linux systems will
require you to have root privileges to bind to port 80:

	$ sudo serve ~/my-javascript-app/ --port 80
	Serving ~/my-javascript-app/ on port 80

And that is it!
