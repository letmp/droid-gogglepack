#!/bin/sh
FILE_FROM="$1"
FILE_TO="$2"
FILE_TEMPLATE="$3"


# ========= parse droidcomponents and write html file =========

echo "Building HTML File"
lines="$(sed -n '/# BEGIN/,/# END/p' $FILE_FROM)"
cp $FILE_TEMPLATE $FILE_TO
matchstring='\$droidcomponents'
perl -i -pe "s/$matchstring/$lines/g" $FILE_TO


# ========= send filecontent via sysex to x7 expander ========= 

if grep -q '# x7 send' "$FILE_FROM"; then
  echo "Sending data via sysex"
  cd $(dirname $0)
  (cd ../sendmidi/mac/ ; sh sendpatch $FILE_FROM)
fi