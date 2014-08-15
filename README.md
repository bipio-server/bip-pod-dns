![DNS](dns.png) bip-pod-dns
=======

[DNS](http://en.wikipedia.org/wiki/Domain_Name_System) Pod for [bipio](https://bip.io).  

## Installation

From bipio server root directory

    npm install bip-pod-dns
    ./tools/pod-install.js -a dns [-u optional account-wide channel auto install]

The pod-install script is a server script which will register the pod with the bipio server and add sparse
configuration to your NODE_ENV environment config ('default.json', staging or production)
keyed to 'dns', based on the default config in the pod constructor.  It will also move the
pod icon into the server cdn

Manually restart the bipio server at your convenience.


[Bipio Docs](https://bip.io/docs/pods/dns)

## License

BipIO is free for non-commercial use - [GPLv3](http://www.gnu.org/copyleft/gpl.html)

Our open source license is the appropriate option if you are creating an open source application under a license compatible with the GNU GPL license v3. 

If you'd like to integrate BipIO with your proprietary system, GPLv3 is likely incompatible.  To secure a Commercial OEM License for Bipio,
please [reach us](mailto:support@beta.bip.io)


Copyright (c) 2010-2014  [Michael Pearson](https://github.com/mjpearson)
