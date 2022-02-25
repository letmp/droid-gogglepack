$filefrom=$args[0]
$fileto=$args[1]
$filetemplate=$args[2]

if(![System.IO.File]::Exists($filefrom)){
    Write-Host -ForegroundColor Yellow "Save your file first!"
    Exit
}

# ========= parse droidcomponents and write html file =========
Write-Host -ForegroundColor Yellow "Building HTML File"
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


# ========= send filecontent via sysex to x7 expander ========= 

$x7token = "# X7 send"
$containsWord = $droidcontent | %{$_ -match $x7token}
If($containsWord -contains $true)
{
    Write-Host -ForegroundColor Yellow "Sending data via sysex"

    $fileSysexHead= Get-Content "$PSScriptRoot/../sendmidi/win/sysexhead.txt"
    $fileSysexTail= Get-Content "$PSScriptRoot/../sendmidi/win/sysextail.txt"
    
    $fileSysexTmp= "$PSScriptRoot/../sendmidi/tmp.syx"
    Set-Content $fileSysexTmp "$fileSysexHead $droidcontent $fileSysexTail"

    $smbin = "$PSScriptRoot/../sendmidi/win/sendmidi.exe"
    & $smbin dev x7 syf $fileSysexTmp

    Remove-Item $fileSysexTmp
}