## Installation

- Copy "droid-lang" to
	- WIN: `%USERPROFILE%\AppData\Roaming\Sublime Text 3\Packages`
	- MAC: `~/Library/Application Support/Sublime Text 3/Packages/`
	- LINUX: `~/.config/sublime-text-3/packages/`
- Open a droid.ini file with Sublime3
- Set the droid syntax for all ini files via menu (if not already automatically detected)
	- View -> Syntax -> Open all with current extension as -> Droid
	- Now you should see "Droid" at the bottom right
- Set the Droid Color Scheme via menu
	- Preferences -> Select Color Scheme -> Droidokai-Dark / Droidokai-Light

## Customization

### Color Scheme

- Duplicate "Droidokai-Dark.sublime-color-scheme" in `path-to-package\droid-lang\themes` and give it a new name
- Your scheme is now available in the Color Scheme menu under the given name

### Code Snippets

- you can find all snippet files in `path-to-package\droid-lang\snippets`
- have a look at the available snippets under `\circuits` or `\droidcomponents` and create new ones analogously

## Droid GoggleApp

- The extension comes with a HTML generator (and also a standalone version -> droid.html) for your droid.ini
- Head over to the [webapp-page](https://github.com/letmp/droid-pack/tree/main/webapp) for the complete manual

## Sending patches via X7

If you own the X7 expander, you can use this extension to send patches with the included [sendmidi tool](https://github.com/gbevin/SendMIDI).
This is achieved by simply adding the following line somewhere in the droid.ini: ```# x7 send```.

If two or more x7 expanders are connected via USB, a the devicename can be specified like that:
- ```# x7 send "DROID X7 MIDI"```
- ```# x7 send "DROID X7 MIDI-2"```
- and so on

The buildprocess is started with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> (Mac: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>).
The terminal outputs the success status.

**Note for OSX-users**: Sending a patch via X7 for the first time will fail. You have to unblock the sendmidi tool due to the security settings of OSX: [Read here](https://support.apple.com/en-us/HT202491) how to do that.

