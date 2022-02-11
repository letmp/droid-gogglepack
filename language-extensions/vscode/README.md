## Installation

- Copy "droid-lang" to 
	- WIN: `%USERPROFILE%\\.vscode\\extensions`
	- MAC/LINUX: `~/.vscode/extensions`
- Set the Droid Color Scheme via menu:
	- File -> Settings -> Color Scheme -> Droidokai Dark / Droidokai Light

## Customization

### Color Scheme:

- Open the `path-to-extension\droid-lang\themes` directory in vscode
- Duplicate "droidokai-dark-color-theme.json" and give it a new name
- Open "package.json", scroll down to the `themes` section and add your newly created json file
- Open the json file of your theme and edit the name
- Press F5 -> a new VSCode window opens 
	-> open a droid.ini file in the new window and also select your newly created theme
	-> now changes in your theme-file are reflected in the second VSCode window directly

### Code Snippets:

- you can find all snippet files in `path-to-package\droid-lang\snippets`
- have a look at the available snippets and create a new file for your custom snippets analogously


