General
=======
If you are on a windows machine and want to use the included buildscripts (ctrl-shift-B) that create printable
droid html-files, you have to change the ExecutionPolicy in your PowerShell:

- Press Windows-Key and type "PowerShell"
- Right-click on it and start as administrator
- Type "Set-ExecutionPolicy RemoteSigned" and press enter

Sublime3
================================================================================

Installation
------------
- Copy "droid-lang" to
	- WIN: %USERPROFILE%\AppData\Roaming\Sublime Text 3\Packages\
	- MAC: ~/Library/Application Support/Sublime Text 3/Packages/
	- Linux: ~/. config/sublime-text-3/packages/
- Open a droid.ini file with Sublime3
- Set the droid syntax for all ini files via menu:
	- View -> Syntax -> Open all with current extension as -> Droid
	- Now you should see "Droid" at the bottom right
- Set the Droid Color Scheme via menu:
	- Preferences -> Select Color Scheme -> Droidokai-Dark / Droidokai-Light

Customization
--------------
- Color Scheme:
	- Duplicate "Droidokai-Dark.sublime-color-scheme" in 
	%USERPROFILE%\AppData\Roaming\Sublime Text 3\Packages\droid-lang\themes
	and give it a new name. This name will be available in the Color Scheme menu.
	- Now have fun editing the colors.

- Code Snippets:
	- Are currently work in progress and are likely generated automatically later

Visual Studio Code
================================================================================

Installation
------------
- Copy "droid-lang" to 
	- WIN: %USERPROFILE%\.vscode\extensions
	- MAC/LINUX: ~/.vscode/extensions
- Set the Droid Color Scheme via menu:
	- File -> Settings -> Color Scheme -> Droidokai Dark / Droidokai Light

Customization
--------------
- Color Scheme:
	- Open the %USERPROFILE%\.vscode\extensions\droid-lang directory in vscode
	- Duplicate "droidokai-dark-color-theme.json" in the themes directory
	and give it a new name.
	- Open "package.json" and add your newly created json file in the "themes" section
	- Open your new theme and edit the name
	- Press F5 -> a new VSCode window opens 
		-> now open a droid.ini file and select your newly created theme
		-> changes in your theme-file are directly reflected in the second VSCode window

- Code Snippets:
	Are currently work in progress and are likely generated automatically later