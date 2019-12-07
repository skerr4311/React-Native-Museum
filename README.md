# React-Native-Museum

when using react-native init (project name):
I ran into a few problems just getting react-native running on android. First problem I was having was getting 'Metro bundler' working. It kept closing on me without running at all.

solution:

in node_modules/metro-config/src/default/blacklist.js

replace sharedBlackList code with:

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];


Second, the initial build in android studio kept failing.

basically, I had to delete the project and start it again without clicking the below android studio suggestion:

"plugin update reccomended"


Hope this helps someone.

23/11/19

Trying to recreate a mobile friendly version of my 335 museum assignment
