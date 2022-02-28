# From Droid-Patch to a printable cheatsheet

It is very easy to create and print a cheatsheet of your droid project with the help of this extension.
You only need to follow these two steps:

### Add comments
![comments](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/01_comments.gif)
- The Sublime3 / VSCode extensions have integrated code snippets for comments
- Just type "comment" and select the suitable listentry
- You can now go through all fields of the added comment with the <kbd>Tab ↹</kbd> key and fill the comment easily

### Create HTML file
![save](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/02_save.gif)
- Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> (Mac: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>) to generate a html file right next to your droid.ini
- Open the html file and you are ready to print

# From Browser to your Droid-Patch

If you want to begin and plan your new droid-project in your browser first, you can do that by opening (or copying) the standalone droid.html file that comes with this pack. Here comes a brief step-by-step guide how to do that:

### Reproduce your hardware-setup
![add](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/04_addcompo.gif)
- Add droid components by pressing the upper right add-icon of the component that should be the new neighbor
- Delete a droid component by pressing the delete-icon

### Variable assignments
![edit](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/03_edit.gif)
- Assign variable-names and descriptions to the registers of your droid-components
- You can go through all fields with the <kbd>Tab ↹</kbd> key

### Move & Swap
![swap](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/06_swap.gif)
- Drag and swap droid components is very easy
- Variable-assignments to registers can also be moved or swapped
- Only suitable inputs & outputs are highlighted so that input-variables cannot be assigned to output-registers accidentally

### Layouting
![linebreak](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/05_linebreak.gif)
- Add linebreaks for layout-purposes
- Delete linebreaks with a simple click

![resize](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/08_resize.gif)
- Resize droid-components with the +/- icons on the upper left

### Export to droid.ini
![export](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/07_export.gif)
- Copy & paste all parts that are needed in your droid.ini by clicking the purple icon on the left side. The opened popup shows:
  - the header-comments with all descriptions and variable assignments (note that controllers like p2b8 have register-numberings that correspond to the order of your hardware)
  - the droid-components you have to declare in your patch (also in correct order)
  - the input/output-mappings that map the (correctly numbered) registers to the variables you assigned
- Make sure that output-mappings are copied to the **END** of your patch (otherwise you introduce some latency)

# Adapting patches to your hardware-setup

If you are lucky and the creator of the patch you just downloaded used this pack to create the headers and input/output-mappings, then it is really easy to adapt the patch to your setup. All you need is to create the droid.html file by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> (Mac: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>) in your editor and adapt the variable-assignments to your hardware-setup.

![remap](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/09_remap.gif)
- Open the droid.html file of the patch you want to adapt to your hardware
- Add the components of YOUR hardware-setup
- Drag & drop all variables to your newly added droid components
- Delete the old droid components
- Open the export popup and replace all parts (headers, components, input/output-mappings) in the droid.ini file
