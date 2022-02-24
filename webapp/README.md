## Usage

### From patch to print

![comments](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/01_comments.gif)
- the Sublime3 / VSCode extensions have integrated code snippets for comments
- just type "comment" and select one
- you can now go through all fields of the comment with the <kbd>Tab ↹</kbd> key and fill the comment easily

![save](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/02_save.gif)
- press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> (Mac: <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd>) to generate a html file right next to your droid.ini
- open the html file and you are ready to print

### From HTML to patch

- you can find a standalone droid.html file in the downloaded package
- it can be used to plan your hardware / input / output configuration directly via browser

![edit](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/03_edit.gif)
- edit all the fields and descriptions
- you can also go through all fields with <kbd>Tab ↹</kbd>

![add](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/04_addcompo.gif)
- add droid components by pressing the upper right add icon of the component that should be the new neighbor
- delete a droid component by pressing the delete icon

![linebreak](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/05_linebreak.gif)
- for layout purposes you can also add a linebreak
- delete the linebreak with a click on it

![resize](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/08_resize.gif)
- you can also resize droid components with the +/- icons

![swap](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/06_swap.gif)
- you can drag and swap droid components
- variable-assignments to registers can also be moved or swapped
- only suitable inputs & outputs are highlighted so that input-variables cannot be assigned to outputs accidentally

![export](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/07_export.gif)
- by clicking on the purple icon on the left you can export all parts needed in your droid.ini:
  - the header comments with all descriptions and variable assignments (note that controllers like p2b8 have register-numberings that correspond to the order of your hardware)
  - the droid components you have to declare in your patch (also in correct order)
  - the input & output mappings that map the (correctly numbered) registers to the variables you assigned
  - make sure that output mappings are copied to the END of your patch (otherwise you introduce some latency)

### Adapting patches to your hardware-setup

![remap](https://github.com/letmp/droid-gogglepack/blob/main/webapp/screencast/09_remap.gif)
- open the droid.html file of the patch you want to adapt to your hardware
- add the components of YOUR hardware-setup
- drag & drop all variables to your newly added droid components
- delete the old droid components
- open the export popup and replace all parts (headers, components, input/output-mappings) in the droid.ini file