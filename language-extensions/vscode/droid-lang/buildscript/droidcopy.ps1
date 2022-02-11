$filefrom=$args[0]
$fileto=$args[1]
$filetemplate=$args[2]

if(![System.IO.File]::Exists($filefrom)){
    Write-Host -ForegroundColor Yellow "Save your file first!"
    Exit
}
# parse droidcomponents
$droidcontent = Get-Content $filefrom -Encoding UTF8 -Raw
$pattern = "(# BEGIN DROIDCOMPONENT)(.|\n)*?(END DROIDCOMPONENT)"
$droidcomponents =  Select-String -InputObject $droidcontent -Pattern $pattern -AllMatches | 
            Foreach-Object { $_.Matches } 

# replace header variable in html template
$templatecontent = Get-Content $filetemplate -Encoding UTF8 -Raw
$data = @()
foreach($line in $templatecontent) {
    if ($line -match '\$droidcomponents') {
        $line = $line -replace '\$droidcomponents', $droidcomponents
    }
    $data += $line
}

# write the final html file
Set-Content $fileto $data