
Download the latest droid firmware, unpack the zipfile and copy the content of the file "utilities\editors\eeyo.txt". Go to [iro](https://eeyo.io/iro/) and paste the content in the left pane.

Creation of "droid.sublime-syntax" (for Sublime)
---------------------------------

- Go to the "Sublime 3" tab and copy the content to the "droid.sublime-syntax" file
- Delete all occurencies of ```
 match: '(.)'
      captures:
        0: text.droid
```

Creation of "droid.sublime-syntax" (for VSCode)
---------------------------------

- Go to the "Textmate" tab and copy the content
- Go to [Plist to JSON converter](https://wtools.io/convert-plist-to-json) and paste the code there
- Press convert button and copy the generated JSON code to your droid.tmLanguage.json
- Remove the first line ```[null,``` and ```]``` at the end of the file

Snippets
--------
- for VSCode copy the content of "vscode.snippets" to the "droid-lang\snippets\circuits.code-snippets" file 
- for Sublime3 copy the content of "sublimesnippets.zip" to "droid-lang\snippets\circuits"