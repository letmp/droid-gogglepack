#!/bin/sh
FILE_FROM="$1"
FILE_TO="$2"
FILE_TEMPLATE="$3"
lines="$(sed -n '/# BEGIN/,/# END/p' $FILE_FROM)"
cp $FILE_TEMPLATE $FILE_TO
matchstring='\$droidcomponents'
perl -i -pe "s/$matchstring/$lines/g" $FILE_TO