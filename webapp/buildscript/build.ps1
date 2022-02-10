$fileindex = "../dev/index.html"
$index = Get-Content $fileindex -Encoding UTF8 -Raw

$filecss = "../dev/droid.css"
$css = Get-Content $filecss -Encoding UTF8 -Raw

$filejs = "../dev/droid.js"
$js = Get-Content $filejs -Encoding UTF8 -Raw

$REPLACE_CSS_FROM = '<link rel=\"stylesheet\" href=\"droid.css\">'
$REPLACE_CONTENT_FROM = '<div id=\"code\" class=\"invisible\">'
$REPLACE_CONTENT_TO = '<div id="code" class="invisible">$droidcomponents'
$REPLACE_JS_FROM = '<script src=\"droid.js\"><\/script>'

$filetoStandalone = "../droid.html"
$filetoSublime = "../../language-extensions/sublime/droid-lang/buildscript/droid.html"
$filetoVscode = "../../language-extensions/vscode/droid-lang/buildscript/droid.html"

($index -replace $REPLACE_CSS_FROM,"<style>$css</style>" -replace $REPLACE_JS_FROM,"<script>$js</script>") | Out-File -encoding ASCII $filetoStandalone
($index -replace $REPLACE_CONTENT_FROM,$REPLACE_CONTENT_TO -replace $REPLACE_CSS_FROM,"<style>$css</style>" -replace $REPLACE_JS_FROM,"<script>$js</script>") | Out-File -encoding ASCII $filetoSublime
($index -replace $REPLACE_CONTENT_FROM,$REPLACE_CONTENT_TO -replace $REPLACE_CSS_FROM,"<style>$css</style>" -replace $REPLACE_JS_FROM,"<script>$js</script>") | Out-File -encoding ASCII $filetoVscode