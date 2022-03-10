
/*  ================================================================ 
        MAIN ENTRY
    ================================================================*/

window.addEventListener('load', function(event) {
  
  window.renderer = new Renderer()
  window.dh = new DataHandler()
  window.sh = new StateHandler()
  
  sh.registerListener(window.renderer.renderStateUpdate)
  sh.updateState("initLayout", dh.stateFromHtml)
  
})

/*  ================================================================ 
        DATA HANDLING AND DROIDCOMPONENT TEMPLATES
    ================================================================*/
let droidControllers = ["p2b8","p10","p4b2","b32"] // used for counting BX.1, PX.5, ...
let droidComponents = {
  "description" : [
    {type: "description", content:""}
  ],
  "master" : [
    {type: "register", name:"I1", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"I2", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"I3", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"I4", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"I5", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"I6", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"I7", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"I8", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"O1", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"O2", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"O3", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"O4", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"O5", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"O6", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"O7", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"O8", component:"jack", registertype:"out", variablename:"", description:""}
  ],
  "g8" : [
    {type: "register", name:"G1", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"G2", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"G3", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"G4", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"G5", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"G6", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"G7", component:"jack", registertype:"in", variablename:"", description:""},
    {type: "register", name:"G8", component:"jack", registertype:"in", variablename:"", description:""}
  ],
  "x7" : [
    {type: "register", name:"M1", component:"jack", registertype:"inmidi", variablename:"", description:""},
    {type: "register", name:"M2", component:"jack", registertype:"outmidi", variablename:"", description:""},
    {type: "register", name:"G9", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"G10", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"G11", component:"jack", registertype:"out", variablename:"", description:""},
    {type: "register", name:"G12", component:"jack", registertype:"out", variablename:"", description:""}
  ],
  "p2b8" : [
    {type: "register", name:"P1", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P2", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B1", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B2", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B3", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B4", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B5", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B6", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B7", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B8", component:"button", registertype:"in", variablename:"", description:""}
  ],
  "p10" : [
    {type: "register", name:"P1", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P2", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P3", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P4", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P5", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P6", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P7", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P8", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P9", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P10", component:"pot", registertype:"in", variablename:"", description:""}
  ],
  "p4b2" : [
    {type: "register", name:"P1", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P2", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P3", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"P4", component:"pot", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B1", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B2", component:"button", registertype:"in", variablename:"", description:""}
  ],
  "b32" : [
    {type: "register", name:"B1", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B2", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B3", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B4", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B5", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B6", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B7", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B8", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B9", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B10", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B11", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B12", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B13", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B14", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B15", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B16", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B17", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B18", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B19", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B20", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B21", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B22", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B23", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B24", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B25", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B26", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B27", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B28", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B29", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B30", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B31", component:"button", registertype:"in", variablename:"", description:""},
    {type: "register", name:"B32", component:"button", registertype:"in", variablename:"", description:""}
  ],
  "m4" : [
    {type: "register", name:"F1", component:"fader", registertype:"in", variablename:"", description:""},
    {type: "register", name:"F2", component:"fader", registertype:"in", variablename:"", description:""},
    {type: "register", name:"F3", component:"fader", registertype:"in", variablename:"", description:""},
    {type: "register", name:"F4", component:"fader", registertype:"in", variablename:"", description:""}
  ]
}

let icons = {
  "jackin": "bi-record-circle-fill",
  "jackout": "bi-vinyl-fill",
  "jackinmidi": "bi-record2-fill",
  "jackoutmidi": "bi-record2",
  "potin": "bi-arrow-clockwise",
  "buttonin": "bi-circle",
  "faderin": "bi-sliders2-vertical",
}

let defaultData = [
  { type: "droidComponentSlot",
    content: {
      type: "droidComponent",
      name:"description",
      content: droidComponents["description"]
    }
  },
  { type: "droidComponentSlot",
    content: {
      type: "droidComponent",
      name:"master",
      content: droidComponents["master"]
    }
  }
]

class DataHandler {
  code = undefined
  hash = undefined
  stateFromHtml = null
  stateFromLocalStorage = null

  constructor(){
    this.code = document.getElementById("code").textContent.trim()
    this.hash = this.hashcode(this.code)
    this.stateFromHtml = this.importHtmlState()
    this.stateFromLocalStorage = this.importLocalStorageState()
  }

  importHtmlState(){
    if(this.code == "") this.stateFromHtml = defaultData
    else this.stateFromHtml = this.parseDroidComponents(this.code)
    return this.stateFromHtml
  }

  importLocalStorageState(){
    let storedState = this.getLocalStorage(this.hash)
    if(storedState != null){
      window.renderer.renderStateUpdate("localStorageAvailable")
    }
    return storedState
  }

  exportData(){
    let commentRegion = ""
    let componentRegion = ""
    let mappingInRegion = ""
    let mappingOutRegion = ""
    let controllerCounter = 0
    window.sh.state.forEach(dcObj => {
      let dc = dcObj.content
      if(dc.type == "linebreak") return
      commentRegion += "# BEGIN DROIDCOMPONENT " + dc.name.toUpperCase() + "\n"
      if(droidControllers.includes(dc.name)){
        controllerCounter++
        componentRegion += "[" + dc.name + "]\n"
      } 
      dc.content.forEach(register => {
        let name = register.name
        if(dc.name =="description"){
          register.content.split("\n").forEach(line =>{ commentRegion += "# " + line + "\n"})
        }
        else{
          // change B1 to BX.1 where X = current controller number
          name = droidControllers.includes(dc.name) ? name.substring(0, 1) + controllerCounter + "." + name.substring(1) : name
          let varName = register.variablename.trim()
          const description = register.description
          commentRegion += "# " + name + ": [" + varName + "] " + description + "\n"  
          // input mappings
          if(register.registertype == "in" && varName != ""){
            mappingInRegion += "[copy] # " + dc.name + ": " + description + "\n\t"
            mappingInRegion += "input = " + name + "\n\t"
            mappingInRegion += "output = _" + varName + "\n"
          }
          // output mappings
          if(register.registertype == "out" && varName != ""){
            mappingOutRegion += "[copy] # " + dc.name + ": " + description + "\n\t"
            mappingOutRegion += "input = _" + varName + "\n\t"
            mappingOutRegion += "output = " + name + "\n"
          }
        }
      })
      commentRegion+="# END DROIDCOMPONENT\n\n"
    })
    return [commentRegion,componentRegion,mappingInRegion,mappingOutRegion]
  }

  parseDroidComponents(code){
    const regex = "(?<=# BEGIN DROIDCOMPONENT)(.|\n)*?(?=\n# END DROIDCOMPONENT)";
    const regions = String(this.code).replace(/\t|  +/g, '').matchAll(regex); // applies regex to code (cleaned from multi-spaces and tabs)
    let dcSlots = []
    for (const region of regions) {
      const [keyword, ...lines] = region[0].trim().split("\n")
      let registers = this.parseRegisters(keyword.toLowerCase(), lines)
      if (keyword.toLowerCase() in droidComponents) { 
        let dcSlot = { 
          type:"droidComponentSlot",
          content: {
            type: "droidComponent",
            name: keyword.toLowerCase(),
            content: registers
          } 
        }
        dcSlots.push(dcSlot)
      }
    }
    return dcSlots
  }

  parseRegisters(type,lineArray){
    const regexNumberDot = /([0-9](\.))/g // matches "1."" in "B1.5"
    const regexVariable = /\[([^\]]*)\]/ // matches "VAR" in "[VAR] text [anotherbracket]""
    const regexDigit = /\d+/ // matches "12" in "B12 not 3 and 4"

    // make a copy of the register template
    let registerTemplateArray = droidComponents[type].map(register=> { return {...register}})

    if(type == "description"){
      for (const line of lineArray) {
        registerTemplateArray[0].content+= line.replace("#","").trim() + "\n"
      }
    }
    else{
      for (var line of lineArray) {
        line = line.replace("#","").trim()
        if (!line.includes(":")) continue // discard lines that do not contain ":"" 

        // extract all values
        const kv = line.trim().split(":")
        const name = kv[0].replace(regexNumberDot,"") // transforms B1.5 to B5
        let variablename = kv[1].match(regexVariable)
        variablename = (variablename === null) ? "" : variablename[1]
        var description = kv[1].replace(regexVariable,"").trim()
        
        // now update properties in the template
        const regIndex = registerTemplateArray.findIndex(regOld => regOld.name == name);
        if(regIndex==-1) continue
        registerTemplateArray[regIndex].variablename = variablename
        if(type == "g8"){ // check if configured as in or output and update registertype
          let isIn = description.match(/(IN)/)
          let isOut = description.match(/(OUT)/)
          description = description.replace(/(IN)|(OUT)/,"")
          if(isOut) registerTemplateArray[regIndex].registertype = "out"
        }
        registerTemplateArray[regIndex].description = description
      }
    }
    return registerTemplateArray
  }

  hashcode(code) {
  var hash = 0, i, chr;
  if (code.length === 0) return hash;
  for (i = 0; i < code.length; i++) {
    chr   = code.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
  }

  setLocalStorage(state) {
    localStorage.setItem(this.hash, JSON.stringify(state))
  }
  getLocalStorage(hash){
    let lastState = localStorage.getItem(hash)
    if(lastState != null) return JSON.parse(lastState)
    else return null
  }
  clearLocalStorage(){
    localStorage.clear()
  }
}



/*  ================================================================ 
        STATE HANDLER 
        updates the app-state and calls the registered listeners
    ================================================================*/

class StateHandler {
  state = undefined
  history = []
  listeners = []

  constructor(){}

  registerListener(listener){
    this.listeners.push(listener)
  }

  updateState(action, payload){
    
    // create a deep copy of the current state
    let newState = this.state?.map(droidComponentSlot=>{
      return {
        ...droidComponentSlot,
          content: {
            ...droidComponentSlot.content,
            content: droidComponentSlot.content?.content?.map(x=>x)
          }
        }
      });

    // adds unique ids to the initial state and passes the state as payload to the renderer
    // payload = initial state object
    if(action == "initLayout"){
      // add unique ids to components and registers
      newState = payload.map(droidComponentSlot=>{
        return {
          ...droidComponentSlot,
          id: "slot_" + Math.random().toString(16).slice(2),
          content: droidComponentSlot.content ? {
            ...droidComponentSlot.content,
            id: "dc_" + Math.random().toString(16).slice(2),
            content: droidComponentSlot.content.content?.map(dcItem=> ({
              ...dcItem,
              id: "item_" + Math.random().toString(16).slice(2)
            }))
          } : undefined
        }
      })
      payload = newState // pass th
    }

    // adds a droidComponent
    // payload = [droidComponentId, new droidComponentName]
    if(action == "addDroidComponent"){ 
      const dcIndex = newState.findIndex(obj => obj.content.id == payload[0]);
      // grab component template and add ids
      let contentItems = droidComponents[payload[1]].map(dcItem=>{
        return {
          ...dcItem,
          id: "item_" + Math.random().toString(16).slice(2)
        }
      })
      let droidComponentSlot = {
        type: "droidComponentSlot",
        id: "slot_" + Math.random().toString(16).slice(2),
        content: {
          type: "droidComponent",
          name:payload[1],
          id: "dc_" + Math.random().toString(16).slice(2),
          content: contentItems
        }
      }
      newState.splice(dcIndex + 1, 0, droidComponentSlot);
      payload = [droidComponentSlot,newState[dcIndex].id]
    }

    // deletes a droidComponent
    // payload = [droidComponentId]
    if(action == "delDroidComponent"){ 
      let status = ''
      let remaining = newState.filter(obj => obj.content.type=="droidComponent") // only take droidComponents into account
      if(remaining.length > 1){
        const dcIndex = newState.findIndex(obj => obj.content.id == payload[0]);
        newState.splice(dcIndex, 1);
        status = 'success'
      }
      else status = 'failItemCount'
      payload.unshift(status)
    }

    // add a linebreak 
    // payload = [droidComponentId]
    if(action == "addLinebreak"){ 
      const dcIndex = newState.findIndex(obj => obj.content.id == payload[0]);
      console.log(payload[0])
      let droidComponentSlot = {
        type: "droidComponentSlot",
        id: "slot_" + Math.random().toString(16).slice(2),
        content: {
          type: "linebreak",
          id: "lb_" + Math.random().toString(16).slice(2)
        }
      }
      newState.splice(dcIndex + 1, 0, droidComponentSlot);
      
      payload = [droidComponentSlot, newState[dcIndex].id]
    }

    // updates the size of a droidComponent
    // payload = [droidComponentId, size]
    if(action == "resizeDroidComponent"){ 
      const dcIndex = newState.findIndex(obj => obj.content.id == payload[0]);
      newState[dcIndex].size = payload[1]
    }
    

    // deletes a linebreak
    // payload = [droidComponentSlotId]
    if(action == "delLinebreak"){ 
      const dcIndex = newState.findIndex(obj => obj.id == payload[0]);
      newState.splice(dcIndex, 1);
    }

    // swap two droidComponents 
    // payload = [droidComponentIdSource, droidComponentIdTarget]
    if(action == "swapDroidComponent"){ 
      const dcIndexSrc = newState.findIndex(obj => obj.content.id == payload[0]);
      const dcIndexTrg = newState.findIndex(obj => obj.id == payload[1]);
      const dcItemSrc = newState[dcIndexSrc].content
      const dcItemTrg = newState[dcIndexTrg].content
      newState[dcIndexSrc].content = dcItemTrg
      newState[dcIndexTrg].content = dcItemSrc
    }

    // swap variablename and description between two registers
    // payload = [droidComponentIdSource, registerIdSource, droidComponentIdTarget, registerIdTarget]
    if(action == "swapVarDesc"){     
      const dcIndexSrc = newState.findIndex(obj => obj.content.id == payload[0])
      const regIndexSrc = newState[dcIndexSrc].content.content.findIndex(obj => obj.id == payload[1])
      const dcIndexTrg = newState.findIndex(obj => obj.content.id == payload[2])
      const regIndexTrg = newState[dcIndexTrg].content.content.findIndex(obj => obj.id == payload[3])
      
      const registerSource = newState[dcIndexSrc].content.content[regIndexSrc]
      const registerTarget = newState[dcIndexTrg].content.content[regIndexTrg]

      // only swap id/varname/description (all other values stay!)
      //swap(registerSource, 'id', registerTarget, 'id');
      swap(registerSource, 'variablename', registerTarget, 'variablename');
      swap(registerSource, 'description', registerTarget, 'description');

    }

    // update registertype of g8 register
    // payload = [droidComponentIdSource, registerIdSource]
    if( action == "changeRegisterType"){ 
      const dcIndexSrc = newState.findIndex(obj => obj.content.id == payload[0])
      const regIndexSrc = newState[dcIndexSrc].content.content.findIndex(obj => obj.id == payload[1])
      let rt = newState[dcIndexSrc].content.content[regIndexSrc].registertype
      if(rt=="in") newState[dcIndexSrc].content.content[regIndexSrc].registertype = "out"
        else newState[dcIndexSrc].content.content[regIndexSrc].registertype = "in"
    }

    // update a variablename
    // payload = [droidComponentIdSource, registerIdSource, value]
    if(action == "updateVariable"){ 
      const dcIndexSrc = newState.findIndex(obj => obj.content.id == payload[0])
      const regIndexSrc = newState[dcIndexSrc].content.content.findIndex(obj => obj.id == payload[1])
      newState[dcIndexSrc].content.content[regIndexSrc].variablename = payload[2]
    }

    // update a variablename
    // payload = [dragSlotId, dragItemId, value]
    if(action == "updateDescription"){ 
      const dcIndexSrc = newState.findIndex(obj => obj.content.id == payload[0])
      const regIndexSrc = newState[dcIndexSrc].content.content.findIndex(obj => obj.id == payload[1])
      newState[dcIndexSrc].content.content[regIndexSrc].description = payload[2]
    }
    
    console.log("Current Datascructure:", newState)
    
    this.history.push(newState)
    this.listeners.forEach(listener => listener(action, payload))
    this.state = newState

    // store a changed state in the browser so that all changes can be reloaded
    if(action != "initLayout") window.dh.setLocalStorage(newState) 
  }
}


/*  ================================================================ 
        RENDERER
        is listening to the state handler
        is in charge of all the DOM updates
    ================================================================*/

class Renderer {

  zoom = 1 // the zoomfactor to fit a sheet exactly to the window size
  mPosX = window.innerWidth / 2  - document.querySelector(".modalContent").width / 2 + "px"// mousePosX
  mPosY = "50px"// mousePosY
  timeout = null; // timeout - needed to delay textarea and resizing function calls

  ddh = undefined
  modal = undefined

  constructor(){
    this.ddh = new DragDropHandler()
    this.modal = new Modal()
    this.fitPage()
    this.buildMenu()
    window.addEventListener("resize", this.fitPage)
    window.addEventListener("mousemove", this.updateMouseCoord, false);    
  }

  // helper function to insert a node after reference node
  insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  // zooms the body so that a sheet takes 100% of the screen height
  fitPage(){
    let w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight
    let sheet = document.querySelector('.sheet')
    var margin = parseInt(window.getComputedStyle(sheet).getPropertyValue('margin-top'))
    this.zoom = y / (sheet.offsetHeight + 2 * margin)
    let width = 100 / this.zoom
    document.body.style.transformOrigin = "left top"
    document.body.style.transform = "scale(" + this.zoom + ")"
    document.body.style.width = width + "%"
  }
  // updates the mouse coords wrt the current zoomfactor
  updateMouseCoord(event) {
    window.renderer.mPosX = event.pageX / window.renderer.zoom + "px"
    window.renderer.mPosY = event.pageY / window.renderer.zoom + "px"
  }

  // moves an element to a target with a transition
  moveWithTransition(ele, target){ 
    ele.classList.add("noTransition");
    let x1 = ele.getBoundingClientRect().left; let y1 = ele.getBoundingClientRect().top
    target.appendChild(ele)
    let x2 = ele.getBoundingClientRect().left; let y2 = ele.getBoundingClientRect().top
    ele.style.transform = "translate("+ (x1-x2) + "px,"+ (y1-y2) +"px)"
    window.requestAnimationFrame(() => {
      ele.classList.remove("noTransition")
      ele.style.transform = "translate(0px,0px)"
    })
  }

  // appends buttons to menu
  buildMenu(){
    let divExport = document.createElement("div")
    divExport.innerHTML ='<i class="bi bi-code-square"></i>'
    divExport.onclick = function() { window.renderer.modal.showExport()}
    document.querySelector(".menu").appendChild(divExport)
  }

  // used to calculate the number of needed sheets for the current state
  // updates the DOM with the calculated droidcomponent->sheet assignments
  updateSheets(sheet, clearSheets = false){
    let fc = sheet.querySelector('.flexContent')
    // move all items to the first sheet before spreading them again
    if(clearSheets){ 
      document.querySelectorAll('br.noprint').forEach(br => {br.remove()})
      document.querySelectorAll('.sheet').forEach(sheetobj => {
        if(sheetobj!=sheet){
          Array.from(sheetobj.querySelector('.flexContent').children).forEach(dc =>{
            fc.appendChild(dc)
          })
          sheetobj.remove()
        }
      })
    }
    //check if there are items below sheet
    let borderBottom = sheet.getBoundingClientRect().bottom + window.pageYOffset
    let dcToMove = []
    Array.from(fc.children).forEach(child => {
      if((child.getBoundingClientRect().top + window.pageYOffset) > borderBottom) dcToMove.push(child)
    })
    // move them to a new sheet
    if(dcToMove.length > 0){
      var newSheet = document.createElement("section")
      newSheet.classList.add('sheet')
      var newFlexContent = document.createElement("div")
      newFlexContent.classList.add('flexContent')
      newSheet.appendChild(newFlexContent)
      dcToMove.forEach(dc => {newFlexContent.appendChild(dc)})
      let sheets = document.querySelectorAll('.sheet')
      window.renderer.insertAfter(newSheet, sheets[sheets.length-1])
      window.renderer.updateSheets(newSheet); // recursive call for next sheet
    }
  }

  // updates the height of a textarea
  initTextareaSize(textarea){
    textarea.style.height = ""
    textarea.style.height = textarea.scrollHeight + "px"
  }
  updateTextareaSize(){
    this.style.height = ""
    this.style.height = this.scrollHeight + "px"
  }

  // calls a stateUpdate (after a certain amount of time without input updates)
  submitTextareaInput(action, droidComponentId, registerId, value, timeout = 500){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function () {
        window.sh.updateState(action, [droidComponentId, registerId, value])
    }, timeout);
  }

  // gets called for every update in the state handler
  renderStateUpdate(action,payload){
    
    // (re)inits the layout
    // payload = initial State (an array of droidcomponent slots + droidcomponents)
    if(action == "initLayout"){ 
      let divDcSlotBefore = undefined
      document.querySelector('.flexContent').innerHTML=''
      payload.forEach(objDcSlot => {
        divDcSlotBefore = window.renderer.addDroidComponent(objDcSlot,divDcSlotBefore)
      })
    }
    
    if(action == "localStorageAvailable"){ 
      window.renderer.modal.showModal("localStorageAvailable", "Found some changes in your cache!", "")
    }
    
    // adds a new droidComponent/slot next to a given droidComponentSlot
    // payload = [droidComponentSlot JSON, droidComponentSlotId]
    if(action == "addDroidComponent"){
      const dcSlotSrc = document.getElementById(payload[1])
      window.renderer.addDroidComponent(payload[0], dcSlotSrc)
    }

    // adds a new droidComponent/slot next to a given droidComponentSlot
    // payload = [status, droidComponentId]
    if(action == "delDroidComponent"){
      if(payload[0] == 'failItemCount'){
        setTimeout(function () {
          window.renderer.modal.showModal("failItemCount", "There has to be at least one item!", "")
        }, 100);
      }
      else if (payload[0] == 'success'){
        const dcItemSrc = document.getElementById(payload[1])
        const dcSlotSrc = dcItemSrc.parentNode;  
        dcSlotSrc.remove();
      }
    }

    // add a linebreak
    // payload = [droidComponentSlot JSON, droidComponentSlotId]
    if(action == "addLinebreak"){
      const divDcSlotBefore = document.getElementById(payload[1])
      var divLbSlot = document.createElement("div")
      divLbSlot.id = payload[0].id
      divLbSlot.classList.add('lineBreak')
      window.renderer.insertAfter(divLbSlot,divDcSlotBefore)
      divLbSlot.onclick = function() { window.sh.updateState("delLinebreak",[divLbSlot.id]); }
    }

    // add a linebreak
    // payload = [droidComponentSlot JSON, droidComponentSlotId]
    if(action == "delLinebreak"){
      var divLbSlot = document.getElementById(payload[0])
      divLbSlot.remove();
    }

    // updates the size of a droidComponent
    // payload = [droidComponentId, size]
    if(action == "resizeDroidComponent"){
      const dcItem = document.getElementById(payload[0])
      dcItem.style.width = payload[1] + "px"
    }
    
    // moves a droidcomponent to an empty slot or swaps with a present droidcomponent
    // payload = [droidComponentIdSrc, droidComponentSlotIdTrg]
    if(action == "swapDroidComponent"){ 
      const dcItemSrc = document.getElementById(payload[0])
      const dcSlotSrc = dcItemSrc.parentNode;
      const dcSlotTrg = document.getElementById(payload[1])
      const dcItemTrg = dcSlotTrg.querySelector('.dragItem')
      if(dcItemTrg!=null) window.renderer.moveWithTransition(dcItemTrg, dcSlotSrc)
      window.renderer.moveWithTransition(dcItemSrc, dcSlotTrg)
    }

    // swaps two registers
    // payload = [dragSlotId, dragItemId, dragSlotIdTarget, dragItemIdTarget]
    if( action == "swapVarDesc"){ 
      const dcItemSrc = document.getElementById(payload[1])
      const dcSlotSrc = dcItemSrc.parentNode;
      const dcItemTrg = document.getElementById(payload[3])
      const dcSlotTrg = dcItemTrg.parentNode;

      // first we swap ID and all content
      const idTmp = dcItemSrc.id
      dcItemSrc.id = dcItemTrg.id
      dcItemTrg.id = idTmp
      const childrenSrc = dcItemSrc.childNodes
      const childrenTrg = dcItemTrg.childNodes
      const length = childrenSrc.length      
      for (var i = 0; i < length; i++) {
        dcItemTrg.appendChild(childrenSrc[0]);
        dcItemSrc.appendChild(childrenTrg[0]);
      }  
      // because now we swap the items. But ID and items with eventlisteners should stay at the same place
      window.renderer.moveWithTransition(dcItemTrg, dcSlotSrc)
      window.renderer.moveWithTransition(dcItemSrc, dcSlotTrg)
      
      // finally swap variable and description text (thats what we actually wanted to swap)
      const varTmp = dcItemSrc.querySelector('.varName').value
      dcItemSrc.querySelector('.varName').value = dcItemTrg.querySelector('.varName').value 
      dcItemTrg.querySelector('.varName').value = varTmp
      const descTmp = dcItemSrc.querySelector('.varDescription').value
      dcItemSrc.querySelector('.varDescription').value = dcItemTrg.querySelector('.varDescription').value 
      dcItemTrg.querySelector('.varDescription').value = varTmp
    }

    // update registertype of g8 register
    // payload = [droidComponentIdSource, registerIdSource]
    if( action == "changeRegisterType"){ 
      const regItemSrc = document.getElementById(payload[1])
      const regSlotSrc = regItemSrc.closest('.dragSlot')
      let rt = regItemSrc.querySelector('.iChangeType').innerHTML
      if(rt=="in") {
        regItemSrc.querySelector('.iChangeType').innerHTML = "out"
        regItemSrc.setAttribute('data-type', "jackout")
        regSlotSrc.setAttribute('data-type', "jackout")
        let iRType = regItemSrc.querySelector("."+icons["jackin"])
        iRType.classList.remove(icons["jackin"])
        iRType.classList.add(icons["jackout"])
      }
      else{
        regItemSrc.querySelector('.iChangeType').innerHTML = "in"
        regItemSrc.setAttribute('data-type', "jackin")
        regSlotSrc.setAttribute('data-type', "jackin")
        let iRType = regItemSrc.querySelector("."+icons["jackout"])
        iRType.classList.remove(icons["jackout"])
        iRType.classList.add(icons["jackin"])
      }  
    }
    
    // add more sheets if needed
    window.renderer.updateSheets(document.querySelector('.sheet'), true);
  }

  // adds a new droidcomponent to the DOM
  addDroidComponent(objDcSlot, divDcSlotBefore){
    if(objDcSlot.content.type=="linebreak") { // safeguard needed when initalizing from local storage
      window.renderer.renderStateUpdate("addLinebreak", [objDcSlot,divDcSlotBefore.id])
      return
    }
    // create droidComponentSlot
    var divDcSlot = document.createElement("div")
    divDcSlot.id = objDcSlot.id
    divDcSlot.classList.add('dragSlot')
    divDcSlot.setAttribute('data-type', 'droidComponent')
    if(divDcSlotBefore == undefined) document.querySelector('.flexContent').appendChild(divDcSlot)
      else window.renderer.insertAfter(divDcSlot,divDcSlotBefore)
    this.ddh.addDragSlotEvents(divDcSlot)

    // create droidComponent
    let dc = objDcSlot.content
    if(dc){
      var divDc = document.createElement("div")
      divDc.id = dc.id
      if(dc.size != undefined) divDc.style.width = dc.size + "px"
      divDc.classList.add('dragItem','droidComponent', dc.name)
      divDc.setAttribute('draggable', true)
      divDc.setAttribute('data-type', 'droidComponent')
      divDcSlot.appendChild(divDc)
      this.ddh.addDragItemEvents(divDc)
      
      var divDcHeader = document.createElement("div")
      divDcHeader.classList.add('header')
      divDcHeader.innerHTML = dc.name.toUpperCase()
      divDc.appendChild(divDcHeader)

      var divDcControlLeft = document.createElement("div")
      divDcControlLeft.classList.add('ctrl','noprint')
      
      var timer
      var iMinus = document.createElement("i")
      iMinus.classList.add('bi','bi-dash-circle')
      iMinus.addEventListener('mousedown', e => { timer = setInterval(function(){ window.renderer.resizeDroidComponent("minus", dc.id )  },10)})
      iMinus.addEventListener("mouseup", function(){if (timer) clearInterval(timer)})
      iMinus.addEventListener("mouseout", function(){if (timer) clearInterval(timer)})
      var iPlus = document.createElement("i")
      iPlus.classList.add('bi','bi-plus-circle')
      iPlus.addEventListener('mousedown', e => { timer = setInterval(function(){ window.renderer.resizeDroidComponent("plus", dc.id )  },10)})
      iPlus.addEventListener("mouseup", function(){if (timer) clearInterval(timer)})
      iPlus.addEventListener("mouseout", function(){if (timer) clearInterval(timer)})
      //iPlus.addEventListener('mousedown', e => {resizeDroidComponent("plus", dc.id )});

      divDcControlLeft.appendChild(iMinus)
      divDcControlLeft.appendChild(iPlus)
      divDcHeader.prepend(divDcControlLeft)

      var divDcControlRight = document.createElement("div")
      divDcControlRight.classList.add('ctrl','noprint')
      var iDel = document.createElement("i")
      iDel.classList.add('bi','bi-x-circle-fill')
      iDel.addEventListener('click', e => window.renderer.modal.showModal("delete", "Delete Droid Component?", dc.id));
      var iAdd = document.createElement("i")
      iAdd.classList.add('bi','bi-arrow-bar-right')
      iAdd.addEventListener('click', e => window.renderer.modal.showModal("add","Insert Droid Component?", dc.id));
      divDcControlRight.appendChild(iDel)
      divDcControlRight.appendChild(iAdd)
      divDcHeader.appendChild(divDcControlRight)

      var divContent = document.createElement("div")
      divContent.classList.add('content')
      divDc.appendChild(divContent)
      
      const config = { attributes: true, childList: true, subtree: true }
      const observer = new MutationObserver(window.renderer.updateTextareaSize)

      if (dc.name == "description"){
        
        var textareaDesc = document.createElement("textarea")
        textareaDesc.classList.add('description')
        textareaDesc.spellcheck = false
        textareaDesc.placeholder = "_"
        textareaDesc.textContent = dc.content[0].content
        textareaDesc.addEventListener("input", window.renderer.updateTextareaSize)
        //textareaDesc.addEventListener('keyup', e => window.renderer.submitTextareaInput("updateDescription",dc.id, dc.content[0].id, textareaDesc.value))
        textareaDesc.addEventListener('blur', e => window.renderer.submitTextareaInput("updateDescription",dc.id, dc.content[0].id, textareaDesc.value, 0))
        divContent.appendChild(textareaDesc)
        divContent.appendChild(document.createElement("br"))

      }
      else { // create registers
        dc.content.forEach(register => {
          let datatype = register.component + register.registertype
          // the slot
          var divRegSlot = document.createElement("div")
          divRegSlot.classList.add('dragSlot')
          divRegSlot.setAttribute('data-type', datatype)
          divContent.appendChild(divRegSlot)
          this.ddh.addDragSlotEvents(divRegSlot)

          // the draggable item
          var divReg = document.createElement("div")
          divReg.id = register.id
          divReg.classList.add('dragItem', 'register')
          divReg.setAttribute('draggable', true)
          divReg.setAttribute('data-type', datatype)
          divRegSlot.appendChild(divReg)
          this.ddh.addDragItemEvents(divReg)

          divReg.innerHTML ='<div><i class="bi '+ icons[datatype] +'"></i></div>'
          var textareaVar = document.createElement("textarea")
          textareaVar.classList.add('varName')
          textareaVar.spellcheck = false
          textareaVar.placeholder = "_"
          textareaVar.addEventListener("input", window.renderer.updateTextareaSize)
          textareaVar.addEventListener("input", function () {this.value = this.value.toUpperCase(); });
          textareaVar.textContent = register.variablename
          setTimeout(function () {window.renderer.initTextareaSize(textareaVar)}, 10);
          //textareaVar.addEventListener('keyup', e => window.renderer.submitTextareaInput("updateVariable",dc.id, register.id, textareaVar.value))
          textareaVar.addEventListener('blur', e => window.renderer.submitTextareaInput("updateVariable",dc.id, register.id, textareaVar.value, 0))
          var textareaDesc = document.createElement("textarea")
          textareaDesc.classList.add('varDescription')
          textareaDesc.spellcheck = false
          textareaDesc.placeholder = "_"
          textareaDesc.addEventListener("input", window.renderer.updateTextareaSize)
          textareaDesc.textContent = register.description
          setTimeout(function () {window.renderer.initTextareaSize(textareaDesc)}, 10);
          //textareaDesc.addEventListener('keyup', e => window.renderer.submitTextareaInput("updateDescription",dc.id, register.id, textareaDesc.value))
          textareaDesc.addEventListener('blur', e => window.renderer.submitTextareaInput("updateDescription",dc.id, register.id, textareaDesc.value, 0))
          var div1 = document.createElement("div")
            var div11 = document.createElement("div")
            var spanRegName = document.createElement("span")
            spanRegName.append(register.name)
            div11.append(spanRegName)
            if(dc.name == "g8"){ // add a swap in/out button for g8 registers
              var iChangeType = document.createElement("i")
              iChangeType.classList.add('iChangeType','bi','bi-arrow-down-up')
              iChangeType.innerHTML = register.registertype
              iChangeType.addEventListener('click',
               e => window.renderer.modal.showModal("changeRegisterType","Change from<br/> input to output / output to input ?", [dc.id, register.id])
              );
              div11.append(iChangeType)
            }
            div1.appendChild(div11)
          div1.appendChild(document.createElement("div").appendChild(textareaVar))
          var div2 = document.createElement("div")
          div2.appendChild(textareaDesc)

          divReg.appendChild(div1)
          divReg.appendChild(div2)
        })
      }
    }
    return divDcSlot
  }

  // resizes the droidcomponents and snaps their new width to a grid
  resizeDroidComponent(mode, droidComponentId){
      let dc = document.getElementById(droidComponentId)
      dc.classList.add("noTransition")

      let width  = window.getComputedStyle(dc).getPropertyValue('width')
      let hp = getComputedStyle(document.body).getPropertyValue('--HP')
      
      let newString 
      if(mode=="plus") newString = "calc("+ width +" + 1px)"
      if(mode=="minus") newString = "calc("+ width +" - 1px)"
      dc.style.width = newString

      clearTimeout(this.timeout);
      // after resize finish: snap to grid, update state & renderer
      this.timeout = setTimeout(function () {
        dc.classList.remove("noTransition")
        let unsnappedWidth = parseFloat(window.getComputedStyle(dc).getPropertyValue('width'))
        let gridUnit = parseFloat(window.getComputedStyle(document.querySelector('.dragSlot')).getPropertyValue('margin'))
        let snappedWidth = parseInt(unsnappedWidth / (gridUnit*2)) * (gridUnit * 2)
        window.sh.updateState("resizeDroidComponent", [droidComponentId, snappedWidth])

        // resize all textareas
        document.querySelectorAll("textarea").forEach(textarea => window.renderer.initTextareaSize(textarea))
        
      }, 10);
    }
}


/*  ================================================================ 
        DRAG & DROP HANDLER
        does all the drag&drop logic
        calls a state update after a (correct) drop
    ================================================================*/

class DragDropHandler {
  constructor(){}

  addDragSlotEvents(dragSlot){
    dragSlot.addEventListener('dragenter', this.dragSlotEnter)
    dragSlot.addEventListener('dragover', this.dragSlotOver)
    dragSlot.addEventListener('dragleave', this.dragSlotLeave)
    dragSlot.addEventListener('drop', this.dragSlotDrop)
  }

  addDragItemEvents(dragItem){
    dragItem.addEventListener('dragstart', this.dragItemStart)
    dragItem.addEventListener('dragend', this.dragItemEnd)
  }

  dragItemStart(e) {
    e.stopPropagation(); // dont drag parent
    // transfer data for the dragged object
    e.dataTransfer.setData('dragItemId', this.id)
    // mark all slots with same datatype as compatible
    let fittingSlots = document.querySelectorAll('.dragSlot[data-type="' + this.dataset.type + '"]')
    fittingSlots.forEach(fittingSlot => { 
      if(this.parentNode !== fittingSlot) fittingSlot.classList.add("dragSlot-highlight"); 
    }) 
  }

  dragItemEnd(e) {
    e.stopPropagation() // dont drag parent
    let fittingSlots = document.querySelectorAll('.dragSlot[data-type="' + this.dataset.type + '"]')
    fittingSlots.forEach(fittingSlot => { fittingSlot.classList.remove("dragSlot-highlight"); })
  }

  dragSlotEnter(e) {
    e.preventDefault();
    if(e.target.classList.contains("dragSlot-highlight")){
      e.target.classList.add('dragSlot-over')
    }
  }

  dragSlotOver(e) {
    e.preventDefault();
    if(e.target.classList.contains("fittingSlot")){
      e.target.classList.add('dragSlot-over')
    }
  }

  dragSlotLeave(e) {
    e.target.classList.remove('dragSlot-over')
  }

  dragSlotDrop(e) {
    e.stopPropagation(); // dont drop in (probably existing) parent
    if(!e.target.classList.contains('dragSlot')) return  
    e.target.classList.remove('dragSlot-over')

    // get the dragItem and dragSlot elements
    const dragItemId = e.dataTransfer.getData('dragItemId')
    const dragItem = document.getElementById(dragItemId)
    // update state
    if(dragItem.classList.contains('droidComponent')){
      const droidComponentIdTarget = e.target.id
      window.sh.updateState("swapDroidComponent",[dragItemId, droidComponentIdTarget])
    } else if (dragItem.classList.contains('register')) {
      const registerIdTarget = e.target.children[0]?.id
      if(registerIdTarget!=undefined) {
        const droidComponentIdSource = dragItem.closest('.droidComponent').id
        const droidComponentIdTarget = e.target.closest('.droidComponent').id
        window.sh.updateState("swapVarDesc",[droidComponentIdSource, dragItemId, droidComponentIdTarget, registerIdTarget])
      }
    }
  }
}


/*  ================================================================ 
        MODAL
        is in charge of the modal popup
    ================================================================*/

class Modal {
  
  modal = undefined
  isOpened = false
  enterActionButton = undefined

  constructor(){
    this.modal = document.getElementById("modal")
    document.addEventListener('keyup', (e) => { if(e.key=="Escape" && window.renderer.modal.isOpened) window.renderer.modal.hideModal()})
    document.addEventListener('keyup', (e) => { 
      if(e.key=="Enter" && window.renderer.modal.isOpened && window.renderer.modal.enterActionButton != undefined){
        window.renderer.modal.enterActionButton.click()
        window.renderer.modal.hideModal()
        window.renderer.modal.enterActionButton = undefined
      }
    })
  }

  initModal(message){
    this.isOpened = true
    this.modal.onclick = function() { window.renderer.modal.hideModal();}
    let content = this.modal.querySelector('.modalContent')
    //content.style.left = window.renderer.mPosX
    content.style.top = window.renderer.mPosY
    content.onclick = function(e) {e.stopPropagation();}
    let exportContent = this.modal.querySelector('.exportContent')
    exportContent.innerHTML = ''
    this.modal.querySelector('.message').innerHTML = message  
    let actions = this.modal.querySelector('.actions')
    actions.innerHTML = ''
    this.modal.classList.add("visible")
    return [content, exportContent, actions]
  }

  showExport(){
    let [content,exportContent,actions] = this.initModal("Copy these parts to your droid patch")
    
    let [commentRegion,componentRegion,mappingInRegion,mappingOutRegion] = window.dh.exportData()

    this.createRegion(exportContent, "Comment Region","Copy to the upper section of your droid file", commentRegion)
    this.createRegion(exportContent, "Droid Components","Copy to the upper section of your droid file", componentRegion)
    this.createRegion(exportContent, "Input Mappings","Copy to the upper section of your droid file", mappingInRegion)
    this.createRegion(exportContent, "Output Mappings","Copy to the <b>END</b> of your droid file", mappingOutRegion)

    var bClose = document.createElement("button")
    bClose.classList.add('btn','btn-primary')
    bClose.innerHTML = '<i class="bColorClose bi bi-arrows-collapse">Close</i>' 
    bClose.onclick = function() { window.renderer.modal.hideModal() }
    actions.appendChild(bClose)

  }

  createRegion(node, regionHeader, regionDescription, value){
    var header = document.createElement("span")
    header.classList.add('header')
    header.innerHTML = regionHeader
    node.appendChild(header);
    var description = document.createElement("span")
    description.classList.add('description')
    description.innerHTML = regionDescription
    node.appendChild(description);
    var textarea = document.createElement("textarea")
    textarea.spellcheck = false
    textarea.value = value
    textarea.readOnly = true
    textarea.addEventListener("click", function () {this.select(); });
    node.appendChild(textarea)
  }

  showModal(action, message, payload){
    let [content,exportContent,actions]= this.initModal(message)
    
    if(action == "add"){ // payload = [source droidComponentId]
      Object.keys(droidComponents).forEach(name =>{
        var button = document.createElement("button")
        button.classList.add('btn','btn-primary')
        button.innerHTML = '<i class="bColorAdd bi bi-plus-circle-fill">' + name.toUpperCase() + '</i>' 
        button.onclick = function() { window.sh.updateState("addDroidComponent", [payload, name]); window.renderer.modal.hideModal() }
        actions.appendChild(button)
      })
      var button = document.createElement("button")
      button.classList.add('btn','btn-primary')
      button.innerHTML = '<i class="bColorLinebreak bi bi-arrow-return-left">LINEBREAK</i>' 
      button.onclick = function() { window.sh.updateState("addLinebreak", [payload]); window.renderer.modal.hideModal() }
      actions.appendChild(button)
    }

    if(action == "delete"){ // payload = [source droidComponentId]
      var bDel = document.createElement("button")
      bDel.classList.add('btn','btn-primary')
      bDel.innerHTML = '<i class="bColorDel bi bi-x-circle-fill">Delete</i>'
      bDel.onclick = function() { window.sh.updateState("delDroidComponent", [payload]); window.renderer.modal.hideModal() }
      actions.appendChild(bDel)
      this.enterActionButton = bDel
    }
    if(action == "changeRegisterType") {
      var bChangeType = document.createElement("button")
      bChangeType.classList.add('btn','btn-primary')
      bChangeType.innerHTML = '<i class="bLoadCache bi bi-arrow-down-up">Change</i>' 
      bChangeType.onclick = function() { sh.updateState("changeRegisterType", payload); window.renderer.modal.hideModal() }
      actions.appendChild(bChangeType)
      this.enterActionButton = bChangeType
    }
    
    if(action == "failItemCount") {}

    if(action == "localStorageAvailable") {
      var bLoad = document.createElement("button")
      bLoad.classList.add('btn','btn-primary')
      bLoad.innerHTML = '<i class="bLoadCache bi bi-device-hdd-fill">Restore</i>' 
      bLoad.onclick = function() { sh.updateState("initLayout", window.dh.stateFromLocalStorage); window.renderer.modal.hideModal() }
      actions.appendChild(bLoad)
      this.enterActionButton = bLoad
    }

    var bClose = document.createElement("button")
    bClose.classList.add('btn','btn-primary')
    bClose.innerHTML = '<i class="bColorClose bi bi-arrows-collapse">Close</i>' 
    bClose.onclick = function() { window.renderer.modal.hideModal() }
    actions.appendChild(bClose)

  }

  hideModal(){
    this.isOpened = false
    this.modal.classList.remove("visible")
  }

}


/*  ================================================================ 
        HELPER FUNCTIONS
    ================================================================*/

function swap(obj1, key1, obj2, key2) {
   [obj1[key1], obj2[key2]] = [obj2[key2], obj1[key1]];
}